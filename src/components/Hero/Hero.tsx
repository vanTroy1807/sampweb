import { useState, useEffect } from 'react';
import useCountUp from '../../hooks/useCountUp';
import './Hero.css';

const Hero: React.FC = () => {
    const stat1 = useCountUp(10, 2000, '+');
    const stat2 = useCountUp(500, 2500, '+');
    const stat3 = useCountUp(20, 2000, '+');

    // Typewriter effect
    const fullText = 'Activity Centre';
    const [typed, setTyped] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setTyped(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                // Blink cursor a few times then hide
                setTimeout(() => setShowCursor(false), 2000);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    // Parallax on mouse move
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero__bg-effects">
                <div
                    className="hero__orb hero__orb--1"
                    style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)` }}
                ></div>
                <div
                    className="hero__orb hero__orb--2"
                    style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 20}px)` }}
                ></div>
                <div
                    className="hero__orb hero__orb--3"
                    style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 10}px)` }}
                ></div>
                <div className="hero__grid-overlay"></div>

                {/* Floating geometric shapes */}
                <div className="hero__shape hero__shape--1"></div>
                <div className="hero__shape hero__shape--2"></div>
                <div className="hero__shape hero__shape--3"></div>
                <div className="hero__shape hero__shape--4"></div>
            </div>

            <div className="hero__content container">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    IIITV - International Campus Diu
                </div>

                <h1 className="hero__title">
                    Student{' '}
                    <span className="hero__title-accent">
                        {typed}
                        <span className={`hero__cursor ${showCursor ? '' : 'hero__cursor--hidden'}`}>|</span>
                    </span>
                </h1>

                <p className="hero__subtitle">
                    Empowering students through academic, technical, cultural, sports &amp;
                    welfare activities at IIIT Vadodara — International Campus Diu
                </p>

                <div className="hero__actions">
                    <a href="#committees" className="hero__btn hero__btn--primary">
                        <span className="hero__btn-shimmer"></span>
                        Explore Committees
                        <span className="hero__btn-arrow">→</span>
                    </a>
                    <a href="#about" className="hero__btn hero__btn--secondary">
                        Learn More
                    </a>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number" ref={stat1.ref}>{stat1.display}</span>
                        <span className="hero__stat-label">Active Clubs</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number" ref={stat2.ref}>{stat2.display}</span>
                        <span className="hero__stat-label">Members</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number" ref={stat3.ref}>{stat3.display}</span>
                        <span className="hero__stat-label">Events/Year</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
