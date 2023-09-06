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
			<video playsInline webkit-playsinline autoPlay loop muted className='about__video' src="/videos/about.mp4" />
			<h1>About Me</h1>
				<div className='skill__container'>
					<Fade bottom>
						<h2></h2>
						<p className='bio'>Results-driven Product Designer with experience and a deep passion for designing user-centered digital products. Proven expertise in interaction design, visual design, and design research. Adept at distilling intricate user needs into intuitive and visually appealing interfaces that foster user engagement and drive business growth.</p>
					</Fade>
					<Fade bottom>
						<h2>My Relevant Skills</h2>
						<div className='group__skill'>	
							<div className='skill__details'>
								<img src='/images/uxui-icon.png' alt=''/>
								<h3>UX/UI Design</h3>
								<p>Creating user-centered designs by conducting user researchs, competitive analysis, user flows, personas, design systems, wireframes, prototypes, and testing</p>
							</div>
							<div className='skill__details'>
								<img src='/images/visual-icon.png' alt=''/>
								<h3>Graphic And Motion Design</h3>
								<p>Expertise in using layouts, colors, typographies, symbols, images to communicate ideas in graphics, animations and videos</p>
							</div>
							<div className='skill__details'>
								<img src='/images/frontend-icon.png' alt=''/>
								<h3>Front-End Development</h3>
								<p>Brought the designs to life with different coding methods such as hand coding, Bootstrap, CSS preprocessor, React JS</p>
							</div>
						</div>	
					</Fade>
				</div>	
			<Fade bottom>
				<div className="about-cta">
					<div className="about-btns">
						<Button to='/projects' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
						Explore My Projects
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