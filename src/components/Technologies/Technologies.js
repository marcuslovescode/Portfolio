import React, { Component } from 'react';
import './Technologies.css';
import { Wheel, technologies } from './Wheel/Wheel';

export default class Technologies extends Component {

  constructor(props) {

    super(props);

    this.state = {
      currentTechnology: 2,
      currentTechnologies: 'languages',
      positions: [],
      radius: 0,
      wheelMarginBottom: 0,
      shouldSpin: false
    };

    this.configureWheel = this.configureWheel.bind(this);
    this.setCurrentTechnology = this.setCurrentTechnology.bind(this);
    this.setTechnologyArrow = this.setTechnologyArrow.bind(this);
    this.setCurrentTechnologies = this.setCurrentTechnologies.bind(this);



  }

  componentDidMount() {

    window.addEventListener('resize', this.configureWheel);
    this.computePositions();

  }

  componentDidUpdate(prevProps, prevState) {

    const { positions, shouldSpin } = this.state;
    const { currentPage } = this.props;

    if(!positions.length) { // Positions for wheel items need to be compouted.
      this.computePositions();

    } else if(!prevState.positions.length && positions.length) {
      this.configureWheel();

    } else if(prevProps.currentPage !== currentPage || shouldSpin) { // Component just came into view.
      this.spinWheel(currentPage);

    }

  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.configureWheel);

  }

  // Spins wheel when the component comes into view.
  spinWheel(currentPage) {

    if(currentPage === 3) {
      const technology = document.querySelector('.technology-icon');

      function cb(event) {

          let { currentTechnology } = this.state;
          currentTechnology -= 1;
          currentTechnology = Math.max(currentTechnology, 0)

          this.setState({ currentTechnology });

          if(currentTechnology === 0 || this.state.currentPage !== 3) {
            event.currentTarget.removeEventListener(event.type, cb);
          }

      }

      cb = cb.bind(this);

      technology.addEventListener('transitionend', cb);

      let { currentTechnology } = this.state;
      currentTechnology -= 1;
      currentTechnology = Math.max(currentTechnology, 0);
      this.setState({ currentTechnology, shouldSpin: false });

    } else {
      this.setState({
        currentTechnology: 2,
        currentTechnologies: 'languages',
        shouldSpin: false
      });

    }

  }

  // Configures the wheel's radius and margin bottom.
  configureWheel(event) {

    const wheel = document.getElementById('wheel');
    const dimensions = wheel.getBoundingClientRect()
    const radius = dimensions.width / 3;
    const icons = wheel.querySelectorAll('.technology-icon');
    let maxBottom = -Infinity;

    icons.forEach(icon => {

      const { bottom, width, height, top } = icon.getBoundingClientRect();
      if(bottom > maxBottom) maxBottom = bottom;

    });

    const wheelMarginBottom = maxBottom - dimensions.bottom + 70;

    if(wheelMarginBottom < 0) return;

    this.setState({ radius, wheelMarginBottom });

  }

  computePositions() {

    const { currentTechnologies } = this.state;
    const { length } = technologies[currentTechnologies];
    const positions = [];

    for(let i = 0; i < length; i++) {

      const angle = Math.PI * (2 * i / length + 1 / 2);
      const position = [Math.cos(angle), Math.sin(angle)];
      positions.push(position);

    }

    this.setState({ positions });

  }

  setCurrentTechnology(currentTechnology) {

    this.setState({ currentTechnology });

  }

  setTechnologyArrow(event) {

    let { currentTechnologies, currentTechnology } = this.state;
    let isNext = event.currentTarget.classList.contains('next-technology');
    let { length } = technologies[currentTechnologies];

    if(isNext) {
      currentTechnology = currentTechnology === 0 ? length - 1 : currentTechnology - 1;

    } else {
      currentTechnology = currentTechnology === length - 1 ? 0 : currentTechnology + 1;

    }

    this.setState({ currentTechnology });

  }

  setCurrentTechnologies(event) {

    const currentTechnologies = event.currentTarget.innerText.toLowerCase();
    this.setState({
      currentTechnology: 2,
      positions: [],
      currentTechnologies,
      shouldSpin: true
    })

  }

  render() {

    const { offsetY, currentPage } = this.props;

    const { positions, radius, currentTechnology, currentTechnologies, wheelMarginBottom } = this.state;
    const currentTechnologyObj = technologies[currentTechnologies][currentTechnology];

    return (
      <div id="technologies" className={currentPage === 3 ? 'portfolio-pages active-portfolio-page' : 'portfolio-pages'} style={{
        paddingTop: offsetY
      }}>
        <h2 id="technologies-header">Technologies</h2>
        <ul id="technologies-group-selector">
          {Object.keys(technologies).map((technologyGroup, i) => (
            <li className={currentTechnologies === technologyGroup ? "current-technology-group technology-group" : 'technology-group'} key={`techno-g-${i}`} onClick={this.setCurrentTechnologies}>{technologyGroup}</li>
          ))}
        </ul>
        <Wheel
          positions={positions}
          radius={radius}
          currentTechnology={currentTechnology}
          currentTechnologies={currentTechnologies}
          setCurrentTechnology={this.setCurrentTechnology}
          wheelMarginBottom={wheelMarginBottom}
        />
        <div id="current-technology-name-container">
          <img className="technology-arrow" src="./icons/left-arrowhead.png" alt="A leftward facing arrow head." onClick={this.setTechnologyArrow}/>
          <h3 id="current-technology-name">{currentTechnologyObj?.name}</h3>
          <img className="next-technology technology-arrow" src="./icons/left-arrowhead.png" alt="A rightward facing arrow head." onClick={this.setTechnologyArrow}/>
        </div>
        <p id="current-technology-description">{currentTechnologyObj?.description}</p>
      </div>
    );

  }

}
