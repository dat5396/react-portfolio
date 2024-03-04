import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React  from 'react';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import IlluminComponentLibrary from './components/pages/project-pages/IlluminComponentLibrary';
import IlluminComponentPartA from './components/pages/project-pages/IlluminComponentPartA';
import IlluminComponentPartB from './components/pages/project-pages/IlluminComponentPartB';
import IlluminComponentPartC from './components/pages/project-pages/IlluminComponentPartC';
import IlluminComponentPartD from './components/pages/project-pages/IlluminComponentPartD';
import PasswordDS from './components/pages/project-pages/PasswordDS';
import FI from './components/pages/project-pages/FI';
import PasswordFI from './components/pages/project-pages/PasswordFI';
import FirstPartyAudience from './components/pages/project-pages/FirstPartyAudience';
import PasswordFPA from './components/pages/project-pages/PasswordFPA';
import OWToFB from './components/pages/project-pages/OWToFB';
import PasswordPOI from './components/pages/project-pages/PasswordPOI';
import GeoPOITargeting from './components/pages/project-pages/GeoPOITargeting';
import XscapeRentals from './components/pages/project-pages/XscapeRentals';
import AlphaWebsite from './components/pages/project-pages/AlphaWebsite';
import Pizzaville from './components/pages/project-pages/Pizzaville'
import AlphaBottle from './components/pages/project-pages/AlphaBottle'
import AlphaGuidelines from './components/pages/project-pages/AlphaGuidelines'
import UrgoStart from './components/pages/project-pages/UrgoStart'
import Contact from './components/pages/Contact';
import Pyra from './components/pages/project-pages/Pyra';
import UrgoSocial from './components/pages/project-pages/UrgoSocial';
import Cropty from './components/pages/project-pages/Cropty';


function App() {
	return (
		<div>
			<Router>
			<ScrollToTop/>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
						<Route path='/illumin-component-library' element={<IlluminComponentLibrary />} />
						<Route path='/illumin-component-library-part-A' element={<IlluminComponentPartA />} />
						<Route path='/illumin-component-library-part-B' element={<IlluminComponentPartB />} />
						<Route path='/illumin-component-library-part-C' element={<IlluminComponentPartC />} />
						<Route path='/illumin-component-library-part-D' element={<IlluminComponentPartD />} />
						<Route path='/protected-icl' element={<PasswordDS />} />
						<Route path='/facebook-instagram-integration' element={<FI />} />
						<Route path='/protected-fii' element={<PasswordFI />} />
						<Route path='/first-party-audience-onboarding' element={<FirstPartyAudience />} />
						<Route path='/protected-fpao' element={<PasswordFPA />} />
						<Route path='/open-web-to-facebook-instagram-connection' element={<OWToFB />} />
						<Route path='/protected-POI' element={<PasswordPOI />} />
						<Route path='/geo-poi-targeting' element={<GeoPOITargeting />} />
						<Route path='/xscape-rentals' element={<XscapeRentals />} />
						<Route path='/alpha-website' element={<AlphaWebsite />} />
						<Route path='/pizzaville-website' element={<Pizzaville />} />
						<Route path='/pyra-crypto-exchange' element={<Pyra />} />
						<Route path='/alpha-bottle' element={<AlphaBottle />} />
						<Route path='/alpha-guidelines' element={<AlphaGuidelines />} />
						<Route path='/urgostart' element={<UrgoStart />} />
						<Route path='/urgo-social-posts' element={<UrgoSocial />} />
						<Route path='/cropty-cryptocurrency-exchange-dashboard' element={<Cropty />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
