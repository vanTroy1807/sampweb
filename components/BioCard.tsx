'use client';

import { useEffect, useRef } from 'react';

export default function BioCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const rotateY = (clientX / innerWidth - 0.5) * 10;
            const rotateX = -(clientY / innerHeight - 0.5) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
        };

        const onMouseLeave = () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseleave', onMouseLeave);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            id="floating-card"
            className="floating-content max-w-2xl w-full rounded-2xl shadow-2xl p-8 md:p-12 my-16 md:my-24 mx-auto"
        >
            <article className="prose prose-invert prose-lg max-w-none text-gray-300">
                <p>
                    This trip was my post-JEE getaway—a very well-deserved and much-needed
                    vacation after a relentless five-year academic marathon.
                </p>
                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Gangtok</h3>
                <p>
                    The adventure began in Gangtok, vibrant and bustling, offering a lively
                    contrast to my previous months spent glued to textbooks. Explored MJ
                    Road, where I enjoyed delicious Thai food, indulged in some nostalgia
                    by buying Pokémon cards 😅, and even took an exhilarating ride on the
                    ropeway. Visited West Point Mall, and stumbled upon a particularly
                    nerve-wracking sidewalk with one side missing 😭 (did I mention
                    heights aren't really my thing?).
                </p>
                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Majitar</h3>
                <p>
                    Majitar offered a completely different experience—a serene valley
                    setting contrasting sharply with Gangtok's peak views. Checked out the
                    beautiful campus of SMIT, explored nearby Singtam, and had quite a
                    nerve-racking journey back when it started pouring heavily. The next
                    day made up for it, however, with an epic, relaxing day at a swimming
                    pool resort.
                </p>
                <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 my-6">
                    <footer className="text-sm text-gray-500">
                        20 June 2025 - 24 June 2025
                    </footer>
                </blockquote>
            </article>
        </div>
    );
}
