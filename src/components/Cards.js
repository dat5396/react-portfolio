/* eslint-disable react/no-unknown-property */

import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import { Fade } from "react-awesome-reveal";
import { Button } from './Button';

function Cards() {
	return (
	<div>
		{/* <video playsInline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/about.mp4"/> */}
		<div>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<Fade bottom>
						<h2>Projects</h2>

						<ul className='cards__items'>
								<div className='two__in__one'>
								<CardItem 
									src="images/IM.jpg"
									text="illumin Inventory Marketplace"
									label="Professional Project"
									path="/inventory-marketplace"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem
									src="images/FI_cover.jpg"
									text="Facebook & Instagram Integration"
									label="Professional Project"
									path="/facebook-instagram-integration"
								/>
								</div>
						</ul>

						<ul className='cards__items'>
								{/* <div className='two__in__one'>
								<CardItem 
									src="images/POI.jpeg"
									text="Point of Interest Targeting"
									label="Professional Project"
									path="/geo-poi-targeting"
								/>
								</div> */}
								<div className='two__in__one'>
								<CardItem 
									src="images/FPA.jpeg"
									text="First-Party Audience Onboarding"
									label="Professional Project"
									path="/first-party-audience-onboarding"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem 
									src="images/FM.jpeg"
									text="Adsquare Footfall Measurement"
									label="Professional Project"
									path="/footfall-measurement"
								/>
								</div>
					
								
								
						</ul>

						<ul className='cards__items'>
						<div className='two__in__one'>
								<CardItem 
									src="images/SC.jpeg"
									text="Support Center Responsive Design"
									label="Professional Project"
									path="/support-center"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem 
									src="images/illumin-component-library.jpeg"
									text="illumin Component Library"
									label="Professional Project"
									path="/illumin-component-library"
								/>
								</div>

								{/* <div className='two__in__one'>
								<CardItem 
									src="images/IM.jpg"
									text="(Comming soon) illumin Inventory Marketplace"
									label="Professional Project"
									path="/inventory-marketplace"
								/>
								</div> */}
						</ul>
						
						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem 
									src="images/X-scape cover.jpeg"
									text="Jet Ski & Sport Boat Rental App"
									label="Personal Project"
									path="/xscape-rentals"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="images/Pizzaville-website.jpeg"
									text="Pizzaville Responsive Website Design"
									label="Personal Project"
									path="/pizzaville-website"
								/>
								</div>
						</ul>

						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem
									src="images/Pyra cover.png"
									text="Pyra Crypto Exchange App"
									label="Personal Project"
									path="/pyra-crypto-exchange"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="images/cropty-cover.jpeg"
									text="Cryptocurrency Exchange Dashboard"
									label="Personal Project"
									path="/cropty-cryptocurrency-exchange-dashboard"
								/>
								</div>		
						</ul>
						
						<div className="project-contact">
							<div className="project-value">
								<h3>Create value.</h3>
								<h3>Improve experience.</h3>
								<h3>Grow business.</h3>
							</div>
							<Button to='/about' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
							Contact me
							</Button>
						</div>
					</Fade>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;