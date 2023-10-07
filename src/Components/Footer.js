import './Footer.css';
// import {Link} from "react-router-dom"

function getCurrentYear(){
    const currentDate = new Date();
    return currentDate.getFullYear();

}

const socials = [
  {
    icon: './github-sign.png',
    url: 'https://github.com/Ravenslayer998/calculator',
  }
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