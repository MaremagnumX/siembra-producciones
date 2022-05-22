import React from "react";
import '../styles/Home.css';
import VideoCover from '../components/VideoCover.js';
import Video from '../components/Video.js';
import Title from '../components/Title.js';

function Home () {
      return (
            <div className="Home">
			<VideoCover />
			<Title title='Realizaciones recientes' />
			<Video />
			<Title title='Próximamente' />
			<Video />
		</div>
      )
}

export default Home;