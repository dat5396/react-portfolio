import React from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';

function IlluminComponentPartC() {
	return (
		<div className="white__container detail__page" >

				<div>
                    <h1>illumin Component Library</h1>
                    <h2> Part C. Data Display </h2>
				    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS-PartC_Accordion.png" targetId="accordion" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Badge.png" targetId="badge" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Chip.png" targetId="chip" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Table.png" targetId="table" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Tab.png" targetId="tab" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS-PartC_Empty.png" targetId="empty" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Error.png" targetId="error" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Chart.png" targetId="chart" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Breadcrumbs.png" targetId="breadcrumbs" />
                        <ClickableImage imageSrc="images/project images/DS-PartC_Card.png" targetId="card" />
                    </div>
                    <div className='detail__image'>
                        <img src='images/project images/DS-PartC_C1.png' id='accordion'></img>
                        <img src='images/project images/DS-PartC_C2.png' id='badge'></img>
                        <img src='images/project images/DS-PartC_C3.png' id='chip'></img>
                        <img src='images/project images/DS-PartC_C4.png' id='table'></img>
                        <img src='images/project images/DS-PartC_C5.png' id='tab'></img>
                        <img src='images/project images/DS-PartC_C6.png' id='empty'></img>
                        <img src='images/project images/DS-PartC_C7.png' id='error'></img>
                        <img src='images/project images/DS-PartC_C8.png' id='chart'></img>
                        <img src='images/project images/DS-PartC_C9.png' id='breadcrumbs'></img>
                        <img src='images/project images/DS-PartC_C10.png' is='card'></img>
                    </div>
                    <h2>You may want to view</h2>
                    <a href="/illumin-component-library-part-A"><h3>Part A. General</h3></a>
                    <a href="/illumin-component-library-part-B"><h3>Part B. Data Input</h3></a>
                    <a href="/illumin-component-library-part-D"><h3>Part D. Feedback</h3></a>
                    <a href="/illumin-component-library"><h3>Or back to Project Overview</h3></a>
                    <ScrollToTopButton />
                </div>

		</div>
	)
}

export default IlluminComponentPartC;