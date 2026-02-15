import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header reveal">
                    <h2>About Student Gymkhana</h2>
                    <p>The heart of student life at IIITV-ICD</p>
                    <div className="section-divider"></div>
                </div>

                <div className="about__grid">
                    <div className="about__content reveal">
                        <h3 className="about__heading">Our Mission</h3>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            scelerisque aliquam odio et faucibus. Praesent vitae eros
                            pellentesque, tempus turpis eget, pharetra metus. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            curae.
                        </p>
                    </div>

                    <div className="about__image reveal reveal-delay-2">
                        <div className="about__image-placeholder">
                            <span className="about__image-alt">Student Gymkhana Group Photo</span>
                            <div className="about__image-icon">🎓</div>
                        </div>
                    </div>
                </div>

                <div className="about__values">
                    {[
                        {
                            icon: '🎯',
                            title: 'Academic Excellence',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
                        },
                        {
                            icon: '💡',
                            title: 'Innovation & Tech',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
                        },
                        {
                            icon: '🎭',
                            title: 'Cultural Diversity',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
                        },
                        {
                            icon: '⚽',
                            title: 'Sports & Fitness',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
                        },
                    ].map((v, i) => (
                        <div className={`about__value-card reveal reveal-delay-${i + 1}`} key={v.title}>
                            <div className="about__value-icon">{v.icon}</div>
                            <h4>{v.title}</h4>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
