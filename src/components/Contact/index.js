import "./style.css";
import ScrollToTop from "../ScrollToTop";

function Contact() {
    return (
        <div className="main-content-wrapper">
            <section className="breadcrumb-section about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-5">
                            <div className="breadcrumb-wrapper">
                                <h2>Contact Us</h2>
                                <nav>
                                    <ul>
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active"><a href="#">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section 
                className="section"
                style={{paddingBottom: "0"}}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-7">
                            <div className="main-heading-block">
                                <h2 className="main-heading">find your solution</h2> </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-4 text-center item">
                            <div className="contact-block-wrapper"> <span className="icon-box"><i className="material-icons">telegram</i></span>
                                <h2 className="contact-box-heading">Mr Ha Duc Bang, <br/> CEO</h2>
                                <p className="contact-box-info"><a href="#">Email: haducbang@vietthinktank.vn</a></p>
                                <p className="contact-box-info"><a href="#">Mobile phone: +84 938797997</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 text-center item">
                            <div className="contact-block-wrapper"> <span className="icon-box"><i className="material-icons">telegram</i></span>
                                <h2 className="contact-box-heading">Mr Ha Hoang Hop, Ph.D., Chairman</h2>
                                <p className="contact-box-info"><a href="#">Email: hahoanghop@vietthinktank.com</a></p>
                                <p className="contact-box-info"><a href="#">Mobile phone: +84 913214041</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-12">
                            <div className="map-wrapper">
                                <div className="mapouter">
                                    <h2>&nbsp;</h2>
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe 
                                                className="gmap_iframe"
                                                width="100%"
                                                frameborder="0"
                                                scrolling="no"
                                                marginheight="0"
                                                marginwidth="0"
                                                src="https://maps.google.com/maps?width=600&amp;height=350&amp;hl=en&amp;q=Asia&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                            />
                                            <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section 
                className="section"
                style={{paddingBottom: "0", paddingTop: "72px"}}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="contact-form-wrapper">
                                <h2 className="main-heading">we love to hear</h2>
                                <div className="form-inner">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 col-md-4">
                                                <div className="contact-form-group">
                                                    <label className="form-label">Name</label>
                                                    <input className="form-input" type="text" placeholder="Your Name" /> </div>
                                            </div>
                                            <div className="col-12 col-lg-4 col-md-4">
                                                <div className="contact-form-group">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-input" type="text" placeholder="Your Email" /> </div>
                                            </div>
                                            <div className="col-12 col-lg-4 col-md-4">
                                                <div className="contact-form-group">
                                                    <label className="form-label">Subject</label>
                                                    <input className="form-input" type="text" placeholder="Your Subject" /> </div>
                                            </div>
                                            <div className="col-12 col-lg-12 col-md-12">
                                                <div className="contact-form-group">
                                                    <label className="form-label">Message</label>
                                                    <textarea className="form-input-textarea" rows="6" placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-12 col-md-12">
                                                <div className="contact-form-group float-right">
                                                    <button type="submit" className="learn-more-btn float-right">send message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default Contact;