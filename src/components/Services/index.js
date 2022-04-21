import ScrollToTop from "../ScrollToTop";
import our_mission from "../../assets/images/our-mission.png";
import consulting from "../../assets/images/consulting1.jpeg";

function Services() {
    return (
        <div className="main-content-wrapper">
            <section className="breadcrumb-section about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-5">
                            <div className="breadcrumb-wrapper">
                                <h2>Services</h2>
                                <nav>
                                    <ul>
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active"><a href="#">Services</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row row-eq-height">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="company-overview-wrapper">
                                <h2 className="main-heading m-0">our services</h2>
                                <hr />
                                <p>
                                    In consulting, we give comprehensive services of think tank, policy analysis, control risks, and leadership development.
                                    <br/>
                                    <br/>
                                    In technology transfer, we deliver the transfer for aerospace, intelligent man – machine, broad-ranged dual use technologies.
                                    <br/>
                                    <br/>
                                    We hold business and consultancy relations with Saab AB (Sweden), Navayo Research Kft. (Hungary), Precision Technology Ltd. (Singapore) and many other international companies
                                </p>
                                <div className="company-overview-features">
                                    <div className="overview-feature-item"> <img src={our_mission} alt="img" />
                                        <h2 className="sub-heading-medium-cap">We consult with dedication</h2> </div>
                                    <div className="overview-feature-item"> <img src={our_mission} alt="img" />
                                        <h2 className="sub-heading-medium-cap">save unusual time and money</h2> </div>
                                    <div className="overview-feature-item"> <img src={our_mission} alt="img" />
                                        <h2 className="sub-heading-medium-cap">we build strong foundation</h2> </div>
                                    <div className="overview-feature-item"> <img src={our_mission} alt="img" />
                                        <h2 className="sub-heading-medium-cap">we have best technology</h2> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="company-overview-wrapper">
                                <div className="overview-image-bottom item"> <img src={consulting} alt="img" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="about-client-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 item">
                            <div className="about-client-wrapper">
                                <h2 className="about-client-heading">We Are Always Dedicated And Devoted To Clients.</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="about-client-counter-wrapper">
                                <div className="about-client-counter-item item">
                                    <h2>100+</h2>
                                    <p>companies</p>
                                </div>
                                <div className="about-client-counter-item item">
                                    <h2>100+</h2>
                                    <p>Partnerships</p>
                                </div>
                                <div className="about-client-counter-item item">
                                    <h2>100+</h2>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </div>
    )
}

export default Services;