import './style.css';
import logo from '../../assets/images/logo-white.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer 
            className="footer"
            style={{padding: "35px"}}
        >
            <div className="footer-left col-md-6 col-sm-6">
                <p className="about">
                <span>About Think Tank Viet Know</span> 
                Think Tank Viet Know Ltd. Co. is a private company with two main fields of service activities: Consulting and Technology Transfer.
                </p>
            </div>
            <div className="footer-right col-md-6 col-sm-6">
                <Link to="/"> 
                    <img 
                        src={logo} 
                        alt="logo" 
                        style={{width: "180px", height: "55px"}} 
                    />
                </Link>
                <p className="menu">
                <Link to="/">Home</Link> |{' '}
                <Link to="/about">About</Link> |{' '}
                <Link to="/services">Services</Link> |{' '} 
                <Link to="/contact">Contact</Link>
                </p>
                <p className="name"> TTVK &copy; 2017</p>
            </div>
        </footer>
    )
}

export default Footer;