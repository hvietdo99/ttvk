import { useEffect, memo } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import banner from "../../assets/images/home-banner.jpg";
import our_mission from "../../assets/images/our-mission.png";
import what_we_have from "../../assets/images/what-we-have.png";
import $ from 'jquery';

function Home() {
    useEffect(() => {
        var $slideHeading = $('.site-slider .slider-text h3');
        var $slidePara = $('.site-slider .slider-text p');
        var $slidebtn = $('.site-slider .slider-text .banner-btns');

        $slideHeading.addClass('animate-in-fast').on(
            'animationend', 
            function() {
                $slideHeading.removeClass('animate-in-fast').addClass('opacFull');
            }
        );

        $slidePara.addClass('animate-in-slow').on(
            'animationend', 
            function() {
                $slidePara.removeClass('animate-in-slow').addClass('opacFull');
            }
        );

        $slidebtn.addClass('animate-in-slow').on(
            'animationend', 
            function() {
                $slidebtn.removeClass('animate-in-slow').addClass('opacFull');
            }
        );
    })

    return (
        <div className="main-content-wrapper">
            {/* content section */}
            <section className="slider-section">
                <div className="slider-container">
                    <div className="site-slider">
                        <div class="slider-img"><img src={banner} alt="Sldie 1" /></div>
                        <div class="slider-text">
                            <h3>Think Tank Viet Know Ltd. Co.</h3>
                            <p><span>A consulting and technology transfer private firm</span></p>
                            <div class="banner-btns"> <Link to="/about" class="banner-learn-btn">learn more</Link> </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features start  */}
            <section 
                className="section"
                style={{padding: '0 0 0 0'}}
            >
                <div className="home-feature-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="home-feature-box-wrapper">
                                    <h3 className="sub-heading-small">core feature</h3>
                                    <h2 className="main-heading">Build the foundation for<br /> clients</h2>
                                    <div className="home-feature-list">
                                        <div className="home-feature-listitem">
                                            <div className="feature-list-icon"> <img src={our_mission} alt="img" /> </div>
                                            <div className="feature-list-info">
                                                <h2 className="sub-heading-medium">Consulting</h2>
                                                <p>We give comprehensive services of think tank, policy analysis, control risks, and leadership development.</p>
                                            </div>
                                        </div>
                                        <div className="home-feature-listitem">
                                            <div className="feature-list-icon"> <img src={what_we_have} alt="img" /> </div>
                                            <div className="feature-list-info">
                                                <h2 className="sub-heading-medium">Technology Transfer</h2>
                                                <p>We deliver the transfer for aerospace, intelligent man – machine, broad-ranged dual use technologies.</p>
                                            </div>
                                        </div>
                                    </div> <Link to="/contact" className="learn-more-btn m-35px-t">contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature end */}

            <ScrollToTop />
        </div>
    )
}

export default memo(Home);
