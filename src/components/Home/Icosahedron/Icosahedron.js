import React, { Component } from 'react';
import './Icosahedron.css';
import * as Three from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


export default class Icosahedron extends Component {

  constructor(props) {

    super(props);

    this.state = {
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      objects: {},
      length: 0
    }

    this.canvas = React.createRef();

    this.configDisplay = this.configDisplay.bind(this);
    this.renderIcosahedron = this.renderIcosahedron.bind(this);
    this.collapse = this.collapse.bind(this);

  }

  componentDidMount() {

    this.initScene();

  }

  // Initializes the objects that render the icosahedron and adds them to state for local accessiblity.
  initScene() {

    const canvas = this.canvas.current;
    const renderer = new Three.WebGLRenderer({ canvas });
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      75, // Field of view
      1, // Aspect ratio
      0.1, // Near Plane
      50 // Far Plane
    );

    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, 0);

    scene.background =  new Three.Color({ color: 'white'});

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    renderer.render(scene, camera);

    this.setState({
      renderer,
      scene,
      camera,
      controls
    }, function() {

      requestAnimationFrame(this.configDisplay);
      this.renderIcosahedron();

    });

  }

  configDisplay() {

    const { scene, camera, renderer } = this.state;
    let { offsetY } = this.props;
    offsetY = Number(offsetY.replace('px', ''));
    const canvas = this.canvas.current;
    const home = canvas.parentNode;
    const homeDimensions = home.getBoundingClientRect();
    const definition = canvas.nextElementSibling;
    const intro = canvas.previousElementSibling;
    let clientHeight = homeDimensions.height - (window.innerWidth <= 1200 ? 150 : 30) - offsetY - intro.getBoundingClientRect().height - definition.getBoundingClientRect().height;
    const clientWidth = Math.min(clientHeight, homeDimensions.width - 70);
    clientHeight = clientWidth;
    const pxRatio = window.devicePixelRatio;
    const height = clientHeight * pxRatio;
    const width = clientWidth * pxRatio;

    if(canvas.height !== height || canvas.width !== width) {

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

    }

    this.setState({ length: clientWidth });

    renderer.render(scene, camera);
    requestAnimationFrame(this.configDisplay);

  }

  renderIcosahedron() {

    const { scene } = this.state;
    const icos = new Three.IcosahedronGeometry(1, 1);
    const positions = Array.from(icos.attributes.position.array);
    const lines = this.computeLines(positions);
    const icosahedron = new Three.Object3D();

    let material = new Three.LineBasicMaterial({ color: 0x000000 })
    const midpoints = [];
    const edges = [];
    // Renders the lines in 3D space.
    for(let line of lines) {

      // This is used as the axis of translation.
      let lineMp = line.getCenter(new Three.Vector3(0, 0, 0));
      let lineGeo = new Three.BufferGeometry();
      lineGeo.setFromPoints([ line.start, line.end ]);

      const edge = new Three.Line(lineGeo, material);
      edge.translateOnAxis(lineMp, 8);
      edges.push(edge);
      midpoints.push(lineMp);

      icosahedron.add(edge);

    }

    scene.add(icosahedron);
    requestAnimationFrame(t => this.rotateIcosahedron(icosahedron));
    requestAnimationFrame(t => this.collapse(t, edges, midpoints, t));

    this.setState(state => {

      const { objects } = state;
      objects.icosahedron = icosahedron;
      return { objects };

    })


  }

  // Computes the lines that will later be used as edges on the faces of the icosahedron.
  computeLines(positions) {

    let i = 0;
    const lines = [];

    while(i < positions.length) {

      let verticies = [];
      // The verticies that make up a single face on an icosahedron.
      let currentPositions = positions.slice(i, i + 9);
      let j = 0;

      while(j < currentPositions.length) {

        verticies.push(new Three.Vector3(currentPositions[j], currentPositions[j + 1], currentPositions[j + 2]));
        j += 3;

      }

      // Compute edges from the verticies.
      for(let v in verticies) {

        v = Number(v);
        let start = v == 0 ? verticies[2] : verticies[v - 1];
        let end = verticies[v];
        lines.push(new Three.Line3(start, end));

      }

      i += 9;

    }

    return lines;

  }

  // This handles the initial animation where all lines will collapse back to their original positions.
  collapse(t, edges, midpoints, initTime, initDistance) {

    const elapsed = t - initTime;
    const totalTime = 2000;

    if(!initDistance) {
      let vector = edges[0].matrix.elements.slice(12, 15);
      initDistance = (vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2) ** 0.5;
    }

    let m = -initDistance / totalTime;
    let b = initDistance;

    for(let i in edges) {

      let edge = edges[i];
      let midpoint = midpoints[i];
      let vector = edge.matrix.elements.slice(12, 15);
      let currentDistance = (vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2) ** 0.5;

      if(elapsed > totalTime) {
        edge.translateOnAxis(midpoint, -currentDistance);

      } else {
        edge.translateOnAxis(midpoint, m * elapsed + b - currentDistance);

      }

    }

    if(elapsed - totalTime < 300) {
      requestAnimationFrame(t2 => this.collapse(t2, edges, midpoints, initTime, initDistance));
    }

  }

  rotateIcosahedron(icosahedron) {

    icosahedron.rotateY(0.01);

    requestAnimationFrame(t => this.rotateIcosahedron(icosahedron));

  }

  render() {

    const { length } = this.state;

    return(
      <canvas ref={this.canvas} id="icosahedron" className="slide-in" style={{
        width: `${length}px`,
        height: `${length}px`
      }}/>
    );

  }


}
