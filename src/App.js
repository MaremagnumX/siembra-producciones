import './App.css';
import Header from './components/Header.js';
import VideoCover from './components/VideoCover.js';
import Video from './components/Video.js';
import Title from './components/Title.js'

function App() {
	return (
		<div className="App">
			<Header />
			<VideoCover />
			<Title title='Realizaciones recientes' />
			<Video />
			<Title title='Próximamente' />
			<Video />
			<div className='green-title'>
				<Title title='Síguenos' color='green' />
			</div>
		</div>
	);
}

export default App;
