import './Pages.css';

const projects = {
  'nutritrackr': {
    gallery: [
      {
        imgSrc: './photos/nutritrackr-home.png',
        hasVid: false,
        vidSrc: null,
        alt: 'NutriTrackr landing page.'
      },
      {
        imgSrc: './photos/nutritrackr-recipes.png',
        hasVid: true,
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/nutritrackr-recipes-demo.mp4',
        alt: 'NutriTrackr recipes page.'
      },
      {
        imgSrc: './photos/nutritrackr-dashboard.png',
        hasVid: true,
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/nutritrackr-dashboard-demo.mp4',
        alt: 'NutriTrackr dashboard page.'
      },
      {
        imgSrc: './photos/nutritrackr-account-home.png',
        hasVid: false,
        vidSrc: null,
        alt: 'NutriTrackr account home page.'
      },
      {
        imgSrc: './photos/nutritrackr-contact.png',
        hasVid: false,
        vidSrc: null,
        alt: 'NutriTrackr contact page.'
      },
      {
        imgSrc: './photos/nutritrackr-likes.png',
        hasVid: true,
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/nutritrackr-likes-demo.mp4',
        alt: 'NutriTrackr likes page.'
      },
      {
        imgSrc: './photos/nutritrackr-collections.png',
        hasVid: false,
        vidSrc: null,
        alt: 'NutriTrackr collections page.'
      }
    ],
    abstract: 'NutriTrackr aims at limiting many of the tedious tasks that come with nutritional tracking. On NutriTrackr, users are able to search for recipes and immediately see whether or not it is compliant with their dietary standards. If a user has created an account, they may save a recipe by either liking it or adding it to one of their collections. Additionally, users will eventually be able to extract nutriition data and inject them directly into thier nutritional logs. Currently the dashboard interface displays randomly generated values for a given nutrient. This is because the nutritional tracking page, where users will eventually be able to log their nutriitional intakes, is still being developed.',
    technical: 'Just like Global Scope, NutriTrackr was built using a MERN (MongoDB, Express, React, and Node) stack. After struggling with localized state on my first project, I used Redux to centralize state and noticed with larger applications it durastically simplifies the sharing of state between components -- at any level in the application hiearchy. Code maintainablity became a huge priority with NutriTrackr: the file structuring, naming conventions, and code splitting were all refined. From a developer\'s standpoint, this increased productivity and the overall quality of my code; if changes needed to be made to any portion of my app, the process of targeting the file and performing the necessary updates was streamlined.',
    href: 'http://www.nutritrackr.com'
  },
  'global-scope': {
    gallery: [
      {
        imgSrc: './photos/globalscope-home.png',
        vidSrc: null,
        hasVid: false,
        alt: 'Home page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-about.png',
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/globalscope-about.mp4',
        hasVid: true,
        alt: 'About page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-search.png',
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/globalscope-search.mp4',
        hasVid: true,
        alt: 'Search page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-account.png',
        vidSrc: null,
        hasVid: false,
        alt: 'Account page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-places.png',
        vidSrc: 'https://video-host-source71e471f1-1b7cp925f2oou.s3-us-west-1.amazonaws.com/assets01/globalscope-likes.mp4',
        hasVid: true,
        alt: 'The places page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-collections.png',
        vidSrc: null,
        hasVid: false,
        alt: 'The collections page for Global Scope'
      },
      {
        imgSrc: './photos/globalscope-contact.png',
        vidSrc: null,
        hasVid: false,
        alt: 'The contact page for Global Scope'
      }
    ],
    abstract: 'Global Scope brings the world around you in to your immediate perception. No matter where you are in the world, you can search restaurants, amusement parks, museums, and pretty much anything else you can think of. In creating Global Scope, I had no idea where I wanted to take things. Initially, I just wanted users to be able to search for places and be displayed results based on their search parameters. I then decided to aim for a little more and enable users to make accounts, save prospective locations, and view them later if desired. This added to the experience, that is Global Scope, by allowing users to look back at locations that they may have otherwise forgotten about.',
    technical: 'Global Scope was my first main project and was built using a MERN (MongoDB, Express, React, and Node) stack. Global Scope is made possible through the Google Places API, which provides all of the places, and metadata on those places, that Global Scope displays. One of the biggest challenges I faced, while building Global Scope, was figuring out the authentication and authorization flow for the first time. In the end I opted for Paspport, which abstracted many of the details involved in authentication and authorization (like session management) away. In the near future, I intend on improving on the organization of the codebase and the overall UI/UX for Global Scope.',
    href: 'http://www.gs-globalscope.com'
  }
}

export function Introduction(props) {

  return(
    <div id="projects-introduction" className="project slide-in">
      <h2>Now that you know a little about me, let me show you what I've built.</h2>
      <p>The images below contain views of my two most notable projects. These works relay some of the many methods that I believe one may enhance their life. With the former, NutriTrackr, being nutrition focused and the latter, Global Scope, being travel oriented. They both were constructed using a MERN (MongoDB, Express, React, and Node) stack and are hosted on seperate AWS EC2 (Elastic Compute Cloud) instances. If you would like to contribute to either of these projects, please do not hesitate to contact me. If you wish to view these projects, click one of the images below or refer to the navigation section directly above.</p>
      <div id="projects-intro-imgs">
        <div className="projects-intro-img-container">
          <img src="./photos/nutritrackr-home.png" alt="Landing page for NutriTrackr"/>
          <div className="projects-intro-img-overlay">
            <h3>NutriTrackr</h3>
          </div>
        </div>
        <div className="projects-intro-img-container">
          <img src="./photos/globalscope-home.png" alt="Landing page for Global Scope"/>
          <div className="projects-intro-img-overlay">
            <h3>Global Scope</h3>
          </div>
        </div>
      </div>
    </div>
  );

}


 export function Project(props) {

  const { projectName, updateCurrentImg, currentGalleryImg, mediaHeight, mediaWidth, galleryMargin, projectDescription, setDescription } = props;
  const project = projects[projectName]
  const { gallery } = project;
  const isHorizontal = window.innerWidth <= 1020;

  return (
    <div className="portfolio-project" key={projectName}>
      <div className="current-gallery-img-container slide-in" style={{
        height: isHorizontal ? '' : `${mediaHeight}px`
      }}>
        {gallery[currentGalleryImg].hasVid ?
          <video autoPlay loop key={gallery[currentGalleryImg].vidSrc}>
            <source src={gallery[currentGalleryImg].vidSrc} type="video/mp4"/>
          </video>
        :
        <img src={gallery[currentGalleryImg].imgSrc} alt={gallery[currentGalleryImg].alt}/>
        }
      </div>
      <div className="project-gallery-imgs slide-in" style={{
        height: isHorizontal ? '' : `${mediaHeight}px`,
        maxHeight: isHorizontal ? '' : `${mediaHeight}px`
      }}>
        {gallery.map((item, i) => (
          <img className={currentGalleryImg === i ? 'gallery-img current-gallery-img' : 'gallery-img'} key={`gallery-item-${i}`} src={item.imgSrc} alt={item.alt} onClick={e => updateCurrentImg(e, i)} style={{
            marginBottom: `${i < gallery.length - 1 && !isHorizontal ? galleryMargin : 0}px`,
            marginRight: `${i < gallery.length - 1 && isHorizontal ? galleryMargin : 0}px`
          }}/>
        ))}
      </div>
      <div className="project-description-container slide-in">
        <div className="toggle-description-container">
          <button className={projectDescription === 'abstract' ? 'current-project-description project-description-toggle' : 'project-description-toggle'} type='button' onClick={setDescription}>Abstract</button>
          <button className={projectDescription === 'technical' ? 'current-project-description project-description-toggle' : 'project-description-toggle'} type='button' onClick={setDescription}>Technical</button>
          <a className="project-source" href={project.href} target='_blank'>Visit</a>
        </div>
        <p key={projectDescription} className="project-description">{project[projectDescription]}</p>

      </div>
    </div>
  );

}
