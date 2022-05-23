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
                  <div className="contact-message">
                        <div className="contact-message-content">
                              <h1 className="message-tittle"> Creemos en el trabajo<br />colectivo y en el poder<br />de contar nuestras historias</h1>
                              <h3 className="message-content">Trae una idea para tu negocio,<br />envía tu guion nacionalizado y/o, participa<br />en nuestras actividades como tallerista; en<br />siembra producciones, cultivamos tus ideas. </h3>
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
                  <div className="contact-form-container">
                        <form id="form" class="topBefore">
                              <div className="top">
                                    <input id="name" type="text" placeholder="NOMBRE" />
                                    <input id="email" type="text" placeholder="CORREO" />
                              </div>
                              <input id="email" type="text" placeholder="ASUNTO" />
                              <textarea id="message" type="text" placeholder="MENSAJE"></textarea>
                              <input id="submit" type="submit" value="ENVIAR" />
                        </form>
                  </div>
            </div>
      )
}

export default Contact;