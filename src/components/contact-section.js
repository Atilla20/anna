import React, { Component } from 'react';
import ContactForm from './contact-form';


class ContactSection extends Component {
    render() {
        return(
            <div className="contact-section-container">
                <h2>Contact Me</h2>
                <div className="contact-blue-square">
                
                <ContactForm/>
                
                </div>
            
            </div>
        )
    }
}

export default ContactSection;