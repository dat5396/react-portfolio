import React from 'react';
import '../../App.css';
import './Contact.css';

export default function Contact() {
	return (
		<div className="contact">
			<video src="/videos/contact.mp4" autoPlay loop muted />
			<h1>Contact Me</h1>
			<p> Dat Tran </p>
			<p> dattientran6868@gmail.com</p>
			<p> (647) 513 3653 </p>
			<div className='social__links'>
				<a href="https://www.linkedin.com/in/dattran6868/" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
				<a href="https://www.behance.net/dattran6868" target="_blank"> <i class="fa-brands fa-behance-square"></i></a>
			</div>
		</div>
	)
}