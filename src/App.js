import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
						<Route path='/projects/xscape-rentals' element={<XscapeRentals />} />
						<Route path='/projects/alpha-website' element={<AlphaWebsite />} />
						<Route path='/projects/pizzaville-website' element={<Pizzaville />} />
						<Route path='/projects/epicon-landing-page' element={<Epicon />} />
						<Route path='/projects/alpha-bottle' element={<AlphaBottle />} />
						<Route path='/projects/louis-vuitton' element={<LouisVuitton />} />
						<Route path='/projects/kinetic-typography' element={<KineticTypography />} />
						<Route path='/projects/alpha-guidelines' element={<AlphaGuidelines />} />
						<Route path='/projects/penguin-logo' element={<PenguinLogo />} />
						<Route path='/projects/urgostart' element={<UrgoStart />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
