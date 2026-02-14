/* eslint-disable react/no-unknown-property */

import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import { Fade } from "react-awesome-reveal";
import { Button } from './Button';

function PlaygroundCards() {
	return (
	<div>
		{/* <video playsInline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/about.mp4"/> */}
		<div>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<Fade bottom>
						<h2>Playground</h2>
						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem 
									src="/images/X-scape cover.jpeg"
									text="Jet Ski & Sport Boat Rental App"
									label="Personal Project"
									path="/xscape-rentals"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="/images/Pizzaville-website.jpeg"
									text="Pizzaville Responsive Website Design"
									label="Personal Project"
									path="/pizzaville-website"
								/>
								</div>
						</ul>

						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem
									src="/images/Pyra cover.png"
									text="Pyra Crypto Exchange App"
									label="Personal Project"
									path="/pyra-crypto-exchange"
								/>
								</div>

								<div className='two__in__one'>
								<CardItem
									src="/images/cropty-cover.jpeg"
									text="Cryptocurrency Exchange Dashboard"
									label="Personal Project"
									path="/cropty-cryptocurrency-exchange-dashboard"
								/>
								</div>		
						</ul>
						
						{/* <div className="project-contact">
							<div className="project-value">
								<h3>Create value.</h3>
								<h3>Improve experience.</h3>
								<h3>Grow business.</h3>
							</div>
							<Button to='/about' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
							Contact me
							</Button>
						</div> */}
					</Fade>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default PlaygroundCards;