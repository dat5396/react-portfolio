import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import XscapeRentals from './components/pages/project-pages/XscapeRentals';
import AlphaWebsite from './components/pages/project-pages/AlphaWebsite';
import Pizzaville from './components/pages/project-pages/Pizzaville'
import AlphaBottle from './components/pages/project-pages/AlphaBottle'
import LouisVuitton from './components/pages/project-pages/LouisVuitton'
import KineticTypography from './components/pages/project-pages/KineticTypography'
import AlphaGuidelines from './components/pages/project-pages/AlphaGuidelines'
import PenguinLogo from './components/pages/project-pages/PenguinLogo'
import UrgoStart from './components/pages/project-pages/UrgoStart'
import Contact from './components/pages/Contact';
import Epicon from './components/pages/project-pages/Epicon';
import Pyra from './components/pages/project-pages/Pyra';
import UrgoSocial from './components/pages/project-pages/UrgoSocial';

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
						<Route path='/xscape-rentals' element={<XscapeRentals />} />
						<Route path='/alpha-website' element={<AlphaWebsite />} />
						<Route path='/pizzaville-website' element={<Pizzaville />} />
						<Route path='/pyra-crypto-exchange' element={<Pyra />} />
						<Route path='/epicon-landing-page' element={<Epicon />} />
						<Route path='/alpha-bottle' element={<AlphaBottle />} />
						<Route path='/louis-vuitton' element={<LouisVuitton />} />
						<Route path='/kinetic-typography' element={<KineticTypography />} />
						<Route path='/alpha-guidelines' element={<AlphaGuidelines />} />
						<Route path='/penguin-logo' element={<PenguinLogo />} />
						<Route path='/urgostart' element={<UrgoStart />} />
						<Route path='/urgo-social-posts' element={<UrgoSocial />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
