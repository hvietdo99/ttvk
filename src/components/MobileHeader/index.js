import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function MobileHeader() {
    const collapse = useRef();

    const handleClick = () => {
        console.log([collapse.current])
        [collapse.current].click();
    }

    return (
       <div className="mobile-header-menu d-lg-none d-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <div className="mobile-menu-logo">
                            <Link to="/"> <img src={logo} alt="logo" /> </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mobile-menu-toggler" ref={collapse}>
                            <a href="#" data-toggle="collapse" data-target="#navbar-main"> <i className="fal fa-bars"></i> </a>
                        </div>
                    </div>
                    <div id="navbar-main" className="navbar-collapse mobile-collapse-menu collapse">
                        <div className="mobile-menu-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mobile-menu-header">
                                            <a href="#" data-toggle="collapse" data-target="#navbar-main"> <i className="material-icons">close</i> </a> <img src={logo} alt="img" /> </div>
                                    </div>
                                    <div className="col-12">
                                        <ul className="nav navbar-nav navbar-right mobile-menu">
                                            <li className="sub-menu-parent">
                                                <Link 
                                                    to="/"
                                                    data-toggle="collapse" 
                                                    data-target="#navbar-main"
                                                >home</Link> 
                                            </li>
                                            <li className="sub-menu-parent"> 
                                                <Link 
                                                    to="/about"
                                                    data-toggle="collapse" 
                                                    data-target="#navbar-main"
                                                >about</Link> 
                                            </li>
                                            <li className="sub-menu-parent"> 
                                                <Link 
                                                    to="/services"
                                                    data-toggle="collapse" 
                                                    data-target="#navbar-main"
                                                >Services</Link> 
                                            </li>
                                            <li className="sub-menu-parent" >
                                                <Link 
                                                    to="/contact"
                                                    data-toggle="collapse" 
                                                    data-target="#navbar-main"
                                                >contact</Link> 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile-menu-contact">
                                            <h2 className="mobile-menu-heading">Contact Info</h2>
                                            <ul>
                                                <li>
                                                    <a href="#"> <i className="material-icons">map</i> <span>Asia</span> </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className="material-icons">phone</i> <span>+84 938797997</span> </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className="material-icons">email</i> <span>haducbang@vietthinktank.vn</span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12"> <Link to="/contact" className="quote-btn button" onClick={handleClick}>CONTACT US</Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
