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
                  <div className="contact-data">
                        <div className="contact-subtitle">
                              <Title title={'Contacto'} color={'green'} />
                        </div>
                        <div className="contact-info">
                              <div className="contact-info-text">
                                    <p>
                                          siembraproducciones@gmail.com<br /><br />
                                          +57 318 399 2225<br /><br />
                                          Horario: 8:30 - 1:00 | 2:30 - 6:30 Lunes a Sábado<br /><br />
                                          Antonia Santos, Bucaramanga Santander
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className="contact-map">

                  </div>
                  <div className="contact-form">

                  </div>
            </div>
      )
}

export default Contact;