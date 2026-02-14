/* eslint-disable react/no-unknown-property */

import React from 'react';
import '../../App.css';
import './About.css';
import { Button } from '.././Button';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

export default function About() {
	return (
		<div className="about">
			{/* <video playsInline webkit-playsinline autoPlay loop muted className='about__video' src="/videos/about.mp4" /> */}
			{/* <h1>About Me</h1> */}
				<div className='skill__container'>
					<Fade bottom>
						<h2>About me</h2>
						<div className='panel'>
							<div className='bio'>
								<h3>Dat Tran</h3>
								<p>I am a results-driven Product Designer with experience and a deep passion for designing user-centered digital products. Proven expertise in interaction design, visual design, and design research. Adept at distilling intricate user needs into intuitive and visually appealing interfaces that foster user engagement and drive business growth.</p>
							</div>
							<div className='box-group'>
								<div className='box'>
									<img src='/images/mail.svg' alt=''/>
									<p>dattientran6868@gmail.com</p>
								</div>
								<div className='box'>
									<img src='/images/linkedin.svg' alt=''/>
									<a href="https://www.linkedin.com/in/dattran6868/" target="_blank" rel="noreferrer"><p>Linkedin</p></a>
								</div>
								<div className='box'>
									<img src='/images/behance.svg' alt=''/>
									<a href="https://www.behance.net/dattientran" target="_blank" rel="noreferrer"><p>Behance</p></a>
								</div>
							</div>
						</div>
					</Fade>
					<Fade bottom>
						<h2>My skills</h2>
						<div className='group__skill'>	
							<div className='skill__details'>
								<h3>User Experience & Interface Design</h3>
								<p>Crafting user-centric designs with expertise in UX analysis, information architecture, user flows, design systems, wireframing and prototyping</p>
								<img src='/images/ux-ui-design.png' alt=''/>

							</div>
							<div className='skill__details'>
								{/* <img src='/images/visual-icon.png' alt=''/> */}
								<h3>Strategic Problem Solving</h3>
								<p>Strategic thinking about the product’s direction involves balancing long-term vision with immediate needs to implement appropriate solutions.</p>
								<img src='/images/prototyping.png' alt=''/>
							</div>
							<div className='skill__details'>
								{/* <img src='/images/frontend-icon.png' alt=''/> */}
								<h3>Collaboration & Teamwork</h3>
								<p>Effective collaboration and communication with cross-functional teams to align decisions with user needs and business objectives.</p>
								<img src='/images/media-design.png' alt=''/>
							</div>
						</div>	
					</Fade>
				</div>	
			<Fade bottom>
				<div className="about-cta">
					<div className="about-btns">
						<Button to='/1368/projects' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
						Explore my projects
						</Button>
					</div>
					{/* <div className="about-btns">
						<Link to="/files/2023 - Dat Tran - Product Designer - Resume.pdf" target="_blank" download>Download My Resume</Link>
					</div> */}
				</div>
			</Fade>
		</div>
	)
}