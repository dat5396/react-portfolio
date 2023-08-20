import React from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';

function IlluminComponentPartB() {
	return (
		<div className="white__container detail__page" >

				<div>
                    <h1>illumin Component Library</h1>
                    <h2> Part B. Data Input </h2>
				    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS-PartB_Select.png" targetId="select" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Input.png" targetId="input" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Form.png" targetId="form" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Checkbox.png" targetId="checkbox" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Radio.png" targetId="radio" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS-PartB_Search-bar.png" targetId="search-bar" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Date-picker.png" targetId="date-picker" />
                        <ClickableImage imageSrc="images/project images/DS-PartB_Toggle.png" targetId="toggle" />
                    </div>
                    <div className='detail__image'>
                        <img src='images/project images/DS-PartB_B1.png' id='select'></img>
                        <img src='images/project images/DS-PartB_B2.png' id='input'></img>
                        <img src='images/project images/DS-PartB_B3.png' id='form'></img>
                        <img src='images/project images/DS-PartB_B4.png' id='checkbox'></img>
                        <img src='images/project images/DS-PartB_B5.png' id='radio'></img>
                        <img src='images/project images/DS-PartB_B6.png' id='search-bar'></img>
                        <img src='images/project images/DS-PartB_B7.png' id='date-picker'></img>
                        <img src='images/project images/DS-PartB_B8.png' id='toggle'></img>
                    </div>
                    <h2>You may want to view</h2>
                    <a href="/illumin-component-library-part-A"><h3>Part A. General</h3></a>
                    <a href="/illumin-component-library-part-C"><h3>Part C. Data Display</h3></a>
                    <a href="/illumin-component-library-part-D"><h3>Part D. Feedback</h3></a>
                    <a href="/illumin-component-library"><h3>Or back to Project Overview</h3></a>
                    <ScrollToTopButton />
                </div>

		</div>
	)
}

export default IlluminComponentPartB;