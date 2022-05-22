import React from "react";
import '../styles/Home.css';
import Header from '../components/Header.js';
import VideoCover from '../components/VideoCover.js';
import Video from '../components/Video.js';
import Title from '../components/Title.js';
import Footer from '../components/Footer';

function Home () {
      return (
            <div className="Home">
			<Header />
			<VideoCover />
			<Title title='Realizaciones recientes' />
			<Video />
			<Title title='Próximamente' />
			<Video />
			<div className='green-title'>
				<Title title='Síguenos' color='green' />
			</div>
			<div className='footer'>
				<Footer/>
			</div>
		</div>
      )
}

export default Home;