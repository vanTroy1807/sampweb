import './Events.css';

interface EventData {
    title: string;
    date: string;
    category: string;
    emoji: string;
    description: string;
    color: string;
}

const events: EventData[] = [
    {
        title: 'Horizon — Tech Fest',
        date: 'March 2026',
        category: 'Technical',
        emoji: '🚀',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#0ea5e9',
    },
    {
        title: 'Olympus — Sports Fest',
        date: 'February 2026',
        category: 'Sports',
        emoji: '🏆',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#10b981',
    },
    {
        title: 'Cultural Night',
        date: 'January 2026',
        category: 'Cultural',
        emoji: '🎶',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#f59e0b',
    },
    {
        title: 'Hackathon 2026',
        date: 'April 2026',
        category: 'Technical',
        emoji: '💡',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#06b6d4',
    },
    {
        title: 'Annual Sports Day',
        date: 'December 2025',
        category: 'Sports',
        emoji: '🏅',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#f43f5e',
    },
    {
        title: 'Open Mic Night',
        date: 'November 2025',
        category: 'Cultural',
        emoji: '🎤',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        color: '#06b6d4',
    },
];

const Events: React.FC = () => {
    return (
        <section id="events" className="events">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Events &amp; Fests</h2>
                    <p>Celebrating talent, innovation and sportsmanship throughout the year</p>
                    <div className="section-divider"></div>
                </div>

                <div className="events__timeline">
                    {events.map((event, i) => (
                        <div
                            className={`events__item reveal reveal-delay-${(i % 4) + 1}`}
                            key={event.title}
                            style={{ '--event-color': event.color } as React.CSSProperties}
                        >
                            <div className="events__item-dot"></div>
                            <div className="events__item-card">
                                <div className="events__item-header">
                                    <span className="events__item-emoji">{event.emoji}</span>
                                    <div>
                                        <h3 className="events__item-title">{event.title}</h3>
                                        <div className="events__item-meta">
                                            <span className="events__item-date">{event.date}</span>
                                            <span className="events__item-category">{event.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="events__item-desc">{event.description}</p>
                                <div className="events__item-image">
                                    <span>{event.title} — Event Banner</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
