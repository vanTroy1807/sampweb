'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const icoCanvasRef = useRef<HTMLCanvasElement>(null);
    const bgCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // --- Interactive Icosahedron Scene ---
        const initIcosahedronScene = () => {
            const canvas = icoCanvasRef.current;
            if (!canvas) return;

            let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, crystal: THREE.Mesh;
            let mouseX = 0, mouseY = 0;
            let windowHalfX = window.innerWidth / 2;
            let windowHalfY = window.innerHeight / 2;
            let animationId: number;

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const geometry = new THREE.IcosahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xa6d733,
                emissive: 0x9bc92e,
                metalness: 0.8,
                roughness: 0.2,
                flatShading: true,
                transparent: true,
                opacity: 0.8,
            });
            crystal = new THREE.Mesh(geometry, material);
            scene.add(crystal);

            const wireframeGeo = new THREE.IcosahedronGeometry(1.51, 0);
            const wireframeMat = new THREE.MeshBasicMaterial({
                color: 0x272822,
                wireframe: true,
                transparent: true,
                opacity: 0.2,
            });
            const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
            crystal.add(wireframe);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xec4899, 1, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);

            const pointLight2 = new THREE.PointLight(0x60a5fa, 1, 100);
            pointLight2.position.set(-5, -5, -5);
            scene.add(pointLight2);

            const onWindowResize = () => {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            const onDocumentMouseMove = (event: MouseEvent) => {
                mouseX = (event.clientX - windowHalfX) / 2;
                mouseY = (event.clientY - windowHalfY) / 2;
            };

            const animateIcosahedron = () => {
                animationId = requestAnimationFrame(animateIcosahedron);
                crystal.rotation.x += 0.0005;
                crystal.rotation.y += 0.001;
                camera.position.x += (mouseX / 100 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY / 100 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);
                renderer.render(scene, camera);
            };

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
            animateIcosahedron();

            return () => {
                document.removeEventListener('mousemove', onDocumentMouseMove);
                window.removeEventListener('resize', onWindowResize);
                cancelAnimationFrame(animationId);
                renderer.dispose();
            };
        };

        // --- Background Floating Particles Scene ---
        const initBackgroundParticles = () => {
            const canvas = bgCanvasRef.current;
            if (!canvas) return;

            let animationId: number;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const particlesCount = 5000;
            const posArray = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }

            const particlesGeometry = new THREE.BufferGeometry();
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x818cf8 });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            const clock = new THREE.Clock();

            const animateParticles = () => {
                animationId = requestAnimationFrame(animateParticles);
                const elapsedTime = clock.getElapsedTime();
                particles.rotation.y = elapsedTime * 0.05;
                particles.rotation.x = elapsedTime * 0.02;
                renderer.render(scene, camera);
            };

            const onWindowResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            };

            window.addEventListener('resize', onWindowResize);
            animateParticles();

            return () => {
                window.removeEventListener('resize', onWindowResize);
                cancelAnimationFrame(animationId);
                renderer.dispose();
            };
        };

        const cleanupIco = initIcosahedronScene();
        const cleanupParticles = initBackgroundParticles();

        return () => {
            if (cleanupIco) cleanupIco();
            if (cleanupParticles) cleanupParticles();
        };
    }, []);

    return (
        <>
            <canvas
                ref={bgCanvasRef}
                className="fixed top-0 left-0 w-full h-full -z-20 opacity-10"
            />
            <canvas
                ref={icoCanvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
            />
        </>
    );
}
