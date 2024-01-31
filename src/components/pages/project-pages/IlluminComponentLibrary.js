import React from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';


function IlluminComponentLibrary() {
	return (
		<div className="project__container white__container menu__page" >

				<div>
					<img src='images/project images/illumin-component-library.png' alt='test'></img>
				</div>

				<div >
					<h2>Project Overview</h2>
					<h3>Objective</h3>
					<p>Building a component library aims to ensure design consistency across projects by offering a standardized collection of UI elements.</p>
					<p>It accelerates design and development processes, fosters collaboration, and maintains a cohesive user experience. With reusable components, it streamlines efficiency, scales design efforts, and upholds brand identity.</p>
					<h3>Duration</h3>
					<p>4 months</p>
					<h3>My role</h3>
					<p>UI Designer</p>
				</div>

				<div >
					<h2 path="/illumin-component-library-part-A"> Part A. General </h2>
					<a href="/illumin-component-library-part-A">
						<img src='images/project images/DS-Menu-PartA.png'></img>
					</a>
				</div>
				
				<div className="menu" >
					<h2> Part B. Data Input </h2>
					<a href="/illumin-component-library-part-B">
						<img src='images/project images/DS-Menu-PartB.png'></img>
					</a>
				</div>

				<div className="menu" >
					<h2> Part C. Data Display </h2>
					<a href="/illumin-component-library-part-C">
						<img src='images/project images/DS-Menu-PartC.png'></img>
					</a>
				</div>

				<div className="menu" >
					<h2> Part D. Feedback </h2>
					<a href="/illumin-component-library-part-D">
						<img src='images/project images/DS-Menu-PartD.png'></img>
					</a>
				</div>
		</div>
	)
}

export default IlluminComponentLibrary;