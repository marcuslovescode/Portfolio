import React, { Component } from 'react';
import './Projects.css';
import { Introduction, Project } from './Pages/Pages';


export default class Projects extends Component {

  constructor(props) {

    super(props);

    this.state = {
      currentPage: 0,
      mediaChanged: false,
      currentGalleryImg: 0,
      galleryMargin: 0,
      mediaHeight: 0,
      mediaWidth: 0,
      projectDescription: 'abstract'
    }

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.updateCurrentImg = this.updateCurrentImg.bind(this);
    this.setMediaDimensions = this.setMediaDimensions.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setMediaDimensionsHorizontal = this.setMediaDimensionsHorizontal.bind(this);

  }

  componentDidMount() {

    window.addEventListener('resize', this.setMediaDimensions);

  }

  componentDidUpdate() {

    const { mediaChanged } = this.state;

    if(mediaChanged) {
      window.innerWidth > 1020 ? this.setMediaDimensions() : this.setMediaDimensionsHorizontal();
    }

  }

  setCurrentPage(currentPage) {

    this.setState({
      currentPage,
      currentGalleryImg: 0,
      mediaChanged: currentPage > 0
    });

  }

  renderCurrentPage() {

    const { currentPage, currentGalleryImg, mediaHeight, mediaWidth, galleryMargin,
    projectDescription } = this.state;

    if(currentPage === 0) {
      return <Introduction />

    } else {
      return(
        <Project
          updateCurrentImg={this.updateCurrentImg}
          currentGalleryImg={currentGalleryImg}
          projectName={currentPage === 1 ? 'nutritrackr' : 'global-scope'}
          mediaHeight={mediaHeight}
          mediaWidth={mediaWidth}
          galleryMargin={galleryMargin}
          projectDescription={projectDescription}
          setDescription={this.setDescription}
        />
      );

    }

  }

  setMediaDimensions(event) {

    if(this.state.currentPage === 0) return;

    if(window.innerWidth <= 1020) {

      window.removeEventListener('resize', this.setMediaDimensions);
      window.addEventListener('resize', this.setMediaDimensionsHorizontal)
      this.setMediaDimensionsHorizontal();
      return;

    }

    // Intitialize elements involved in deriving the height.
    const portfolioProj = document.querySelector('.portfolio-project');
    const gallery = portfolioProj.querySelector('.project-gallery-imgs');
    let media = gallery.nextElementSibling.firstChild;
    const description = portfolioProj.querySelector('.project-description-container');
    const isVideo = media instanceof HTMLVideoElement;

    if(isVideo && !media.videoWidth) {
      media.addEventListener('loadedmetadata', this.setMediaDimensions);
      return;
    }

    let { width, top } = portfolioProj.getBoundingClientRect();
    width -= 70; // Subtract horizontal padding
    const height = window.innerHeight - top - 60;
    const descriptionHeight = description.getBoundingClientRect().height;
    const intrinsWidth = isVideo ? media.videoWidth : media.naturalWidth;
    const intrinsHeight = isVideo ? media.videoHeight : media.naturalHeight;
    const aspect = intrinsWidth / intrinsHeight;
    let mediaHeight = height - descriptionHeight - 30; // Constant comes from grid-row-gap + extra room in case summary container grows in height.
    let mediaWidth = aspect * mediaHeight;
    const galWidth = gallery.getBoundingClientRect().width;

    if(mediaWidth > width - galWidth - 50) {
      mediaWidth = width - galWidth - 50;
      mediaHeight = mediaWidth * aspect ** -1;
    }



    const galleryMargin = this.getGalleryMargin(gallery, mediaHeight);

    this.setState({
      galleryMargin,
      mediaHeight,
      mediaWidth,
      mediaChanged: false
    });

  }

  getGalleryMargin(gallery, mediaHeight) {

    const { height } = gallery.firstChild.getBoundingClientRect();
    let itemsInView = Math.floor(mediaHeight / height);
    let margin = (mediaHeight - itemsInView * height) / (itemsInView - 1);

    while(margin < 20) {
      itemsInView -= 1;
      margin = (mediaHeight - itemsInView * height) / (itemsInView - 1);

    }

    return margin;

  }

  setMediaDimensionsHorizontal() {

    if(window.innerWidth > 1020) {

      window.removeEventListener('resize', this.setMediaDimensionsHorizontal);
      window.addEventListener('resize', this.setMediaDimensions)
      this.setMediaDimensions();
      return;

    }

    const gallery = document.querySelector('.project-gallery-imgs')
    const galleryImg = gallery.firstChild;
    const galleryWidth = gallery.getBoundingClientRect().width;
    const { width } = galleryImg.getBoundingClientRect();

    let itemsInView = Math.floor(galleryWidth / width);

    let galleryMargin = (galleryWidth - itemsInView * width) / (itemsInView - 1);

    while(galleryMargin < 20) {
      itemsInView -=1;
      galleryMargin = (galleryWidth - itemsInView * width) / (itemsInView - 1);
    }

    this.setState({
       galleryMargin,
       mediaChanged: false
     })

  }

  updateCurrentImg(event, currentGalleryImg) {

    const selected = event.currentTarget;
    const gallery = selected.parentElement;
    const galleryDimensions = gallery.getBoundingClientRect();
    const { top, left } = selected.getBoundingClientRect();

    gallery.scrollTo({top: top - galleryDimensions.top + gallery.scrollTop, left: left - galleryDimensions.left + gallery.scrollLeft, behavior: 'smooth'})

    this.setState({
      currentGalleryImg,
      mediaChanged: true
    });

  }

  setDescription(event) {

    const projectDescription = event.currentTarget.innerText.toLowerCase();
    this.setState({ projectDescription });
  }

  render() {

    const { offsetY } = this.props;
    const { currentPage } = this.state;

    return (
      <div id="projects" className={this.props.currentPage === 2 ? 'portfolio-pages active-portfolio-page' : 'portfolio-pages'} style={{
        paddingTop: offsetY
      }}>
        <ul id="projects-pagintation">
          <li className={currentPage === 0 ? 'current-projects-page projects-page' : 'projects-page'} onClick={e => this.setCurrentPage(0)}>Introduction</li>
          <li className={currentPage === 1 ? 'current-projects-page projects-page' : 'projects-page'} onClick={e => this.setCurrentPage(1)}>NutriTrackr</li>
          <li className={currentPage === 2 ? 'current-projects-page projects-page' : 'projects-page'} onClick={e => this.setCurrentPage(2)}>Global Scope</li>
        </ul>
        {this.renderCurrentPage()}
      </div>
    );

  }

}
