import React from 'react'
import './Contact.css'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!');
        // Add your form submission logic here (e.g., API call)
    };
    return (
        <section className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">
                    Let's <span className="highlight-text-contact">Build</span> Together
                </h1>
                <p className="contact-subtitle">
                    Ready to start your next project? Reach out to our team today to schedule a consultation.
                </p>
            </div>

            <div className="contact-content-grid">
                {/* -------------------- Contact Form -------------------- */}
                <div className="contact-form-box">
                    <h2 className="section-heading-contact">Send Us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number (Optional)" />
                        <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
                        <button type="submit" className="submit-button">
                            Submit Inquiry
                        </button>
                    </form>
                </div>

                {/* -------------------- Contact Details & Map -------------------- */}
                <div className="contact-details-box">
                    <h2 className="section-heading-contact">Our Details</h2>
                    <div className="details-group">
                        <h3 className="detail-label">Office Location</h3>
                        <p className="detail-value">
                            Flow Architects Studio
                            <br />
                            Riverview arcade,Bypass Road, kunthipuzha, Mannarkkad, palakkad,
                            <br />
                            Kerala, India. Pin: 678582
                        </p>
                    </div>

                    <div className="details-group">
                        <h3 className="detail-label">General Inquiries</h3>
                        <p className="detail-value">
                            Email: flowarch.architects@gmail.com
                            <br />
                            Phone: +91 9947 646 299
                        </p>
                    </div>

                    {/* Simple Map Placeholder */}
                    <div className="map-placeholder">
                        
                         <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.60933187325!2d76.44115117771372!3d10.992831961243345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d578384a352b%3A0xa465426b9ecd13a3!2sFLOW%20Architects!5e0!3m2!1sen!2sin!4v1762081405914!5m2!1sen!2sin" 
                         width="800" 
                         height="450" 
                         style={{border:0}} 
                         allowfullscreen="" 
                         loading="lazy" 
                         referrerpolicy="no-referrer-when-downgrade">

                         </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact