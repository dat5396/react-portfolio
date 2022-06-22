import React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from './Carditem';
import './Cards.css';
import { Fade } from "react-awesome-reveal";
// import Tilt from 'react-parallax-tilt';

function Cards() {
	return (
	<div>
		<video playsInline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/projectpage.mp4"/>
		<div>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<Fade bottom>
						<h2>UX/UI Design</h2>
						<ul className='cards__items'>
							
								<div className='two__in__one'>
								<CardItem 
									src="images/Xcape.png"
									text="Xscape Renting App"
									label="UX/UI Case Study"
									path="/xscape-rentals"
								/>
								</div>
							
								<div className='two__in__one'>
								<CardItem
									src="images/Pizzaville-website.png"
									text="Pizzaville Website Redesign"
									label="UX/UI Case Study"
									path="/pizzaville-website"
								/>
								</div>

						</ul>
						<ul className='cards__items'>	
							
								<div className='two__in__one'>
								<CardItem
									src="images/Pyra.png"
									text="Pyra Crypto Exchange App"
									label="UX/UI"
									path="/pyra-crypto-exchange"
								/>
								</div>
							
								<div className='two__in__one'>
								<CardItem
									src="images/Alpha-website.png"
									text="Alpha Sportwear Website"
									label="UX/UI"
									path="/alpha-website"
								/>
								</div>

						</ul>

						<ul className='cards__items'>	
							
								<div className='two__in__one'>
								<CardItem
									src="images/3D Icon web.png"
									text="3D Icons For UI"
									label="UI"
									path="/icons"
								/>
								</div>
							
								<div className='two__in__one hide'>
								<CardItem
									src="images/Alpha-website.png"
									text="Alpha Sportwear Website"
									label="UX/UI"
									path="/alpha-website"
								/>
								</div>
								
						</ul>
					</Fade>
					<Fade bottom>
						<h2>Graphic Design</h2>
						<ul className='cards__items'>
							
								<div className='three__in__one'>
								<CardItem
									src="images/Alpha-guidelines.png"
									text="Alpha Sportwear Brand Guidelines"
									label="Brand Guidelines"
									path="/alpha-guidelines"
								/>
								</div>
							
								<div className='three__in__one'>
								<CardItem
									src="images/Urgo-social.png"
									text="Urgo Medical Social Posts"
									label="Social Graphic"
									path="/urgo-social-posts"
								/>
								</div>
							
								<div className='three__in__one'>
								<CardItem
									src="images/UrgoStart.png"
									text="UrgoStart Medical Catalog"
									label="Print"
									path="/urgostart"
								/>
								</div>
							
						</ul>
					</Fade>
					<Fade bottom>
						<h2>Motion Design</h2>
						<ul className='cards__items'>
						
								<div className='three__in__one'>
								<CardItem
									src="images/alpha-bottle.png"
									text="Alpha Bottle 3D Advertisement"
									label="Advertisement"
									path="/alpha-bottle"
								/>
								</div>
						
								<div className='three__in__one'>
								<CardItem
									src="images/Louis-vuitton.png"
									text="Louis Vuitton Motion Package"
									label="Motion Package"
									path="/louis-vuitton"
								/>
								</div>
						
								<div className='three__in__one'>
								<CardItem
									src="images/flower-animation.png"
									text="Infinite Flower Animation"
									label="Animation"
									path="/kinetic-typography"
								/>
								</div>
							

							{/* <CardItem
								src="images/penguin.png"
								text="Penguin Studio Logo Motion"
								label="Motion Design"
								path="/penguin-logo"
							/> */}
						</ul>
					</Fade>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;