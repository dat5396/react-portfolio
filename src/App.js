import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './App.css';
import React  from 'react';
import Analytics from './components/Analytics';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Playground from './components/pages/Playground';
import IlluminComponentLibrary from './components/pages/project-pages/IlluminComponentLibrary';
import IlluminComponentPartA from './components/pages/project-pages/IlluminComponentPartA';
import IlluminComponentPartB from './components/pages/project-pages/IlluminComponentPartB';
import IlluminComponentPartC from './components/pages/project-pages/IlluminComponentPartC';
import IlluminComponentPartD from './components/pages/project-pages/IlluminComponentPartD';
import Password from './components/pages/project-pages/Password';
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

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('auth') === 'true';

  return isAuthenticated ? children : <Navigate to="/" replace />;
}


function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';
	return (
    <>
      {!hideNavbar && <Navbar />}
				<Routes>
					<Route path='/' element={<Password />} />
					<Route path='/1368' element={ <ProtectedRoute> <Home /> </ProtectedRoute>} />
					<Route path='/1368/about' element={ <ProtectedRoute> <About /> </ProtectedRoute>} />
					<Route path='/1368/projects' element={ <ProtectedRoute> <Projects /> </ProtectedRoute>} />
						<Route path='/1368/llmncmpnntlbrr' element={<IlluminComponentLibrary />} />
						<Route path='/1368/llmncmpnntlbrrA' element={<IlluminComponentPartA />} />
						<Route path='/1368/llmncmpnntlbrrB' element={<IlluminComponentPartB />} />
						<Route path='/1368/llmncmpnntlbrrC' element={<IlluminComponentPartC />} />
						<Route path='/1368/llmncmpnntlbrrD' element={<IlluminComponentPartD />} />
						<Route path='/1368/fcbknstgrmntgrtn' element={<FI />} />
						<Route path='/1368/frstprtdncnbrdng' element={<FirstPartyAudience />} />
						{/* <Route path='/open-web-to-facebook-instagram-connection' element={<OWToFB />} /> */}
						<Route path='/1368/ftfllmsrmnt' element={<FootfallMeasurement />} />
						{/* <Route path='/geo-poi-targeting' element={<GeoPOITargeting />} /> */}
						<Route path='/1368/nvntrmrktplc' element={<InventoryMarketplace/>} />
						<Route path='/1368/spprtcntr' element={<SupportCenter />} />
					<Route path='/1368/playground' element={ <ProtectedRoute> <Playground /> </ProtectedRoute>} />
						<Route path='/1368/xscprtls' element={<XscapeRentals />} />
						<Route path='/1368/lphwbst' element={<AlphaWebsite />} />
						<Route path='/1368/pzzvllwbst' element={<Pizzaville />} />
						<Route path='/1368/prcrptxchng' element={<Pyra />} />
						<Route path='/1368/crptycrptcrrncxchngdshbrd' element={<Cropty />} />
					<Route path="*" element={<Navigate to="/" replace />} />

				</Routes>
		</>
	);
}

function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
