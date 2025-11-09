import React from 'react'
import "./About.css"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import HeaderContainer from '../HeaderContainer'
const About = () => {
    const teamMembers = [
        { name: 'Member 1', title: 'Chief Visionary Officer', bio: 'Driving our strategic direction and fostering a culture of innovation.', img: 'team-alice.jpg' },
        { name: 'Member 2', title: 'Head of Product Excellence', bio: 'Ensuring every product we deliver meets the highest standards of quality and usability.', img: 'team-robert.jpg' },
        // Add more team members
    ];

    const ParallaxImage = () => {
        // This is the component holding the image we want to animate
        return (
            // The ParallaxBanner creates the effect.
            // layers: defines what moves and how fast.
            // image: the image source.
            // speed: the vertical speed relative to the scroll (negative means moving slower than the scroll).
            <ParallaxBanner
                layers={[
                    {
                        image: '/images/postimg5.jpg', // Your image source
                        speed: -15, // Moves up 15% slower than the scroll speed
                    },
                ]}
                className="story-parallax-image"
            >
                {/* You can add content over the parallax image if needed */}
            </ParallaxBanner>
        );
    };
    return (
        <>
        
          {/* <HeaderContainer span1={"We are"} span2={"Flow Architects"} para={"Pioneering the future of digital solutions with passion, precision, and purpose."}/> */}

      
         
                <section className="about-us-container">
            <div className="core-story-section">
                {/* <div className="story-image-box">
                    <ParallaxImage />
                </div> */}
                <div className="story-content">
                    <h2 className="section-heading">Our  Story & Vision</h2>
                    <ul className="vision-points">
                        <li><b>Flow Architects</b> is a multidisciplinary architectural studio based in Kerala, known for its
                            thoughtful and context-driven approach to design. The firm engages in a diverse range of works
                            — from residential and commercial buildings to interior design for homes, offices, and
                            clinics — each shaped by a focus on functionality, clarity, and the user’s everyday experience.</li>
                        <li>Guided by a belief that architecture should flow — with its surroundings, with people, and with
                            purpose — the studio’s work reflects clarity in planning, ease of circulation, and sensitive
                            response to context. Every project begins with an open mind, evolving through close
                            collaboration with clients and careful consideration of site, spatial quality and functionality.</li>
                        <li>While modern minimalism forms the base of design language, Flow Architects embraces a
                            flexible and evolving philosophy. The studio responds intuitively to the unique character of each
                            project — whether it calls for rooted traditional values, timeless colonial charm, or a bold
                            contemporary expression.</li>
                    </ul>

                </div>

            </div>

            <div className="team-section">
                <h2 className="section-heading-centered">Meet the Architects </h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <div className="member-photo-wrapper">
                                {/* Image tag for visual value:  */}
                                <img src={member.img} alt={member.name} className="member-photo" />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-title">{member.title}</p>
                            <p className="member-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamic CTA Section - Encourage the client to take the next step */}
           
        </section>
       
        </>
    )
}

export default About