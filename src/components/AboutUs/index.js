import ScrollToTop from "../ScrollToTop";
import our_mission from "../../assets/images/our-mission.png";
import consulting from "../../assets/images/consulting1.jpeg";

function AboutUs() {
    return (
        <div className="main-content-wrapper">
            <section className="breadcrumb-section about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-5">
                            <div className="breadcrumb-wrapper">
                                <h2>About</h2>
                                <nav>
                                    <ul>
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active"><a href="#">About</a></li>
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
                                <h2 className="main-heading m-0">company overview</h2>
                                <hr />
                                <p>
                                    Think Tank Viet Know Ltd. Co. is a private company with two main fields of service activities: consulting and technology transfer.
                                    <br />
                                    <br />
                                    Our customers include governments, academia, institutions and enterprises.
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

export default AboutUs;