import React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
	return (
	<div>
		<video playsInline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/projectpage.mp4"/>
		<div>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<h2>UX/UI Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/Xcape.png"
							text="Xscape Renting App"
							label="UX/UI Case Study"
							path="/projects/xscape-rentals"
						/>
						<CardItem
							src="images/Pizzaville-website.png"
							text="Pizzaville Redesigned Website"
							label="UX/UI Case Study"
							path="/projects/pizzaville-website"
						/>
					</ul>
					<ul className='cards__items'>	
						<CardItem
							src="images/Alpha-website.png"
							text="Alpha Sportwear Website"
							label="UX/UI"
							path="/projects/alpha-website"
						/>
						<CardItem
							src="images/Epicon.png"
							text="Epicon Interactive Concert Landing Page"
							label="UX/UI"
							path="/projects/epicon-landing-page"
						/>
					</ul>
					<h2>Motion Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/alpha-bottle.png"
							text="Alpha Bottle 3D Ads"
							label="Motion Design"
							path="/projects/alpha-bottle"
						/>
						<CardItem
							src="images/Louis-vuitton.png"
							text="Louis Vuitton Motion Package"
							label="Motion Design"
							path="/projects/louis-vuitton"
						/>
						<CardItem
							src="images/flower-animation.png"
							text="Infinite Flower Animation"
							label="Motion Design"
							path="/projects/kinetic-typography"
						/>
					</ul>
					<h2>Graphic Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/Alpha-guidelines.png"
							text="Alpha Sportwear Brand Guidelines"
							label="Branding"
							path="/projects/alpha-guidelines"
						/>
						<CardItem
							src="images/penguin.png"
							text="Penguin Studio Logo Motion"
							label="Branding"
							path="/projects/penguin-logo"
						/>
						<CardItem
							src="images/UrgoStart.png"
							text="UrgoStart Medical Catalog"
							label="Branding"
							path="/projects/urgostart"
						/>
					</ul>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;