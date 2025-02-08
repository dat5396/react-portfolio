import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FootfallMeasurement.css';
import Sidebar from '../../Sidebar';

function FootfallMeasurement() {

    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project Overview' },
        { id: 'section2', title: '2. Discovery & Analysis' },
        { id: 'section3', title: '3. Ideation & Concept Development' },
        { id: 'section4', title: '4. User Testing, Gathering feedbacks & Iterations' },
        { id: 'section5', title: '5. Final Design' },
        { id: 'section6', title: '6. Outcome & Impact' },
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
		<div className="project__container black__container footfall__measurement" >
            <div>
                <img src='images/project images/FM/FM-00.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Illumin is a journey advertising platform that seamlessly integrates media planning and buying within an interactive and intuitive interface. There was a need for users to measure how their ads influenced visits to specific locations, such as shops or restaurants. Adsquare offered a reliable solution for tracking and understanding this impact. To meet users' needs, we decided to integrate Adsquare's Footfall measurement feature into our product.</p>
                <h3>Project objective</h3>
                <p>The objective of this project was to design a feature that enabled users to measure how their advertising journeys influenced the number of visitors to specific locations.</p>
                <h3>Project duration</h3>
                <p>The discovery and design phases for this project lasted for 8 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
            </div>

            <div id='section2'>
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <h3>How Footfall measurement works</h3>
                <p>Adsquare offers a Footfall Measurement solution that allows advertisers to measure and optimise the offline impact of their advertising campaigns. The results can be made available in real time across all media and channels – so mobile, desktop.</p>
                <img src='images/project images/FM/FM-B01.png' className='large__image'></img>
                <p>Users could select multiple locations and define a radius around each location to measure the impact of their ads.</p>
                <img src='images/project images/FM/FM-B02.png' className='large__image'></img>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                {/* <p className='space'>A</p> */}
                <h3>User flow</h3>
                <p>After gaining a thorough understanding of how Footfall measurement worked, I initiated this phase by creating the main user flow.</p>
                <img src='images/project images/FM/FM-C01.png'className='large__image'></img>
                <h3>Lo-fi wireframes</h3>
                <p>I created low-fidelity wireframes to outline the basic design of this feature.</p>
                <img src='images/project images/FM/FM-C02.png'className='large__image'></img>
                <h3>Hi-fi wireframes</h3>
                <p>After that, I created high-fidelity wireframes to refine the feature's design.</p>
                <img src='images/project images/FM/FM-C03.png'className='large__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
                </div>
                <p className='space'>A</p>
                <p>To gather feedback on the 1st iteration, the designs were shared with company stakeholders and users.</p>
                <img src='images/project images/FM/FM-D00-testing.png'className='large__image'></img>
                <p>Key insights from the testing sessions:</p>
                <ul>
                    <li>The configuration process had too many steps and needed a larger space instead of a modal.</li>
                    <li>The map was placed at the top of the modal, forcing users to scroll down to view and select locations.</li>
                </ul>
                <h3>The 2nd iteration</h3>
                <p>Based on feedback from stakeholders, I changed the configuration interface from a modal to a full-screen drawer in the second iteration.</p>
                <h3>Ideate configuration drawer layout</h3>
                <img src='images/project images/FM/FM-D00.png'className='large__image'></img>
                <h3>Lo-fi wireframes</h3>
                <img src='images/project images/FM/FM-D01.png'className='large__image'></img>
                <h3>Hi-fi wireframes</h3>
                <img src='images/project images/FM/FM-D02.png'className='large__image'></img>
                <p>After the second iteration, I shared the design with stakeholders and users to gather feedback. Key insights included:</p>
                <ul>
                    <li>The full-screen drawer provided more space, making it easier for users to view information and interact.</li>
                    <li>The empty state of the drawer should inform users that uploaded locations would be saved at the advertiser level.</li>
                    <li>In the "validate new locations" step, users should be able to see which locations are invalid.</li>
                    <li>In the "validate new locations" step, users should be able to edit and remove locations.</li>
                </ul>
                <h3>The 3rd iteration</h3>
                <p>Based on feedback from stakeholders, I updated the user flow to allow users to edit and remove locations during the validation step.</p>
                <h3>Updated user flow</h3>
                <img src='images/project images/FM/FM-D03.png'className='large__image'></img>
                <h3>Hi-fi wireframes</h3>
                <img src='images/project images/FM/FM-D04.png'className='large__image'></img>
            </div>

            <div id='section5'>
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <div>
                    <img src='images/project images/FM/FM-E01.png'className='large__image'></img>
                </div>
            </div>

            <div id='section6'>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>With Adsquare's footfall measurement, businesses gained the ability to track and optimize the offline impact of their advertising campaigns. This capability unlocked a significant revenue stream for the company, as an increasing number of businesses began prioritizing the influence of their ads on foot traffic to physical stores.</p>
                <img src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
		</div>
	)
}

export default FootfallMeasurement;