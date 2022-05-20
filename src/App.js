import './App.css';
import Header from './components/Header.js';
import VideoCover from './components/VideoCover.js';
import Video from './components/Video.js';

function App() {
	return (
		<div className="App">
			<Header />
			<VideoCover />
			<Video/>
			<Video/>
		</div>
	);
}

export default App;
