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
							path="/xscape-rentals"
						/>
						<CardItem
							src="images/Pizzaville-website.png"
							text="Pizzaville Redesigned Website"
							label="UX/UI Case Study"
							path="/pizzaville-website"
						/>
					</ul>
					<ul className='cards__items'>	
						<CardItem
							src="images/Alpha-website.png"
							text="Alpha Sportwear Website"
							label="UX/UI"
							path="/alpha-website"
						/>
						<CardItem
							src="images/Epicon.png"
							text="Epicon Interactive Concert Landing Page"
							label="UX/UI"
							path="/epicon-landing-page"
						/>
					</ul>
					<h2>Graphic Design</h2>
					<ul className='cards__items'>
						<CardItem
							src="images/Alpha-guidelines.png"
							text="Alpha Sportwear Brand Guidelines"
							label="Graphic Design"
							path="/alpha-guidelines"
						/>
						<CardItem
							src="images/Urgo-social.png"
							text="Urgo Medical Social Posts"
							label="Graphic Design"
							path="/urgo-social-posts"
						/>
						<CardItem
							src="images/UrgoStart.png"
							text="UrgoStart Medical Catalog"
							label="Graphic Design"
							path="/urgostart"
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
							src="images/flower-animation.png"
							text="Infinite Flower Animation"
							label="Motion Design"
							path="/kinetic-typography"
						/>
						<CardItem
							src="images/penguin.png"
							text="Penguin Studio Logo Motion"
							label="Motion Design"
							path="/penguin-logo"
						/>
					</ul>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;