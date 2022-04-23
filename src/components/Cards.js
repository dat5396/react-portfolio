import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
	return (
	<div>
		<video playsinline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/projectpage.mp4"/>
		<div className='cards'>
			<div className='cards__container'>
				<div className='cards_wrapper'>
					<h2>UX/UI Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/Xcape.png"
							text="Xscape Renting App"
							label="UX/UI"
							path="/xscape-rentals"
						/>
						<CardItem
							src="images/Pizzaville-website.png"
							text="Pizzaville Website"
							label="UX/UI"
							path="/pizzaville-website"
						/>
						<CardItem
							src="images/Alpha-website.png"
							text="Alpha Sportwear Website"
							label="UX/UI"
							path="/alpha-website"
						/>
					</ul>
					<h2>Motion Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/alpha-bottle.png"
							text="Alpha Bottle 3D Ads"
							label="Motion Design"
							path="/alpha-bottle"
						/>
						<CardItem
							src="images/Louis-vuitton.png"
							text="Louis Vuitton Motion Package"
							label="Motion Design"
							path="/louis-vuitton"
						/>
						<CardItem
							src="images/kinetic-typography.png"
							text="Kinetic Typography"
							label="Motion Design"
							path="/kinetic-typography"
						/>
					</ul>
					<h2>Graphic Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/Alpha-guidelines.png"
							text="Alpha Sportwear Brand Guidelines"
							label="Branding"
							path="/alpha-guidelines"
						/>
						<CardItem
							src="images/penguin.png"
							text="Penguin Studio Logo Motion"
							label="Branding"
							path="/penguin-logo"
						/>
						<CardItem
							src="images/UrgoStart.png"
							text="UrgoStart Medical Catalog"
							label="Branding"
							path="/urgostart"
						/>
					</ul>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;