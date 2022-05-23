import React from "react";
import '../styles/Contact.css';
import Title from "../components/Title";

function Contact() {
      return (
            <div className="contact-container">
                  <div className="contact-cover">
                        <div className="contact-filter"></div>
                        <div className="contact-title-container">
                              <Title className="contact-title" title="Escríbenos" size="big" />
                        </div>
                  </div>
            </div>
      )
}

export default Contact;