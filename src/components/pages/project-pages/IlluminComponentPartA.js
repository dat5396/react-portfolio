import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';
import Sidebar from '../../Sidebar';

function IlluminComponentPartA() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Color' },
    { id: 'section2', title: '2. Typography' },
    { id: 'section3', title: '3. Button' },
    { id: 'section4', title: '4. Elevation' },
    { id: 'section5', title: '5. Focus ring' },
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
				    {/* <h1>illumin Component Library</h1> */}
                    <h2>Part A. General</h2>
				    {/* <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Color.png" targetId="color" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Typo.png" targetId="typo" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Button.png" targetId="button" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Elevation.png" targetId="elevation" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartA_Focus ring.png" targetId="focus-ring" />
                    </div > */}
                    <div className='detail__image'>
                        <div id='section1'>
                            <img src='images/project images/DS/DS-PartA_A1.png' id='color'></img>
                        </div>
                        <div id='section2'>
                            <img src='images/project images/DS/DS-PartA_A2.png' id='typo'></img>
                        </div>
                        <div id='section3'>
                            <img src='images/project images/DS/DS-PartA_A3.png' id='button'></img>
                        </div>
                        <div id='section4'>
                            <img src='images/project images/DS/DS-PartA_A4.png' id='elevation'></img>
                        </div>
                        <div id='section5'>
                            <img src='images/project images/DS/DS-PartA_A5.png' id='focus-ring'></img>
                        </div>
                    </div>
                    <div>
                        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
                    </div>
                    <h2>You may want to view</h2>
                    <a href="/illumin-component-library-part-B"><h3>Part B. Data Input</h3></a>
                    <a href="/illumin-component-library-part-C"><h3>Part C. Data Display</h3></a>
                    <a href="/illumin-component-library-part-D"><h3>Part D. Feedback</h3></a>
                    <a href="/illumin-component-library"><h3>Or back to Project Overview</h3></a>
                    {/* <ScrollToTopButton /> */}
                </div>

		</div>
	)
}

export default IlluminComponentPartA;