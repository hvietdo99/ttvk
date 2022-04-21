import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

function MainHeader() {
    return (
        <div className="penta__header header-menu">
            <div className="container-fluid  d-none d-lg-block">
                <div className="row">
                    <div className="col-lg-3 col-8 col-md-5">
                        <div className="header-logo">
                            <Link to="/"> 
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-9 d-none d-lg-block">
                        <div className="main-menu">
                            <nav className="main-menu-nav">
                                <ul>
                                    <li className="sub-menu-parent"> <Link to="/">home</Link> </li>
                                    <li className="sub-menu-parent"> <Link to="/about">about</Link> </li>
                                    <li className="sub-menu-parent" > <Link to="/services">services</Link> </li>
                                    <li className="sub-menu-parent" > <Link to="/contact">contact</Link> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;
