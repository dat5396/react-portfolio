import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './AppStyle.css';
import React from 'react';
import ScrollToTop from './ScrollToTop';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './AuthContext';
import Screen from './components/Screen';
import FI from './components/pages/project-pages/FI';
import FirstPartyAudience from './components/pages/project-pages/FirstPartyAudience';
import FootfallMeasurement from './components/pages/project-pages/FootfallMeasurement';
import InventoryMarketplace from './components/pages/project-pages/InventoryMarketplace';
import AudienceRecommendation from './components/pages/project-pages/AudienceRecommendation';
import ProductPage from './components/pages/project-pages/ProductPage';
import SupportCenter from './components/pages/project-pages/SupportCenter';
import ComponentLibrary from './components/pages/project-pages/ComponentLibrary';
import FreeMind from './components/pages/project-pages/FreeMind';
import DynamicGradient from './components/pages/project-pages/DynamicGradient';
import FairShare from './components/pages/project-pages/FairShare';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuth();
	console.log('ProtectedRoute — isAuthenticated:', isAuthenticated);
	return isAuthenticated ? children : <Screen />;
}

function AppContent() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/portfolio/about' element={<AboutPage />} />
				<Route path='/fcbknstgrmntgrtn' element={<ProtectedRoute><FI /></ProtectedRoute>} />
				<Route path='/frstprtdncnbrdng' element={<ProtectedRoute><FirstPartyAudience /></ProtectedRoute>} />
				<Route path='/ftfllmsrmnt' element={<ProtectedRoute><FootfallMeasurement /></ProtectedRoute>} />
				<Route path='/nvntrmrktplc' element={<ProtectedRoute><InventoryMarketplace /></ProtectedRoute>} />
				<Route path='/dncrcmmndtn' element={<ProtectedRoute><AudienceRecommendation /></ProtectedRoute>} />
				<Route path='/spprtcntr' element={<ProtectedRoute><SupportCenter /></ProtectedRoute>} />
				<Route path='/dsgnsstm' element={<ProtectedRoute><ComponentLibrary /></ProtectedRoute>} />
				<Route path='/prdctpg' element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
				<Route path='/frmnd' element={<ProtectedRoute><FreeMind /></ProtectedRoute>} />
				<Route path='/dnmcgrdnt' element={<ProtectedRoute><DynamicGradient /></ProtectedRoute>} />
				<Route path='/frshr' element={<ProtectedRoute><FairShare /></ProtectedRoute>} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	);
}

function App() {
	return (
		<Router>
			<AuthProvider>
				<ScrollToTop />
				<Analytics />
				<AppContent />
			</AuthProvider>
		</Router>
	);
}

export default App;