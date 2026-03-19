import React from 'react';
import './Team.css';
import emithImg from '../assets/team/Emith.png';
import akithmaImg from '../assets/team/Akithma.png';
import sethumiImg from '../assets/team/Sethumi.png';
import useReveal from '../hooks/useReveal';

const TeamMember = ({ name, role, img, linkedin, github, index, isVisible }) => (
  <div className={`team-card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
    <div className="team-img-wrapper">
      <img src={img} alt={name} />
      <div className="team-socials">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
    <div className="team-info">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

const Team = () => {
  const [ref, isVisible] = useReveal();
  const members = [
    { name: "Emith Jayasuriya", role: "AI & System Intelligence", img: emithImg, linkedin: "https://www.linkedin.com/in/emith-jayasuriya-3a4265316/", github: "https://github.com/emithjayasuriya020" },
    { name: "Akithma Perera", role: "UI/UX & Mobile Development", img: akithmaImg, linkedin: "https://www.linkedin.com/in/akithma-perera-429099391", github: "https://github.com/akithma33perera" },
    { name: "Sethumi Thevinka", role: "Backend & Data Management", img: sethumiImg, linkedin: "https://www.linkedin.com/in/sethumi-ranaweera", github: "https://github.com/Sethu714" }
  ];

  return (
    <section className="team" id="about-us" ref={ref}>
      <div className="container">
        <div className={`section-header-left reveal ${isVisible ? 'visible' : ''}`}>
          <h2>Team Eureka</h2>
          <p>We're University students who were frustrated with losing items on campus and never getting them back...</p>
        </div>
        
        <div className="team-grid">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
