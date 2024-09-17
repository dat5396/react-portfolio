import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './GeoPOITargeting.css';
import Sidebar from '../../Sidebar';

function SupportCenter() {

    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Project Overview' },
    { id: 'section2', title: '2. Research & Analysis' },
    { id: 'section3', title: '3. Design Process' },
    { id: 'section4', title: '4. Outcome & Impact' },
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
                <img src='images/project images/SC/SC-0.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Before this project, the illumin knowledge base suffered from poor UX and UI. It lacked a clear information architecture, making it difficult for users to navigate topics and find articles. The outdated and inconsistent UI further hindered the experience. Additionally, users had no option to submit support tickets independently, relying entirely on the CSM team for assistance.</p>
                <p>Below are screenshots showcasing the previous support center's design, highlighting its limitations in terms of usability, inconsistent UI, and lack of self-service support options.</p>
                <img src='images/project images/SC/SC-A1.png' className='large__image'></img>
                <h3>Project objective</h3>
                <p>The objective of this project was to build a comprehensive support center where users could:</p>
                <ul>
                    <li>Easily find and read tutorial articles</li>
                    <li>Access monthly product updates</li>
                    <li>Submit and track support cases independently</li>
                </ul>
                <h3>Project duration</h3>
                <p>The design phase for this project lasted for 3 weeks.</p>
                <p>My role was Product Designer.</p>
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
                    <h2>2. RESEARCH & ANALYSIS</h2>
                </div>
                <p>I conducted a competitive analysis to explore how other platforms structured their support centers, focusing on key design patterns and best practices to improve usability and functionality.</p>
                <img src='images/project images/SC/SC-B1.png' className='large__image'></img>
                <p>Key insights gathered from this phase of the project include:</p>
                <ul>
                    <li>A large search bar on the homepage allowed users to quickly start their search.</li>
                    <li>A search bar in the header ensured article accessibility from any page.</li>
                    <li>Mega menus in the navigation bar enabled quick access to various topics.</li>
                    <li>Articles were grouped by topics for better organization.</li>
                    <li>Relevant articles were linked at the end of each article for easier navigation.</li>
                    <li>The support center was accessible without requiring login.</li>
                    <li>A Yes/No question at the end of each article asked if it was helpful.</li>
                </ul>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. DESIGN PROCESS</h2>
                </div>
                <p className='space'>A</p>
                <p>Based on the three main functions of the support center, I began this phase by creating the sitemap for the page.</p>
                <img src='images/project images/SC/SC-C1.png' className='medium__image'></img>
                <h3>Grid system</h3>
                <img src='images/project images/SC/SC-C1B.png' className='large__image'></img>
                <h3>Home page</h3>
                <p>On the homepage, users get a quick overview of what the support center offers and can easily explore different topics within the knowledge base.</p>
                <img src='images/project images/SC/SC-C2.png' className='large__image'></img>
                <h3>Navigation</h3>
                <p>Users can easily navigate to all sections and search for any articles using the navigation bar.</p>
                <img src='images/project images/SC/SC-C3.png' className='large__image'></img>
                <h3>Topic page</h3>
                <p>Articles related to a specific topic are displayed on the topic page.</p>
                <img src='images/project images/SC/SC-C4.png' className='large__image'></img>
                <h3>Article page</h3>
                <p>Keywords in an article are highlighted for easy scanning. On the desktop version, the 'On this page' feature helps users quickly scroll to specific sections. Related articles are displayed at the bottom for further reading.</p>
                <img src='images/project images/SC/SC-C5.png' className='large__image'></img>
                <h3>Search result page</h3>
                <p>When users search for issues, the keywords are highlighted in each search result.</p>
                <img src='images/project images/SC/SC-C6.png' className='large__image'></img>
                <h3>Announcements page</h3>
                <p>All monthly product updates are displayed on the announcements page.</p>
                <img src='images/project images/SC/SC-C7.png' className='large__image'></img>
                <h3>Monthly product updates page</h3>
                <p>Users can view detailed information about all new features and improvements in each monthly release.</p>
                <img src='images/project images/SC/SC-C8.png' className='large__image'></img>
                <h3>Support page</h3>
                <p>Users can open new cases and track all ongoing cases on this page.</p>
                <img src='images/project images/SC/SC-C9.png' className='large__image'></img>
                <h3>Choose the type of support page</h3>
                <p>Users can select the type of support they need.</p>
                <img src='images/project images/SC/SC-C10.png' className='large__image'></img>
                <h3>Open a case page</h3>
                <p>To submit a case, users fill out form fields to provide information for the CSM team to assist them.</p>
                <img src='images/project images/SC/SC-C11.png' className='large__image'></img>
                <h3>Case detail page</h3>
                <p>Users can view the details and progress of the cases they have submitted.</p>
                <img src='images/project images/SC/SC-C12.png' className='large__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The new support center significantly enhanced the overall user experience. Users can now easily find and read tutorials, learn about new features and product improvements, and independently submit cases for additional support.</p>
                <img src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
		</div>
	)
}

export default SupportCenter;