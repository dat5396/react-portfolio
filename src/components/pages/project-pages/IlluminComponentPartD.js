import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './IlluminComponentLibrary.css';
import ClickableImage from './ClickableImage';
import ScrollToTopButton from './ScrollToTopButton.js';
import Sidebar from '../../Sidebar';

function IlluminComponentPartD() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Alert' },
    { id: 'section2', title: '2. Notification' },
    { id: 'section3', title: '3. Progress' },
    { id: 'section4', title: '4. Modal' },
    { id: 'section5', title: '5. Tooltip' },
    { id: 'section5', title: '6. Canvas toast' },
    { id: 'section5', title: '7. Spinner' },
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
                    <h2> Part D. Feedback </h2>
                    {/* <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Alert.png" targetId="alert" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Notification.png" targetId="notification" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Progress.png" targetId="progress" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Modal.png" targetId="modal" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Tooltip.png" targetId="tooltip" />
                    </div>
                    <div className='menu__image'>
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Canvas-toast.png" targetId="tooltip" />
                        <ClickableImage imageSrc="images/project images/DS/DS-PartD_Spinner.png" targetId="tooltip" />
                    </div> */}
				    <div className='detail__image'>
                        <div id='section1'><img src='images/project images/DS/DS-PartD_D1.png' id='alert'></img></div>
                        <div id='section2'><img src='images/project images/DS/DS-PartD_D2.png' id='notification'></img></div>
                        <div id='section3'><img src='images/project images/DS/DS-PartD_D3.png' id='progress'></img></div>
                        <div id='section4'><img src='images/project images/DS/DS-PartD_D4.png' id='modal'></img></div>
                        <div id='section5'><img src='images/project images/DS/DS-PartD_D5.png' id='tooltip'></img></div>
                    </div>
                    <div>
                        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
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