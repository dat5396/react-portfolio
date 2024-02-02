import React from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';

function IlluminComponentPartD() {
	return (
		<div className="white__container detail__page" >

				<div>
                    <h1>illumin Component Library</h1>
                    <h2> Part D. Feedback </h2>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Alert.png" targetId="alert" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Notification.png" targetId="notification" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Progress.png" targetId="progress" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Modal.png" targetId="modal" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Tooltip.png" targetId="tooltip" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Canvas-toast.png" targetId="tooltip" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Spinner.png" targetId="tooltip" />
                    </div>
				    <div className='detail__image'>
                        <img src='images/project images/DS/DS-PartD_D1.png' id='alert'></img>
                        <img src='images/project images/DS/DS-PartD_D2.png' id='notification'></img>
                        <img src='images/project images/DS/DS-PartD_D3.png' id='progress'></img>
                        <img src='images/project images/DS/DS-PartD_D4.png' id='modal'></img>
                        <img src='images/project images/DS/DS-PartD_D5.png' id='tooltip'></img>
                    </div>
                    <h2>You may want to view</h2>
                    <a href="/illumin-component-library-part-A"><h3>Part A. General</h3></a>
                    <a href="/illumin-component-library-part-B"><h3>Part B. Data Input</h3></a>
                    <a href="/illumin-component-library-part-C"><h3>Part C. Data Display</h3></a>
                    <a href="/illumin-component-library"><h3>Or back to Project Overview</h3></a>
                    <ScrollToTopButton />
                </div>

		</div>
	)
}

export default IlluminComponentPartD;