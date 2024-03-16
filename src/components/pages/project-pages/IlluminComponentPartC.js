import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';
import Sidebar from '../../Sidebar';

function IlluminComponentPartC() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Accordion' },
    { id: 'section2', title: '2. Badge' },
    { id: 'section3', title: '3. Chip' },
    { id: 'section4', title: '4. Table' },
    { id: 'section5', title: '5. Tab' },
    { id: 'section6', title: '6. Empty page' },
    { id: 'section7', title: '7. Error page' },
    { id: 'section8', title: '8. Chart' },
    { id: 'section9', title: '9. Breadcrumbs' },
    { id: 'section10', title: '10. Card' },
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
                    <h2> Part C. Data Display </h2>
				    {/* <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Accordion.png" targetId="accordion" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Badge.png" targetId="badge" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Chip.png" targetId="chip" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Table.png" targetId="table" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Tab.png" targetId="tab" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Empty.png" targetId="empty" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Error.png" targetId="error" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Chart.png" targetId="chart" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Breadcrumbs.png" targetId="breadcrumbs" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartC_Card.png" targetId="card" />
                    </div> */}
                    <div className='detail__image'>
                        <div id='section1'><img src='images/project images/DS/DS-PartC_C1.png' id='accordion'></img></div>
                        <div id='section2'><img src='images/project images/DS/DS-PartC_C2.png' id='badge'></img></div>
                        <div id='section3'><img src='images/project images/DS/DS-PartC_C3.png' id='chip'></img></div>
                        <div id='section4'><img src='images/project images/DS/DS-PartC_C4.png' id='table'></img></div>
                        <div id='section5'><img src='images/project images/DS/DS-PartC_C5.png' id='tab'></img></div>
                        <div id='section6'><img src='images/project images/DS/DS-PartC_C6.png' id='empty'></img></div>
                        <div id='section7'><img src='images/project images/DS/DS-PartC_C7.png' id='error'></img></div>
                        <div id='section8'><img src='images/project images/DS/DS-PartC_C8.png' id='chart'></img></div>
                        <div id='section9'><img src='images/project images/DS/DS-PartC_C9.png' id='breadcrumbs'></img></div>
                        <div id='section10'><img src='images/project images/DS/DS-PartC_C10.png' is='card'></img></div>
                    </div>
                    <div>
                        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
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