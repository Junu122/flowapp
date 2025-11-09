import React from 'react'
import "./Cta.css"
const Cta = () => {
  return (
    <section className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Envision Your Next Project?</h2>
        <p className="cta-subtitle">
          Let's collaborate on transforming your ideas into award-winning architecture.
        </p>
        <a href="/contact" className="cta-button">
          Start a Conversation
        </a>
      </div>
    </section>
  )
}

export default Cta