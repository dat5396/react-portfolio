import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './InventoryMarketplace.css';
import Sidebar from '../../Sidebar';


function InventoryMarketplace() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Project overview' },
    { id: 'section2', title: '2. Discovery & analysis' },
    { id: 'section3', title: '3. Ideation & concept development' },
    { id: 'section4', title: '4. User testing, gathering feedbacks & iterations' },
    { id: 'section5', title: '5. Final design' },
    { id: 'section6', title: '6. Outcome & impact' },
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
		<div className="project__container black__container first__party__audience" >
            <div>
                <img src='images/project images/IM/IM-00.png'className='large__image'></img>
            </div>
            
            <div id="section1">
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                {/* <p>illumin was a platform that empowered marketers to create meaningful cross-channel advertising campaigns. Prior to this project, Illumin did not support self-serve uploading of first-party data, such as email addresses and phone numbers. To use first-party data, users had to provide this information to the customer success team, who would manually process and upload it for users to utilize.</p> */}
                <h3>Project objective</h3>
                {/* <p>The goal of this project was to develop a feature that allows users to self-serve upload first-party data and then use this data to run ads in illumin.</p> */}
                <h3>Project duration</h3>
                <p>The dicovery and design phases for this project lasted for 16 weeks.</p>
                <p>My role was Product Designer, the only designer for this project. What I show in this portfolio was my contribution to the project.</p>
                
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <h3>Competitve analysis</h3>
                <img src='images/project images/IM/IM-B01.png'className='large__image'></img>
            
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                <p className='space'>A</p>
                <h3>User flow</h3>
                <img src='images/project images/IM/IM-C01.png'className='large__image'></img>
                <h3>Sketching idea</h3>
                <img src='images/project images/IM/IM-C02.png'className='large__image'></img>
                <h3>Lo-fi wireframes</h3>
                <img src='images/project images/IM/IM-C03.png'className='large__image'></img>
                <h3>Hi-fi wireframes</h3>
                <img src='images/project images/IM/IM-C04.png'className='large__image'></img>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
                </div>
                <h3>The 2nd Iteration</h3>
                <img src='images/project images/IM/IM-D01.png'className='medium__image'></img>
                <img src='images/project images/IM/IM-D02.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D03.png'className='large__image'></img>
                <h3>The 3rd Iteration</h3>
                <img src='images/project images/IM/IM-D04.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D05.png'className='large__image'></img>
                <img src='images/project images/IM/IM-Action-flow.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D06.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D07.png'className='large__image'></img>
                <h3>The 4th Iteration</h3>
                <img src='images/project images/IM/IM-D08.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D09.png'className='large__image'></img>
                <img src='images/project images/IM/IM-D10.png'className='large__image'></img>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <p className='space'>A</p>
                <h3>Inventory marketplace</h3>
                <img src='images/project images/IM/IM-E01.png'className='large__image'></img>
            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                {/* <p>As a result of this project, we successfully implemented a feature that not only empowers users to independently upload and utilize first-party data but also streamlines operations, reducing the manual workload for the client success team. In terms of business outcomes, we successfully met the success metric for this feature by managing 15,000,000 first-party data entries per month by the end of the first year.</p> */}
                <img src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
		</div>
	)
}

export default InventoryMarketplace;