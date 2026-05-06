import React from 'react';
import './Button.css';

export default function Button({ children, onClick, as: Tag = 'button', className = '', size = 'md', ...props }) {
	return (
		<Tag
			className={`gb gb--${size} ${className}`}
			onClick={onClick}
			{...(Tag === 'button' ? { type: 'button' } : {})}
			{...props}
		>
			{children}
		</Tag>
	);
}