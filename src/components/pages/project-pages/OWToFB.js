import React from 'react';
import '../../../App.css';
import './OWToFB.css';


function OWToFB() {
	return (
		<div className="project__container black__container ow__to__fb" >
            <div>
                <img src='images/project images/OWFB/OWFB-A1.png' ></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Illumin is a journey advertising platform that allows users to run advertisements across multiple channels. In the Facebook & Instagram integration project, I showcased how we developed features that empowered users to create, launch, and manage Facebook & Instagram ads. However, the result of that project was limited to supporting users in running Facebook & Instagram ads independently, without any connection with other channels.</p>
                <h3>Project objective</h3>
                <p>The goal of this project was to build a feature that helped users connect Open Web to Facebook & Instagram, enabling them to create sequential ads within a marketing journey.</p>
                <h3>Project duration</h3>
                {/* <img src='images/project images/FI-0.png'className='medium__image__noshadow'></img> */}
                <p>The design phase for this project lasted for 2-3 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
                <h3>Table of content</h3>
                <ol>
                    <li>Project Overview</li>
                    <li>Requirement Analysis</li>
                    <li>Design Phase</li>
                    <li>Outcome & Impact</li>
                </ol>
            </div>

            <div>
                <div className='section__name'>
                    <h2>2. REQUIREMENT ANALYSIS</h2>
                </div>
                <h3>Connection Rules</h3>
                <p>We needed to follow certain rules to establish the connection from Open Web to Facebook & Instagram. These rules were defined by the engineering team and the product manager to ensure technical feasibility. I created graphs below to illustrate these connection rules.</p>
                <h4>Rule 1: Open Web path audiences should be able to be connected to the FB/IG path in the same stage.</h4>
                <img src='images/project images/OWFB/OWFB-B1.png'className='medium__image'></img>
                <h4>Rule 2: Open Web path audiences should be able to be connected to the FB/IG path in another stage.</h4>
                <img src='images/project images/OWFB/OWFB-B2.png'className='medium__image'></img>
                <h4>Rule 3: Users should be able to connect audiences from multiple Open Web paths to a FB/IG path.</h4>
                <img src='images/project images/OWFB/OWFB-B3.png'className='medium__image'></img>
                <h4>Rule 4: Each Open Web path’s audiences should be able to be connected to only 1 path (FB/IG or Open Web).</h4>
                <img src='images/project images/OWFB/OWFB-B4.png'className='medium__image'></img>
                <h4>Rule 5: Users should be informed if a previously valid connection is no longer valid.</h4>
                <img src='images/project images/OWFB/OWFB-B5.png'className='medium__image'></img>
                <h4>Rule 6: Users should be able to disconnect Open Web to FB/IG connections.</h4>
                <img src='images/project images/OWFB/OWFB-B6.png'className='medium__image'></img>
                <p>In addition to these connection rules, successfully linking an Open Web path to a Facebook path required users to perform two key actions: selecting a cross-channel connection pixel and accepting Facebook's Terms of Service.</p>
                <ul>
                    <li>Selecting Cross-Channel Connection Pixel: Users only needed to select a cross-channel connection pixel once for each journey, and they had the flexibility to change it if desired.</li>
                    <li>Accepting Facebook's Terms of Service: Users were only required to do this if they had never previously created a Custom audience in Facebook Ad Manager. While this was a rare occurrence, I addressed it to ensure a seamless user experience.</li>
                </ul>
            </div>

            <div>
                <div className='section__name'>
                    <h2>3. DESIGN PHASE</h2>
                </div>
                <p className='space'>A</p>
                <p>After gaining a thorough understanding of connection rules and some requirements regarding selecting a pixel and accepting Facebook's Terms of service, I initiated this phase by creating the user flow.</p>
                <img src='images/project images/OWFB/OWFB-C1.png'className='medium__image'></img>
                <p>Using the user flow as a foundation, I compiled a list of flows that needed to be developed:</p>
                <ol>
                    <li>Connecting an Open Web path to a Facebook & Instagram path (main flow) </li>
                    <li>Selecting a cross-channel connection pixel in Journey settings</li>
                    <li>Changing a cross-channel connection pixel in Journey settings</li>
                    <li>Viewing audiences from the Open Web in the right drawer of Facebook & Instagram</li>
                    <li>Deleting the connection from an Open Web path to a Facebook & Instagram path</li>
                    <li>Invalid connection in journey canvas</li>
                </ol>

                <h3>3.1 Connecting an Open Web path to a Facebook & Instagram path</h3>
                <p>In terms of designing the interaction of connecting an Open Web path to a Facebook path, I leveraged the existing interaction for connecting Open Web paths available on our platform. The new interaction design involved presenting a modal that allowed users to either select a pixel or navigate to the Facebook page to accept the Terms of Service.</p>
                <img src='images/project images/OWFB/OWFB-C2.png'className='large__image'></img>
                <p>The flow above illustrates the process of connecting an Open Web path to a Facebook path in cases where the user had not selected a pixel AND accepted the Terms of Service, although this was an uncommon occurrence.
                This rarity was due to the fact that users only needed to accept the Terms of Service once, as shown in screens 5 & 6, and they would never be required to do so again.</p>
                <p>If users had accepted the Terms of Service but hadn't selected a pixel, they could choose one in the modal, and the connection would be successful.</p>
                <img src='images/project images/OWFB/OWFB-C3.png'className='large__image'></img>
                <p>If users had selected a pixel, the connection would be successful instantly.</p>
                <img src='images/project images/OWFB/OWFB-C4.png'className='large__image'></img>
                <p>In the flows described above, there was a scenario in which users didn't have any pixels, resulting in no options available in the dropdown menu. In such cases, they were required to visit Facebook to create and sync pixels once more.</p>
                <img src='images/project images/OWFB/OWFB-C5.png'className='large__image'></img>

                <h3>3.2 Selecting a cross-channel connection pixel in Journey settings</h3>
                <p>In addition to selecting a cross-channel pixel directly within the canvas, users also had the option to choose it in Journey settings.</p>
                <img src='images/project images/OWFB/OWFB-C6.png'className='large__image'></img>
                <p>If users didn't have any pixels, resulting in no options in the dropdown, they were required to visit Facebook to create and sync pixels once more.</p>
                <img src='images/project images/OWFB/OWFB-C7.png'className='large__image'></img>

                <h3>3.3 Changing a cross-channel connection pixel in Journey settings</h3>
                <p>If users wanted to change the pixel, they could do so in the Journey settings. The pixel could only be modified if the journey was not published, or, if the journey was published and the Facebook path was in draft status.</p>
                <img src='images/project images/OWFB/OWFB-C8.png'className='large__image'></img>
                <p>However, if the journey was published and the Facebook path was active, users were unable to change the pixel.</p>
                <img src='images/project images/OWFB/OWFB-C9.png'className='large__image'></img>

                <h3>3.4 Viewing audiences from the Open Web in the right drawer of Facebook & Instagram</h3>
                <p>Users could view audiences from an Open Web path in the right drawer of the Facebook path. From a technical perspective, illumin imported audiences from an Open Web path by creating custom audiences in Ad Sets.</p>
                <img src='images/project images/OWFB/OWFB-C10.png'className='large__image'></img>
                
                <h3>3.5 Deleting the connection from an Open Web path to a Facebook & Instagram path</h3>
                <h4>In canvas</h4>
                <p>Users had the ability to delete the connection between Open Web and Facebook paths directly within the canvas. This action would result in the removal of audiences from all Ad Sets.</p>
                <img src='images/project images/OWFB/OWFB-C11.png'className='large__image'></img>
                <h4>In right drawer</h4>
                <p>Users had the flexibility to choose which Ad Sets to import audiences from the Open Web path by removing the audiences in the Ad Sets they didn't want to import from the drawer.</p>
                <img src='images/project images/OWFB/OWFB-C12.png'className='large__image'></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The Facebook & Instagram integration project, which enabled users to run ads on Facebook & Instagram within Illumin, was a significant milestone for the company. Subsequently, the Open Web and Facebook & Instagram connection project further solidified this achievement by allowing users to connect audiences across different channels for the first time. This initiative aligns with the company's strategic goal of becoming a multi-channel journey marketing platform.</p>
            </div>

		</div>
	)
}

export default OWToFB;