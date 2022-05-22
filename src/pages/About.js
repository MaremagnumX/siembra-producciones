import React from "react";
import Title from '../components/Title.js'
import '../styles/About.css';

function About() {
      return (
            <div className="container-about">
                  <div className="green-title">
                        <Title title='El colectivo' color='green' size='big' />
                  </div>
                  <div className="paragraph-container">
                        <p className="paragraph">
                        Lorem tempor amet laboris elit voluptate magna pariatur. 
                        Commodo eu magna non consequat nulla enim sit pariatur veniam aliquip ipsum dolore sint. 
                        Nisi nulla proident deserunt ullamco consectetur nostrud non.
                        <br/>
                        <br/>
                        Lorem tempor amet laboris elit voluptate magna pariatur. 
                        Commodo eu magna non consequat nulla enim sit pariatur veniam aliquip ipsum dolore sint. 
                        Nisi nulla proident deserunt ullamco consectetur nostrud non. Lorem tempor amet laboris elit 
                        voluptate magna pariatur. Commodo eu magna non consequat nulla enim sit pariatur veniam aliquip 
                        ipsum dolore sint. Nisi nulla proident deserunt ullamco consectetur nostrud non.
                        </p>
                  </div>
            </div>
      )
}

export default About;