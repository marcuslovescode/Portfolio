import React, { Component } from 'react';
import './About.css';

export default class About extends Component {

  render() {

    const { offsetY, currentPage } = this.props;
    const date = new Date();
    const age = date.getMonth() > 1 || (date.getMonth() === 1 && date.getDate() > 20) ? date.getFullYear() - 2000 : date.getFullYear() - 2001;

    return (
      <div id="about" className={currentPage === 1 ? 'portfolio-pages active-portfolio-page' : 'portfolio-pages'} style={{
        paddingTop: offsetY
      }}>
        <h2 id="about-header">About Me</h2>
        <div id="about-img-container" className='slide-in'>
          <img src="./photos/about-me.jpg" alt="Lines and waves"/>
        </div>
        <p id="about-me-text" className="slide-in">
          Hello! My name is Marcus Morroc-Bey, I am {age} years old, and I am a software engineer / software developer. A few years back, I started taking an interest in engineeing -- specifically astronautical engineering. I had no clue where to start, however, after doing some research, I found myself diving into the fundamental topics that make up astronautics and most of the STEM world: mathematics and physics. After studying these, on my own, I came to understand many things about the natural universe and naturally developed a logical and methodical way of thinking. This deepened my interest for the blueprint of our reality and motivated me to pursue a career in physics. So, you might be wondering something like, "Why are you a software engineer?" Well, I aim to couple my passion for, and eventual understanding of, physics with the knowledge I obtain in software engineering and work on developing qunatum computers. In the meantime, I aim to deepen my understanding of physics and classical computing and develop software solutions with innovative and like minded organizations. Oh yeah, and my favorite color is yellow!
        </p>

      </div>
    );

  }

}
