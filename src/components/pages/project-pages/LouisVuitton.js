import React from 'react';
import '../../../App.css';


function LouisVuitton () {
	return (
		<div className="project__container" >
			{/* <div>
				<video src='videos/LV Cover.mp4' className="project__video" autoPlay loop muted/>
			</div> */}
			<div>
				<img src='images/project images/LV Motion Design Package-01.png' ></img>
                <img src='images/project images/LV Motion Design Package-02.png' ></img>
                <img src='images/project images/LV Motion Design Package-03.png' ></img>
                <img src='images/project images/LV Motion Design Package-04.png' ></img>
                <img src='images/project images/LV Motion Design Package-05.png' ></img>
			</div>
			<div>	
                <video src='videos/LouisVuitton.mp4' className="project__video" controls/>
			</div>
		</div>
	)
}

export default LouisVuitton;