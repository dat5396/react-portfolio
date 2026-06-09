import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './AudienceRecommendation.css';
import Sidebar from '../../Sidebar';


function ComponentLibrary() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Part A' },
        { id: 'section3', title: '3. Part B' },
        { id: 'section4', title: '4. Part C' },
        { id: 'section5', title: '5. Part D' },
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
        <div className="project__container audience__recommendation" >
            <div>
                <img src='images/project images/AR/AR-00.png' className='large__image'></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. Part A</h2>
                </div>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A1.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A2.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A3.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A4.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A5.png' className='large__image'></img>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. Part A</h2>
                </div>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A1.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A2.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A3.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A4.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartA_A5.png' className='large__image'></img>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. Part B</h2>
                </div>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B1.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B2.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B3.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B4.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B5.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B6.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B7.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartB_B8.png' className='large__image'></img>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. Part C</h2>
                </div>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C1.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C2.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C3.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C4.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C5.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C6.png' className='large__image'></img>
                {/* <img loading="lazy" src='images/project images/DS/DS-PartC_C7.png' className='large__image'></img> */}
                <img loading="lazy" src='images/project images/DS/DS-PartC_C8.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartC_C9.png' className='large__image'></img>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. Part D</h2>
                </div>
                <img loading="lazy" src='images/project images/DS/DS-PartD_D1.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartD_D2.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartD_D3.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartD_D4.png' className='large__image'></img>
                <img loading="lazy" src='images/project images/DS/DS-PartD_D5.png' className='large__image'></img>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>As a result, advertisers were able to identify the right audiences more quickly and with greater confidence. The AI recommendations reduced the time spent searching through third-party segments and made the targeting process more efficient. Campaign performance improved through better audience selection, leading to higher impressions and stronger overall results. This solution helped advertisers make smarter decisions and optimize their campaigns more effectively.</p>
                <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default ComponentLibrary;