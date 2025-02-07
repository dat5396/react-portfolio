import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './GeoPOITargeting.css';
import Sidebar from '../../Sidebar';

function GeoPOITargeting() {

    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Project Overview' },
    { id: 'section2', title: '2. Requirement Analysis' },
    { id: 'section3', title: '3. Ideation & Concept Development' },
    { id: 'section4', title: '4. Final Design' },
    { id: 'section5', title: '5. Outcome & Impact' },
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
		<div className="project__container black__container poi__targeting" >
            <div>
                <img src='images/project images/POI/POI-0.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Illumin is a journey advertising platform that seamlessly integrates media planning and buying within an interactive and intuitive interface. Before this project, Illumin only allowed users to target audiences based on broad locations such as countries, DMAs, cities, zip codes, latitude and longitude. However, these location parameters did not sufficiently reflect the granular needs or behaviors of audiences. For instance, advertisers could not target users visiting specific fast-food restaurants, such as McDonald's or Tim Hortons.</p>
                <h3>Project objective</h3>
                <p>The objective of this project was to develop a feature enabling advertisers to target their ads to individuals visiting specific points of interest.</p>
                <h3>Project duration</h3>
                <p>The design phase for this project lasted for 2-3 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
                {/* <h3>Table of content</h3>
                <ol>
                    <li>Project Overview</li>
                    <li>Requirement Analysis</li>
                    <li>Ideation & Concept Development</li>
                    <li>Final Design</li>
                    <li>Outcome & Impact</li>
                </ol> */}
            </div>

            <div id='section2'>
                <div className='section__name'>
                    <h2>2. REQUIREMENT ANALYSIS</h2>
                </div>
                <h3>Point of Interest Database</h3>
                <p>In the point of interest database, entries were categorized into two types: Name and Category. Under 'Name,' entries included any specific names such as Starbucks, Tim Hortons, Burger King, etc. Under 'Category,' entries encompassed broader categories of points of interest such as retail, supermarket, cinema, etc.</p>
                <img src='images/project images/POI/POI-B1.png' className='medium__image'></img>
                <p>Users had the option to either allow or block all selected points of interest.</p>
                <p>Furthermore, prior to targeting any points of interest, users must designate at least one allowed location. These allowed locations could not be specified by latitude and longitude coordinates.</p>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. IDEATION & DESIGN</h2>
                </div>
                <p className='space'>A</p>
                <p>After analyzing the product requirements, I started this phase by building the user flows.</p>
                <img src='images/project images/POI/POI-C1.png' className='large__image'></img>
                <h3>Location and Point of interest</h3>
                <p>The next step I took was to determine where the point of interest targeting section should be displayed. In the product, users were already able to target locations such as countries and cities. Furthermore, points of interest targeted were linked to selected locations. Therefore, the point of interest section should be positioned alongside the location targeting feature.</p>
                <p>In the picture below, the left screen displays the location targeting interface that was utilized in the product prior to this project. On the right screen, I have incorporated tabs to facilitate users in switching between location and point of interest configurations.</p>
                <img src='images/project images/POI/POI-C2.png' className='large__image'></img>
                <h3>Point of interest configurations</h3>
                <p>After determining the placement of the point of interest targeting section, I brainstormed some ideas for this feature. The primary requirements included enabling users to search and select names or categories. Additionally, users could set the radius of the points of interest and decide whether to allow or block those points.</p>
                <h4>Concept 1: Implement a tab to facilitate users in switching between searching by name or category.</h4>
                <img src='images/project images/POI/POI-C3.png' className='medium__image'></img>
                <h4>Concept 2: Utilize a dropdown menu to allow users to select between searching by name or category.</h4>
                <img src='images/project images/POI/POI-C4.png' className='medium__image'></img>
                <p>I opted for Concept 2 because it saved interface space and allowed for scalability if we were to support additional search methods beyond name and category.</p>
                <h3>Improvement in map visualization</h3>
                <p>Additionally, an improvement in visualization was implemented in this project. Previously, we used default Google Maps pins for both allowed and blocked locations, and there was no radius displayed on the map to visualize the selected area chosen by users. (Image below)</p>
                <img src='images/project images/POI/POI-C5.png' className='medium__image'></img>
                <p>In this project, I introduced 2 new icons to help users distinguish between allowed and blocked locations. Moreover, circles representing the radius were added to the map to visually depict the targeted area of the ads.</p>
                <img src='images/project images/POI/POI-C6.png' className='medium__image'></img>
                <img src='images/project images/POI/POI-C7.png' className='medium__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. FINAL DESIGN</h2>
                </div>
                <h3>Main flow</h3>
                <p>After brainstorming various concepts, I integrated the designs into the user flow.</p>
                <img src='images/project images/POI/POI-D1.png' className='large__image'></img>
                <h3>Error cases</h3>
                <p>In addition to the main flow, I also addressed edge cases and error scenarios that needed to be covered.</p>
                <h4>Case 1: When users attempt to remove locations that contain points of interest.</h4>
                <img src='images/project images/POI/POI-D2.png' className='large__image'></img>
                <h4>Case 2: When users attempt to target points of interest without having selected any allowed locations.</h4>
                <img src='images/project images/POI/POI-D3.png' className='large__image'></img>
                <h4>Case 3: When the user reaches the limit of 10,000 location points.</h4>
                <img src='images/project images/POI/POI-D4.png' className='medium__image'></img>
            </div>

            <div id='section5'>
                <div className='section__name'>
                    <h2>5. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The feature introduced a new opportunity in retail media, allowing users to measure the impact of their ads on specific locations. With detailed data such as store visitors, store trips, and time-to-visit metrics, users gained valuable insights to improve their marketing campaigns.</p>
                <img src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
		</div>
	)
}

export default GeoPOITargeting;