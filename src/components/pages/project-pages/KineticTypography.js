import React from 'react';
import '../../../App.css';


function KineticTypography () {
	return (
		<div className="project__container" >
			<div>
                <video src='videos/flower-animation.mp4' className="project__video" autoPlay loop controls/>
			</div>
		</div>
	)
}

export default KineticTypography;