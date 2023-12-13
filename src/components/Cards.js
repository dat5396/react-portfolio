/* eslint-disable react/no-unknown-property */

import React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from './Carditem';
import './Cards.css';
import { Fade } from "react-awesome-reveal";
// import Tilt from 'react-parallax-tilt';

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
									src="images/FI_cover.png"
									text="Facebook & Instagram Integration"
									label="Professional Project"
									path="/facebook-instagram-integration"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem 
									src="images/OWFB_Cover.jpg"
									text="Open Web To Facebook Connection"
									label="Professional Project"
									path="/open-web-to-facebook-instagram-connection"
								/>
								</div>
						</ul>

						<ul className='cards__items'>
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
									src="images/illumin-component-library.png"
									text="illumin Component Library"
									label="Professional Project"
									path="/protected-icl"
								/>
								</div>
						</ul>
						
						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem 
									src="images/Xcape.png"
									text="Xscape Renting Mobile App"
									label="Personal Project"
									path="/xscape-rentals"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="images/Pizzaville-website.png"
									text="Pizzaville Website Redesign"
									label="Personal Project"
									path="/pizzaville-website"
								/>
								</div>
						</ul>

						<ul className='cards__items'>				
								<div className='two__in__one'>
								<CardItem
									src="images/Pyra.png"
									text="Pyra Crypto Exchange App"
									label="Personal Project"
									path="/pyra-crypto-exchange"
								/>
								</div>
							
								<div className='two__in__one'>
								<CardItem
									src="images/Alpha-website.png"
									text="Alpha Sportwear Website"
									label="Personal Project"
									path="/alpha-website"
								/>
								</div>
						</ul>

					</Fade>
					{/* <Fade bottom>
						<h2>Graphic & Motion Design</h2>
						<ul className='cards__items'>
							
								<div className='two__in__one'>
								<CardItem
									src="images/Urgo-social.png"
									text="Urgo Medical Social Posts"
									label="Professional Project"
									path="/urgo-social-posts"
								/>
								</div>
							
								<div className='two__in__one'>
								<CardItem
									src="images/UrgoStart.png"
									text="UrgoStart Medical Catalog"
									label="Professional Project"
									path="/urgostart"
								/>
								</div>
							
						</ul>

						<ul className='cards__items'>
						
								<div className='two__in__one'>
								<CardItem
									src="images/Alpha-guidelines.png"
									text="Alpha Sportwear Brand Guidelines"
									label="Personal Project"
									path="/alpha-guidelines"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="images/alpha-bottle.png"
									text="Alpha Bottle 3D Advertisement"
									label="Personal Project"
									path="/alpha-bottle"
								/>
								</div>
						
						</ul>
						
					</Fade> */}
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;