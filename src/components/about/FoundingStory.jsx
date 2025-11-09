import React from 'react';
import './FoundingStory.css'; // Import the CSS file

// Placeholder image for founders or a historical photo
const foundersImage = '/images/group.avif';

const FoundingStory = () => {
  return (
    <section className="story-section-container">
      <div className="story-content-wrapper">
        
        {/* Left Column: Image/Visual */}
        <div className="story-image-column">
          <img src={foundersImage} alt="Founders or early studio" className="story-image" />
          {/* Optional: Add key milestones as a simple list */}
          <ul className="milestones-list">
            <li>**2005:** Firm established by Dr. Aris and Eng. Liu</li>
            <li>**2012:** Completed first major institutional project</li>
            <li>**2020:** Awarded the National Design Excellence Award</li>
          </ul>
        </div>
        
        {/* Right Column: Narrative Text */}
        <div className="story-text-column">
          <h2 className="story-title">Our Foundation: A Vision for Architectural Integrity</h2>
          <p className="story-paragraph">
            Flow Architects is driven by a simple, yet profound philosophy: that architecture must serve humanity and context equally. Disillusioned with mass-produced, transient design, Dr. Aris sought to build a practice dedicated to longevity, meticulous craft, and environmental responsibility.
          </p>
          <p className="story-paragraph">
            Starting from a small studio, our firm quickly grew through referrals, establishing a reputation for taking on technically challenging projects that demand innovative structural and sustainable solutions. Our commitment to deep client collaboration ensures every space we create is not just built, but perfectly curated to the user's needs.
          </p>
          <p className="story-paragraph emphasis">
            Today, that original vision guides our diverse team of  architects and designers, pushing the boundaries of what is possible while staying rooted in timeless design principles.
          </p>
          <a href="/project" className="story-cta-button">
            View Our Latest Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;