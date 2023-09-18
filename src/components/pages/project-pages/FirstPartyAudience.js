import React from 'react';
import '../../../App.css';
import './FirstPartyAudience.css';


function FirstPartyAudience() {
	return (
		<div className="project__container black__container first__party__audience" >
            <div>
                <img src='images/project images/FPA-A1.jpg' ></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Illumin is a journey advertising platform that seamlessly integrates media planning and buying within an interactive and intuitive interface. Prior to this project, Illumin did not support self-serve uploading of first-party data, such as email addresses and phone numbers. To use first-party data, users had to provide this information to the customer success team, who would manually process and upload it for users to utilize.</p>
                <h3>Project objective</h3>
                <p>The goal of this project was to develop a feature that allows users to self-serve upload first-party data and then use this data to run ads in illumin.</p>
                <h3>Project duration</h3>
                {/* <img src='images/project images/FI-0.png'className='medium__image__noshadow'></img> */}
                <p>The design phase for this project lasted for 4 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
                <h3>Table of content</h3>
                <ol>
                    <li>Project Overview</li>
                    <li>Research & Analysis</li>
                    <li>Ideation & Concept Development</li>
                    <li>User Testing & Iteration</li>
                    <li>Final Design</li>
                    <li>Outcome & Impact</li>
                </ol>
            </div>

            <div>
                <div className='section__name'>
                    <h2>2. RESEARCH & ANALYSIS</h2>
                </div>
                <h3>How LiveRamp works</h3>
                <p>In regard to first-party data, we did not store it directly within Illumin. Instead, we leveraged LiveRamp, a professional data storage and distribution service with a wide range of pre-existing features, including data storage, updates, and distribution to various destinations such as Facebook, TikTok, Google Ads, MailChimp, and more. Thus, I needed to conduct research to understand how LiveRamp operates.</p>
                <p>After uploading data to LiveRamp, the user had to wait for LiveRamp to process their data. The processing time varied from a few minutes to a few days.</p>
                <img src='images/project images/FPA-B1.png'className='small__image'></img>
                <p>LiveRamp provided users with important information, including Date Transferred, Total Rows, and Unique Records. Notably, LiveRamp was planning to charge users based on their average RUMs.</p>
                <img src='images/project images/FPA-B2.png'className='medium__image'></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                <p className='space'>A</p>
                <p>After gaining a thorough understanding of how LiveRamp worked, I initiated this phase by creating the user flows. According to the product requirement document for this project, there were four distinct flows within this feature:</p>
                <ul>
                    <li>Upload and Post-Upload</li>
                    <li>Manage</li>
                    <li>Update</li>
                    <li>Delete</li>
                </ul>
                <h3>3.1. Uploading and Post-Uploading flow</h3>
                <h3>Uploading</h3>
                <p>I started building this flow by creating a user flow.</p>
                <img src='images/project images/FPA-C-Userflow1.png'className='large__image'></img>
                <p>Alongside uploading basic form fields such as Name and Upload Area, there was an additional requirement in this flow: recommending users to generate a suggested audience based on their data. This feature aimed to increase the company's revenue by providing third-party audiences for users. I devised two concepts on how to prompt users to generate audience suggestions:</p>
                <ul>
                    <li>Recommend suggested audiences in the uploading step</li>
                    <li>Recommend suggested audiences after the uploading step</li>
                </ul>
                <h4>Concept 1: Recommend suggested audiences in the uploading step</h4>
                <img src='images/project images/FPA-C-Userflow2.png'className='large__image'></img>
                <p>I placed the 'Suggest Audience' toggle at the bottom of the uploading page. (Screen No. 4 & 5)</p>
                <img src='images/project images/FPA-C1.png'className='large__image'></img>
                <h4>Concept 2: Recommend suggested audiences after the uploading step</h4>
                <img src='images/project images/FPA-C-Userflow3.png'className='large__image'></img>
                <p>I placed the 'Suggest Audience' modal after the user completes the uploading step. (Screen No. 9)</p>
                <img src='images/project images/FPA-C2.png'className='large__image'></img>
                <p>I conducted rapid testing sessions to evaluate two concepts and determine which one offered a better user experience. The testing results will be presented in the subsequent sections.</p>
                <p>There were several patterns available for the uploading flow, including modal, drawer, and separate page. I opted for navigating to another page because we had already employed this pattern in other audience creation flows. Consequently, reusing the page pattern helped maintain product consistency.</p>
                
                <h3>Post-uploading</h3>
                <p>After the upload step, I utilized badges and notifications to inform the user about the statuses of the audience file. There were 3 cases after the uploading step:</p>
                <ul>
                    <li>If the user chose to generate Suggested audiences</li>
                    <li>If the user didn't choose to generate Suggested audiences</li>
                    <li>If LiveRamp rejected the file</li>
                </ul>
                <h4>Case 1: If the user chose to generate Suggested audiences</h4>
                <img src='images/project images/FPA-C3.png'className='large__image'></img>
                <h4>Case 2: If the user didn't choose to generate Suggested audiences</h4>
                <img src='images/project images/FPA-C4.png'className='large__image'></img>
                <h4>Case 3: If LiveRamp rejected the file</h4>
                <img src='images/project images/FPA-C5.png'className='large__image'></img>


                <h3>3.2 Managing flow</h3>
                <p>In terms of managing first-party audiences, there were 3 statuses that need to be managed: </p>
                <ul>
                    <li>The audience is successfully uploaded and can be used like regular audiences</li>
                    <li>The audience is being processed</li>
                    <li>The audience is rejected by LiveRamp and the user can retry upload</li>
                </ul>
                <h4>Case 1: The audience is successfully uploaded and can be used like regular audiences</h4>
                <img src='images/project images/FPA-C6.png'className='large__image'></img>
                <h4>Case 2: The audience is being processed</h4>
                <img src='images/project images/FPA-C7.png'className='large__image'></img>
                <h4>Case 3: The audience is rejected by LiveRamp and the user can retry upload</h4>
                <img src='images/project images/FPA-C8.png'className='large__image'></img>

                <h3>3.3 Updating flow</h3>
                <p>We decided to support two types of updates: incremental and full refresh. The challenge here was assisting users in selecting the correct option. In addition to providing explanatory text for each type, I designed two illustrations to aid users in making the right choice.</p>
                <img src='images/project images/FPA-C9.png'className='large__image'></img>
                
                <h3>3.4 Deleting flow</h3>
                <p>To delete a first-party audience, it must not be included in any published journeys. This prevents users from disrupting ongoing journeys. Therefore, when the user wanted to delete a first-party audience, the user needed to delete it in the ongoing journeys first. </p>
                <img src='images/project images/FPA-C10.png'className='large__image'></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>4. USER TESTING & ITERATION</h2>
                </div>
                <p className='space'>A</p>
                <p>I partnered with a UX researcher to conduct rapid testing sessions to gather user feedback. We conducted two sessions: one with the Customer Success Team, who worked with self-serve customers, and another with the Managed Team, responsible for running campaigns for managed clients.</p>
                <p>We gathered some possitive feedback:</p>
                <ul>
                    <li>The uploading flow was straightforward and consistent with other audience creation processes, making it intuitive for users.</li>
                    <li>Most testers preferred the suggestion of audiences being integrated into the uploading step rather than placing it at the end, as it could be easily overlooked by users.</li>
                    <li>The updating flow received positive feedback, with testers finding the illustrations helpful in making appropriate choices.</li>
                </ul>
                <p>Additionally, there were some areas that required improvement. Testers mentioned hesitating to update the audience because they were unsure if it remained active during the update process. Consequently, I included a sentence in the design to clarify that the audience remains active and can be added to journeys while being updated.</p>
                <img src='images/project images/FPA-D1.png'className='medium__image'></img>
            </div>

            <div>
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <h3>5.1 Uploading and Post-Uploading flow</h3>
                <h3>Uploading</h3>
                <img src='images/project images/FPA-E1.png'className='large__image'></img>

                <h3>Post-Uploading</h3>
                <h4>Case 1: If the user chose to generate Suggested audiences</h4>
                <img src='images/project images/FPA-E2.png'className='large__image'></img>
                <h4>Case 2: If the user didn't choose to generate Suggested audiences</h4>
                <img src='images/project images/FPA-E3.png'className='large__image'></img>
                <h4>Case 3: If LiveRamp rejected the file</h4>
                <img src='images/project images/FPA-E4.png'className='large__image'></img>

                <h3>5.2 Managing flow</h3>
                <h4>Case 1: The audience is successfully uploaded and can be used like regular audiences</h4>
                <img src='images/project images/FPA-E5.png'className='large__image'></img>
                <h4>Case 2: The audience is being processed</h4>
                <img src='images/project images/FPA-E6.png'className='large__image'></img>
                <h4>Case 3: The audience is rejected by LiveRamp and the user can retry upload</h4>
                <img src='images/project images/FPA-E7.png'className='large__image'></img>

                <h3>5.3 Updating flow</h3>
                <img src='images/project images/FPA-E8.png'className='large__image'></img>

                <h3>5.4 Deleting flow</h3>
                <img src='images/project images/FPA-E9.png'className='large__image'></img>

            </div>

            <div>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>As a result of this project, we successfully implemented a feature that not only allows users to independently upload and use first-party data but also contributes to saving the company's resources by reducing the manual processes of the client success team. This enhancement significantly improved user autonomy and efficiency within the platform while optimizing operational efficiency.</p>
            </div>

		</div>
	)
}

export default FirstPartyAudience;