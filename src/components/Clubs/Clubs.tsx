import { useState } from 'react';
import './Clubs.css';

interface ClubData {
    name: string;
    emoji: string;
    category: 'technical' | 'cultural';
    description: string;
}

const clubs: ClubData[] = [
    {
        name: 'DCODR — Coding Club',
        emoji: '👨‍💻',
        category: 'technical',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'VECTOR — Design Club',
        emoji: '🎨',
        category: 'technical',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'DROID — Robotics Club',
        emoji: '🤖',
        category: 'technical',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'ARGO — Gaming Club',
        emoji: '🎮',
        category: 'technical',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'STOCKOPS — Finance Club',
        emoji: '📈',
        category: 'technical',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'Music Club',
        emoji: '🎵',
        category: 'cultural',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'Dance Club',
        emoji: '💃',
        category: 'cultural',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'Drama Club',
        emoji: '🎭',
        category: 'cultural',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'Photography Club',
        emoji: '📸',
        category: 'cultural',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
        name: 'Literature Club',
        emoji: '📚',
        category: 'cultural',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
];

type Filter = 'all' | 'technical' | 'cultural';

const Clubs: React.FC = () => {
    const [filter, setFilter] = useState<Filter>('all');

    const filtered = filter === 'all' ? clubs : clubs.filter((c) => c.category === filter);

    return (
        <section id="clubs" className="clubs">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Clubs</h2>
                    <p>Student-run organizations driving innovation, creativity and fun</p>
                    <div className="section-divider"></div>
                </div>

                <div className="clubs__filters reveal">
                    {(['all', 'technical', 'cultural'] as Filter[]).map((f) => (
                        <button
                            key={f}
                            className={`clubs__filter-btn ${filter === f ? 'clubs__filter-btn--active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="clubs__grid">
                    {filtered.map((club, i) => (
                        <div
                            className={`clubs__card reveal reveal-delay-${(i % 4) + 1}`}
                            key={club.name}
                        >
                            <div className="clubs__card-emoji">{club.emoji}</div>
                            <div className="clubs__card-badge">{club.category}</div>
                            <h3 className="clubs__card-name">{club.name}</h3>
                            <p className="clubs__card-desc">{club.description}</p>
                            <div className="clubs__card-image">
                                <span>{club.name} — Club Banner</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clubs;
