import React, { Component } from 'react';
import './Home.css';
import Icosahedron from './Icosahedron/Icosahedron';

export default class Home extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    const { offsetY, currentPage } = this.props;

    return(
      <div id="home" className={currentPage === 0 ? 'portfolio-pages active-portfolio-page' : 'portfolio-pages'} style={{
        paddingTop: offsetY
      }}>
        <div id="home-intro" className="slide-in">
          <h1>Marcus Morroc-Bey</h1>
          <h2>&lt; Software Engineer / Software Developer &gt;</h2>
        </div>
        <Icosahedron offsetY={offsetY} />
        <div id="icosahedron-definition" className="slide-in">
          <h2>Pentakis Dodecahedron</h2>
          <p>The pentakis dodecahedron, as illustrated above, is made by attatching a pentagonal pyramid to a regualar dodecahedron: making it the kleetope of the regular dodecahedron. It is the dual of an Archimedean solid, namely the truncated icosahedron, making it a Catalan solid. It possesses, 32 verticies, 60 faces, and 90 edges. It also doesn't make for a bad soccer ball.</p>
        </div>
      </div>
    );

  }

}
