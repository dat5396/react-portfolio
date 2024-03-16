import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';
import Sidebar from '../../Sidebar';

function IlluminComponentPartB() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Select' },
    { id: 'section2', title: '2. Input' },
    { id: 'section3', title: '3. Form' },
    { id: 'section4', title: '4. Checkbox' },
    { id: 'section5', title: '5. Radio' },
    { id: 'section6', title: '6. Search bar' },
    { id: 'section7', title: '7. Date picker' },
    { id: 'section8', title: '8. Toggle' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add a buffer for better UX
      let foundSection = null;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            foundSection = section.id;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll initially to set the active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };
	return (
		<div className="white__container detail__page" >

				<div>
                    <h2> Part B. Data Input </h2>
				    {/* <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Select.png" targetId="select" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Input.png" targetId="input" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Form.png" targetId="form" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Checkbox.png" targetId="checkbox" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Radio.png" targetId="radio" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Search-bar.png" targetId="search-bar" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Date-picker.png" targetId="date-picker" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartB_Toggle.png" targetId="toggle" />
                    </div> */}
                    <div className='detail__image'>
                        <div id='section1'><img src='images/project images/DS/DS-PartB_B1.png' id='select'></img></div>
                        <div id='section2'><img src='images/project images/DS/DS-PartB_B2.png' id='input'></img></div>
                        <div id='section3'><img src='images/project images/DS/DS-PartB_B3.png' id='form'></img></div>    
                        <div id='section4'><img src='images/project images/DS/DS-PartB_B4.png' id='checkbox'></img></div>
                        <div id='section5'><img src='images/project images/DS/DS-PartB_B5.png' id='radio'></img></div>
                        <div id='section6'><img src='images/project images/DS/DS-PartB_B6.png' id='search-bar'></img></div>    
                        <div id='section7'><img src='images/project images/DS/DS-PartB_B7.png' id='date-picker'></img></div>
                        <div id='section8'><img src='images/project images/DS/DS-PartB_B8.png' id='toggle'></img></div>
                            
                    </div>
                    <div>
                        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
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