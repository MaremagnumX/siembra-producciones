import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Workshop from './pages/Workshop.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import NotFound from './pages/NotFound.js';
import Title from './components/Title.js'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/about' element={<About />} />
				<Route path='/workshop' element={<Workshop />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<div className='green-title'>
				<Title title='Síguenos' color='green' />
			</div>
			<div className='footer'>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
