import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<NavLink to='/portfolio' className='navbar-logo' onClick={closeMobileMenu}>
						<img src='/images/logo.png' alt='logo' />
					</NavLink>
					<div>
						<ul className='desktop-menu'>
							<li className='nav-item'>
								<NavLink to='/portfolio' className='nav-links'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/portfolio/projects' className='nav-links'>
									Projects
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/portfolio/playground' className='nav-links'>
									Playground
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/portfolio/about' className='nav-links'>
									About
								</NavLink>
							</li>
							{/* <li className='nav-item'>
								<NavLink to='/contact' className='nav-links'>
									Contact
								</NavLink>
							</li> */}
						</ul>
					</div>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<NavLink to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/portfolio/projects' className='nav-links' onClick={closeMobileMenu}>
								Projects
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/portfolio/playground' className='nav-links' onClick={closeMobileMenu}>
								Playground
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/portfolio/about' className='nav-links' onClick={closeMobileMenu}>
								About
							</NavLink>
						</li>
						{/* <li className='nav-item'>
							<NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
								Contact
							</NavLink>
						</li> */}
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar;