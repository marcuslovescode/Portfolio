import React, { Component } from 'react';
import './Contact.css';

const platforms = [
  {
    name: 'Ymail',
    img: './icons/yahoo.jpeg',
    username: 'marcusmb47@ymail.com',
    href: 'mailto:marcusmb47@ymail.com',
    backgroundColor: 'rgb(95, 1, 211)',
    color: 'white'
  },
  {
    name: 'Gmail',
    img: './icons/gmail.png',
    username: 'marmb.tech@gmail.com',
    href: 'mailto:marmb.tech@gmail.com',
    backgroundColor: 'rgb(245, 245, 245)',
    color: 'black'
  },
  {
    name: 'GitHub',
    img: './icons/github.png',
    username: 'marcuslovescode',
    href: 'https://github.com/marcuslovescode',
    backgroundColor: 'rgb(13, 17, 22)',
    color: 'white'
  },
  {
    name: 'LinkedIn',
    img: './icons/linkedin.png',
    username: 'Marcus Morroc-Bey',
    href: 'https://www.linkedin.com/in/marcus-morroc-bey-92ab47195/',
    backgroundColor: 'rgb(12, 101, 194)',
    color: 'white'
  },
  {
    name: 'Indeed',
    img: './icons/indeed.png',
    username: 'Marcus Morroc-Bey',
    href: 'https://my.indeed.com/p/marcusm-1pvvkd3',
    backgroundColor: 'rgb(33, 101, 243)',
    color: 'white'
  },
  {
    name: 'YouTube',
    img: './icons/youtube.png',
    username: 'Marcus Morroc-Bey',
    href: 'https://www.youtube.com/channel/UCwnNVm73CMLwTJG6Sbf-4sQ',
    backgroundColor: 'rgb(254, 0, 0)',
    color: 'white'
  },
  {
    name: 'Stack Overflow',
    img: './icons/stack-overflow.png',
    username: 'MarFromMars',
    href: 'https://stackoverflow.com/users/12381390/marfrommars?tab=profile',
    backgroundColor: 'rgb(244, 128, 35)',
    color: 'white'
  },
  {
    name: 'CodePen',
    img: './icons/codepen.png',
    username: 'marcuslovestech',
    backgroundColor: 'rgb(19, 20, 23)',
    href: 'https://codepen.io/marcuslovestech',
    color: 'white'
  }
]

export default class Contact extends Component {

  constructor(props) {

    super(props);

    this.state = {
      cardHeight: 0
    };

    this.setCardDimensions = this.setCardDimensions.bind(this);

  }

  componentDidMount() {

    window.addEventListener('resize', this.setCardDimensions);
    this.setCardDimensions();

  }

  // Sets the dimensions of the cards height when screen is resized and on initial mount.
  setCardDimensions() {

    const contactCard = document.querySelector('.contact-card');
    const cardHeight = contactCard.getBoundingClientRect().width;
    this.setState({ cardHeight });

  }

  copyUsername(event) {

    const username = event.currentTarget.nextElementSibling;
    const input = document.getElementById('copy');
    input.value = username.innerText;
    input.select();
    document.execCommand('copy');

    const successMsg = username.parentElement.parentElement.nextElementSibling.firstChild;
    successMsg.style.opacity = 1;
    successMsg.style.transform = 'translateY(0)';

    setTimeout(function() {

      successMsg.style.opacity = '';
      successMsg.style.transform = ''

    }, 1500)

  }

  clickLink(event) {

    event.currentTarget.nextElementSibling.click();

  }

  render() {

    const { offsetY, currentPage } = this.props;
    const { cardHeight } = this.state;

    return (
      <div id="contact" className={currentPage === 4 ? "portfolio-pages active-portfolio-page" : 'portfolio-pages'} style={{
        paddingTop: offsetY
      }}>
        <h2 id="contact-header">Let's keep in touch...</h2>
        <div id="phone-number-container">
          <a id="phone-number" href='tel:7024270786'><img src="./icons/phone.png" alt="Mobile phone"/></a>
          <h3>+1 (702) 427 - 0786</h3>
        </div>
        <div id="contact-cards-container" style={{
          gridAutoRows: `${cardHeight}px`
        }}>
          {platforms.map((platform, i) => (
            <div key={`contact-card-${i}`} className="contact-card" style={{
              backgroundColor: platform.backgroundColor,
              color: platform.color
            }}>
              <img className="contact-card-logo" src={platform.img} alt={`A logo for ${platform.name}`}/>
              <h3 className="contact-card-name">{platform.name}</h3>
              <div className="contact-card-overlay">
                <div className="contact-card-overlay-top" style={{
                  backgroundColor: platform.backgroundColor
                }}>
                  <img src={platform.img} className="contact-overlay-icon" alt={`A logo for ${platform.name}`}/>
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-username">
                    <img src="./icons/copy.png" alt="Two copies of paper." style={{
                      filter: platform.color === 'white' ? 'invert(1)' : 'invert(0)'
                    }} onClick={this.copyUsername}/>
                    <h3>{platform.username}</h3>
                  </div>
                  <div className="contact-card-link">
                    <img src="./icons/link.png" alt="A chain representing a link." style={{
                      filter: platform.color === 'white' ? 'invert(1)' : 'invert(0)'
                    }} onClick={this.clickLink}/>
                    <a href={platform.href} target="_blank"><h3>Visit</h3></a>
                  </div>
                </div>
                <div className="contact-card-overlay-bottom" style={{
                  backgroundColor: platform.backgroundColor
                }}>
                  <h3 className="message-copied">Successfully Copied!</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <input id="copy" type="text" value='' />
      </div>
    )

  }

}
