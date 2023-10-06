import './Footer.css';
import {Link} from "react-router-dom"

function getCurrentYear(){
    const currentDate = new Date();
    return currentDate.getFullYear();

}

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <p>Copyright @ {getCurrentYear()}</p>
        </div>
          
        <div className='Github Image'>
            <button>
            <a onClick='https://github.com/Ravenslayer998/calculator' rel='noopener' target = 'blank'></a>
            <img src='./github-sign.png'></img>
        </button>
        </div>
      </footer>
    );
  };
  
  export default Footer;