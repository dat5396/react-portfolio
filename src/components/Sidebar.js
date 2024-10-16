import React from 'react';
import './Sidebar.css';

function Sidebar({ activeSection, sections, handleLinkClick }) {
  return (
    <div className="sidebar">
      <p>On this page</p>
      <ul>
        {sections.map((section, index) => (
          <li key={index} className={ activeSection === section.id ? 'active' : ''}>
            <a href={`#${section.id}`} onClick={(e) => handleLinkClick(e, section.id)}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;