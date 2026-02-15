import './Committees.css';
import useTilt from '../../hooks/useTilt';

interface CommitteeData {
    icon: string;
    title: string;
    description: string;
    color: string;
    highlights: string[];
}

const committees: CommitteeData[] = [
    {
        icon: '💻',
        title: 'Technical Committee',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        color: '#0ea5e9',
        highlights: ['Horizon Tech Fest', 'Hackathons', 'Workshops', 'Tech Talks'],
    },
    {
        icon: '🎭',
        title: 'Cultural Committee',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        color: '#f59e0b',
        highlights: ['Cultural Fest', 'Art Exhibition', 'Music Night', 'Dance Events'],
    },
    {
        icon: '⚽',
        title: 'Sports Committee',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        color: '#10b981',
        highlights: ['Olympus Sports Fest', 'Inter-College', 'Fitness Drives', 'Tournaments'],
    },
];

const CommitteeCard: React.FC<{ data: CommitteeData; index: number }> = ({ data, index }) => {
    const tilt = useTilt(10);

    return (
        <div
            className={`committees__card reveal reveal-delay-${index + 1}`}
            style={{ '--card-accent': data.color } as React.CSSProperties}
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
        >
            <div className="tilt-glow committees__card-glow"></div>
            <div className="committees__card-icon">{data.icon}</div>
            <h3 className="committees__card-title">{data.title}</h3>
            <p className="committees__card-desc">{data.description}</p>
            <div className="committees__card-highlights">
                {data.highlights.map((h, hi) => (
                    <span
                        className="committees__tag"
                        key={h}
                        style={{ animationDelay: `${hi * 0.08}s` }}
                    >
                        {h}
                    </span>
                ))}
            </div>
            <div className="committees__card-image">
                <span className="committees__card-alt">
                    {data.title} Activities Photo
                </span>
            </div>
        </div>
    );
};

const Committees: React.FC = () => {
    return (
        <section id="committees" className="committees">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Committees</h2>
                    <p>
                        Three pillars driving student excellence across technical, cultural
                        and sports domains
                    </p>
                    <div className="section-divider"></div>
                </div>

                <div className="committees__grid">
                    {committees.map((c, i) => (
                        <CommitteeCard data={c} index={i} key={c.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committees;
