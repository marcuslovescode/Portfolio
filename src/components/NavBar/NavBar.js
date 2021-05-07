import React, { Component } from 'react';
import './NavBar.css';

const pages = [ 'Home', 'About Me', 'Projects', 'Technologies', 'Contact' ];

export default class NavBar extends Component {

  constructor(props) {

    super(props);
    this.state = {
      dropdownVisible: false,
      dropdownHeight: 0,
      navBarHeight: 0
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setDropdownHeight = this.setDropdownHeight.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);

  }

  componentDidMount() {

    window.addEventListener('resize', this.setDropdownHeight);
    this.setDropdownHeight();

  }

  setCurrentPage(event, i) {

    this.setState({ dropdownVisible: false },
      function() {
      this.props.setCurrentPage(event, i);
    }.bind(this));

  }

  toggleDropdown(event) {

    const menu = event.currentTarget;
    const dropdown = menu.nextElementSibling;
    const navBarHeight = menu.parentElement.parentElement.getBoundingClientRect().height;
    const dropdownHeight = window.innerHeight - navBarHeight;

    this.setState({
      dropdownHeight,
      navBarHeight,
      dropdownVisible: !this.state.dropdownVisible
    });

  }

  setDropdownHeight(event) {

    let { dropdownVisible } = this.state;

    if(!dropdownVisible) return;

    if(window.innerWidth > 621) {

      dropdownVisible = false;
      this.setState({ dropdownVisible });
      return;

    }

    const navBarHeight = document.getElementById('nav-bar').getBoundingClientRect().height;
    const dropdownHeight = window.innerHeight - navBarHeight;

    this.setState({
      dropdownHeight,
      navBarHeight
    });

  }

  render() {

    const { currentPage } = this.props;
    const { dropdownHeight, dropdownVisible, navBarHeight } = this.state;

    return (
      <div id="nav-bar">
        {window.innerWidth > 621 &&
          <div id="full-nav-bar">
            <img id="app-logo" src="./icons/logo.png" alt="Icosahedron"/>
            <ul id="main-nav">
              {pages.slice(0, 4).map((page, i) => (
                <li key={`page-${i}`} className={currentPage === i ? 'nav-item current-nav-item' : 'nav-item'} onClick={e => this.setCurrentPage(e, i)}>{page}</li>
              ))}
            </ul>
            <h2 id="nav-contact" onClick={e => this.setCurrentPage(e, 4)}>Contact</h2>
          </div>
        }
        {window.innerWidth <= 621 &&
          <div id="responsive-nav-bar">
            <img id="app-logo" src="./icons/logo.png" alt="Icosahedron"/>
            <img id="nav-bar-menu-icon" src="./icons/menu.png" alt="Three parrallel lines." onClick={this.toggleDropdown}/>
            <ul id="nav-bar-dropdown" style={{
              height: `${dropdownHeight}px`,
              top: dropdownVisible ? `${navBarHeight}px` : `-${navBarHeight}px`,
              transform: `translateY(${dropdownVisible ? '0px' : '-100%'})`
            }}>
              {pages.map((page, i) => (
                <li key={`page-${i}`} className={currentPage === i ? 'responsive-nav-item current-responsive-nav-item' : 'responsive-nav-item'} onClick={e => this.setCurrentPage(e, i)}>{page}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    );

  }

}
