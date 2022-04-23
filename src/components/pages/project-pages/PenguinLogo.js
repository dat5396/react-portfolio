import React from 'react';
import '../../../App.css';


function Penguin () {
	return (
		<div className="project__container" >
			<div>
                <video src='videos/Penguin.mp4' className="project__video" controls/>
			</div>
		</div>
	)
}

export default Penguin;