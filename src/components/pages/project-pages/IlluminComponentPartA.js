import React from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';

function IlluminComponentPartA() {
    return (
		<div className="white__container detail__page" >

				<div>
				    <h1>illumin Component Library</h1>
                    <h2>Part A. General</h2>
				    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Color.png" targetId="color" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Typo.png" targetId="typo" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Button.png" targetId="button" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Elevation.png" targetId="elevation" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Focus ring.png" targetId="focus-ring" />
                    </div >
                    <div className='detail__image'>
                        <img src='images/project images/DS/DS-PartA_A1.png' id='color'></img>
                        <img src='images/project images/DS/DS-PartA_A2.png' id='typo'></img>
                        <img src='images/project images/DS/DS-PartA_A3.png' id='button'></img>
                        <img src='images/project images/DS/DS-PartA_A4.png' id='elevation'></img>
                        <img src='images/project images/DS/DS-PartA_A5.png' id='focus-ring'></img>
                    </div>
                    <h2>You may want to view</h2>
                    <a href="/illumin-component-library-part-B"><h3>Part B. Data Input</h3></a>
                    <a href="/illumin-component-library-part-C"><h3>Part C. Data Display</h3></a>
                    <a href="/illumin-component-library-part-D"><h3>Part D. Feedback</h3></a>
                    <a href="/illumin-component-library"><h3>Or back to Project Overview</h3></a>
                    <ScrollToTopButton />
                </div>

		</div>
	)
}

export default IlluminComponentPartA;