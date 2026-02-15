import { useRef, useCallback } from 'react';

/**
 * Provides 3D tilt effect on mousemove for a card-like element.
 * Returns an object with a ref and event handlers to spread onto the element.
 */
const useTilt = (maxTilt = 8) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            el.style.transition = 'transform 0.1s ease';

            // Move the inner glow
            const glowEl = el.querySelector('.tilt-glow') as HTMLElement;
            if (glowEl) {
                glowEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.15), transparent 60%)`;
            }
        },
        [maxTilt]
    );

    const handleMouseLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        el.style.transition = 'transform 0.5s ease';

        const glowEl = el.querySelector('.tilt-glow') as HTMLElement;
        if (glowEl) {
            glowEl.style.background = 'transparent';
        }
    }, []);

    return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
};

export default useTilt;
