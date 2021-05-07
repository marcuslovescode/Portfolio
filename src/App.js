import React, { Component } from 'react';
import 'reset-css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';

export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      offsetY: 0,
      currentPage: 0,
      yPositions: []
    }

    this.setDimensions = this.setDimensions.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    
    window.addEventListener('resize', this.setDimensions);
    document.getElementById('app').addEventListener('wheel', this.handleScroll);
    this.setDimensions();

  }

  // Sets the offsetY property and collects the y positions of the containers, in state, that will then be passed to child components and added to their top padding.
  setDimensions() {

    const navHeight = document.getElementById('nav-bar').getBoundingClientRect().height;
    const app = document.getElementById('app');
    const scroll = app.scrollTop;
    const pages = document.querySelectorAll('.portfolio-pages');
    const yPositions = [];
    pages.forEach(page => yPositions.push(page.getBoundingClientRect().y + scroll));


    this.setState({
      offsetY: `${navHeight + 30}px`,
      yPositions,
    });

  }

  setCurrentPage(event, page) {

    const { yPositions } = this.state;
    const app = document.getElementById('app');
    app.scrollTo({left: 0, top: yPositions[page], behavior: 'smooth'});
    this.setState({currentPage: page});

  }

  handleScroll(event) {

    let { yPositions, currentPage, lastPageUpdate } = this.state;

    let currentY = yPositions[currentPage];
    const app = event.currentTarget;
    const current = app.children[currentPage + 2];
    const relativeScroll = app.scrollTop - currentY;
    let progression = Math.abs(relativeScroll / (relativeScroll < 0 ? window.innerHeight : current.getBoundingClientRect().height));

    // If scroll has progressed beyond the bounds of the current page going in the positive or negative direction respectively.
    if(relativeScroll >= 0 && progression >= 0.7) {
      currentPage += 1;
      this.setState({ currentPage });

    } else if(relativeScroll <= 0 && progression >= 0.7) {
      currentPage -= 1;
      this.setState({ currentPage });

    }

  }

  render() {

    const { offsetY, currentPage } = this.state;

    return(
      <div id="app">
        <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
        <SideNav currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
        <Home offsetY={offsetY} currentPage={currentPage}/>
        <About offsetY={offsetY}  currentPage={currentPage}/>
        <Projects offsetY={offsetY}  currentPage={currentPage}/>
        <Technologies offsetY={offsetY}  currentPage={currentPage}/>
        <Contact offsetY={offsetY}  currentPage={currentPage}/>
      </div>
    );

  }

}
