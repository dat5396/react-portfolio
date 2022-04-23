import React from 'react';
import '../../App.css';
import './About.css';
import { Button } from '.././Button';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<div className="about">
			<video playsInline webkit-playsinline autoPlay loop muted className='about__video' src="/videos/about.mp4" />
			<h1>About Me</h1>
			<div>
			</div>
			<div className='skill__container'>
				<h2>What I Believe</h2>
					<p className='bio'>"Hi, I am Dat Tran. I believe everything in this world is designed. Thus, a designer plays a significant role in building a beautiful world. To do that, the responsibility of a designer is to create great products that are not only aesthetic but also able to improve many aspects of people’s lives. Each creation should be an integration of profound knowledge of art and a deep understanding of users. It requires an iterative exploration of human behavior and psychology and applying insightful findings to designs."</p>
				<h2>My Relevant Skills</h2>
				<div className='group__skill'>	
					<div className='skill__details'>
						<img src='/images/uxui-icon.png' alt=''/>
						<h3>UX/UI Design</h3>
						<p>Creating user-centered designs by conducting user researchs, competitive analysis, user flows, personas, wireframes, prototypes, and testing</p>
					</div>
					<div className='skill__details'>
						<img src='/images/visual-icon.png' alt=''/>
						<h3>Visual Communication</h3>
						<p>Expertise in using layouts, colors, typographies, symbols, images to communicate ideas in graphics, animations and videos</p>
					</div>
				</div>	
				<div className='group__skill'>
					<div className='skill__details'>
						<img src='/images/adobe-icon.png' alt=''/>
						<h3>Adobe Creative Cloud</h3>
						<p>Proficiency in Adobe Creative Suite - Illustrator, Photoshop, InDesign, XD, After Effects, and Premiere</p>
					</div>
					<div className='skill__details'>
						<img src='/images/frontend-icon.png' alt=''/>
						<h3>Front-End Development</h3>
						<p>Brought the designs to life with different coding methods such as hand coding, Bootstrap, CSS precompiler, React</p>
					</div>
				</div>	
			</div>	
			<div className="about-cta">
				<div className="about-btns">
					<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
					EXPLORE MY PROJECTS
					</Button>
				</div>
				<div className="about-btns">
					{/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
					<Link to="/files/Dat Tran - Resume.pdf" target="_blank" download>Download My Resume</Link>
					</Button> */}
					<Link to="/files/Dat Tran - Resume.pdf" target="_blank" download>Download My Resume</Link>
				</div>
			</div>
		</div>
	)
}