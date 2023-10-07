import './Footer.css';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faMedium,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";

function getCurrentYear(){
    const currentDate = new Date();
    return currentDate.getFullYear();

}

const socials = [
  {
    icon: './github-sign.png',
    url: 'https://github.com/Ravenslayer998/calculator',
  },

  // {
  //   icon: faLinkedin,
  //   url: 'https://www.linkedin.com/in/thooi998/',
  // }
]

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <p>Copyright @ {getCurrentYear()}</p>
        </div>
      
        <div className='Image'>
          <button>
          {socials.map(({icon, url})=>(
                <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <img src={icon} key={url} alt='github icon'></img>
                </a>
              ))}
          </button>
        </div>
      </footer>
    );
  };
  
  export default Footer;