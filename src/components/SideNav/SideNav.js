
import React, { Component } from 'react';
import './SideNav.css';

const pages = ['Home', 'About Me', 'Projects', 'Technologies', 'Contact'];

function togglePageName(event) {

  const pageName = event.currentTarget.previousElementSibling;

  if(event.type === 'mouseenter') {
    pageName.style.opacity = 1;
    pageName.style.zIndex = 1;

  } else {
    pageName.style.opacity = pageName.style.zIndex = '';

  }


}

export default function SideNav(props) {

  const { currentPage, setCurrentPage } = props;

  return (
    <div id="side-nav">
      {pages.map((page, i) => (
        <div key={`page-${i}`} className={currentPage === i ? 'side-nav-page active-page' : 'side-nav-page'}>
          <h3>{page}</h3>
          <div className="side-nav-bubble" onMouseEnter={togglePageName} onMouseLeave={togglePageName} onClick={e => setCurrentPage(e, i)}></div>
          {i < pages.length - 1 &&
            <div className="side-nav-line"></div>
          }
        </div>
      ))}
      <h2 id="side-nav-current-page">{`0${currentPage + 1} | 05`}</h2>
    </div>
  );

}
