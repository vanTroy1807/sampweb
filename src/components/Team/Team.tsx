import './Team.css';

interface TeamMember {
    name: string;
    role: string;
    emoji: string;
}

const team: TeamMember[] = [
    { name: 'John Doe', role: 'President', emoji: '👔' },
    { name: 'Jane Smith', role: 'Vice President', emoji: '🎯' },
    { name: 'Alex Johnson', role: 'General Secretary — Technical', emoji: '💻' },
    { name: 'Sarah Williams', role: 'General Secretary — Cultural', emoji: '🎭' },
    { name: 'Mike Brown', role: 'General Secretary — Sports', emoji: '⚽' },
    { name: 'Emily Davis', role: 'Treasurer', emoji: '💰' },
    { name: 'Chris Wilson', role: 'Joint Secretary', emoji: '📋' },
    { name: 'Anna Taylor', role: 'PR & Media Head', emoji: '📢' },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Team</h2>
                    <p>The passionate leaders driving student governance forward</p>
                    <div className="section-divider"></div>
                </div>

                <div className="team__grid">
                    {team.map((member, i) => (
                        <div
                            className={`team__card reveal reveal-delay-${(i % 4) + 1}`}
                            key={member.name}
                        >
                            <div className="team__card-avatar">
                                <span className="team__card-avatar-alt">
                                    Photo of {member.name}
                                </span>
                                <div className="team__card-avatar-emoji">{member.emoji}</div>
                            </div>
                            <h3 className="team__card-name">{member.name}</h3>
                            <p className="team__card-role">{member.role}</p>
                            <div className="team__card-socials">
                                <a href="#" className="team__social-link" aria-label="LinkedIn">in</a>
                                <a href="#" className="team__social-link" aria-label="Email">✉</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
