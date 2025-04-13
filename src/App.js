import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React  from 'react';
import Analytics from './components/Analytics';
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
import FirstPartyAudience from './components/pages/project-pages/FirstPartyAudience';
import OWToFB from './components/pages/project-pages/OWToFB';
import FootfallMeasurement from './components/pages/project-pages/FootfallMeasurement';
import GeoPOITargeting from './components/pages/project-pages/GeoPOITargeting';
import InventoryMarketplace from './components/pages/project-pages/InventoryMarketplace';
import SupportCenter from './components/pages/project-pages/SupportCenter';
import XscapeRentals from './components/pages/project-pages/XscapeRentals';
import AlphaWebsite from './components/pages/project-pages/AlphaWebsite';
import Pizzaville from './components/pages/project-pages/Pizzaville'
import Contact from './components/pages/Contact';
import Pyra from './components/pages/project-pages/Pyra';
import Cropty from './components/pages/project-pages/Cropty';


function App() {
	return (
		<div>
			<Router>
			<Analytics />
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
						<Route path='/first-party-audience-onboarding' element={<FirstPartyAudience />} />
						<Route path='/open-web-to-facebook-instagram-connection' element={<OWToFB />} />
						<Route path='/footfall-measurement' element={<FootfallMeasurement />} />
						<Route path='/geo-poi-targeting' element={<GeoPOITargeting />} />
						<Route path='/im' element={<InventoryMarketplace />} />
						<Route path='/support-center' element={<SupportCenter />} />
						<Route path='/xscape-rentals' element={<XscapeRentals />} />
						<Route path='/alpha-website' element={<AlphaWebsite />} />
						<Route path='/pizzaville-website' element={<Pizzaville />} />
						<Route path='/pyra-crypto-exchange' element={<Pyra />} />
						<Route path='/cropty-cryptocurrency-exchange-dashboard' element={<Cropty />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
