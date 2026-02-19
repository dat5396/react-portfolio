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
					<Route path='/1368' element={<Home />} />
					<Route path='/1368/about' element={<About/>}/>
					<Route path='/1368/projects' element={<Projects />} />
					{/* <Route path='/1368' element={ <ProtectedRoute> <Home /> </ProtectedRoute>} />
					<Route path='/1368/about' element={ <ProtectedRoute> <About /> </ProtectedRoute>} />
					<Route path='/1368/projects' element={ <ProtectedRoute> <Projects /> </ProtectedRoute>} /> */}
						<Route path='/llmncmpnntlbrr' element={<IlluminComponentLibrary />} />
						<Route path='/llmncmpnntlbrrA' element={<IlluminComponentPartA />} />
						<Route path='/llmncmpnntlbrrB' element={<IlluminComponentPartB />} />
						<Route path='/llmncmpnntlbrrC' element={<IlluminComponentPartC />} />
						<Route path='/llmncmpnntlbrrD' element={<IlluminComponentPartD />} />
						<Route path='/fcbknstgrmntgrtn' element={<FI />} />
						<Route path='/frstprtdncnbrdng' element={<FirstPartyAudience />} />
						<Route path='/ftfllmsrmnt' element={<FootfallMeasurement />} />
						<Route path='/nvntrmrktplc' element={<InventoryMarketplace/>} />
						<Route path='/spprtcntr' element={<SupportCenter />} />
					<Route path='/1368/playground' element={<Playground />} />
						<Route path='/xscprtls' element={<XscapeRentals />} />
						<Route path='/pzzvllwbst' element={<Pizzaville />} />
						<Route path='/prcrptxchng' element={<Pyra />} />
						<Route path='/crptycrptcrrncxchngdshbrd' element={<Cropty />} />
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
