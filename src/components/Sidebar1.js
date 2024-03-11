import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = () => {
    setSidebarOpen(false);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(true);
  };

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon">
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <>
          {/* <div className="sidebar_icon">
            <i className="fas fa-times"></i>
          </div> */}
          <div className="sidebar_items">
            <div className="sidebar_item">
                <a href="#Section1" className="active">1. Project Overview</a>
            </div>
            <div className="sidebar_item">
                <a href="2" className="active">2. Research & Analysis</a>
            </div>
            <div className="sidebar_item">
                <a href="3" className="active">3. Ideation & Concept Development</a>
              {/* <p>3. Ideation & Concept Development</p> */}
            </div>
            <div className="sidebar_item">
                <a href="4" className="active">4. User Testing & Iteration</a>
              {/* <p>4. User Testing & Iteration</p> */}
            </div>
            <div className="sidebar_item">
                <a href="5" className="active">5. Final Design</a>
              {/* <p>5. Final Design</p> */}
            </div>
            <div className="sidebar_item">
                <a href="6" className="active">6. Outcome & Impact</a>
              {/* <p>6. Outcome & Impact</p> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;