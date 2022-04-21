function TopHeader() {
    return (
        <div>
            <div className="top-header d-none d-lg-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 offset-xl-3 col-lg-6 col-md-7 col-12 col-sm-5">
                            <div className="header-top-left"> 
                                    <span className="d-m-none">
                                        <i className="far fa-envelope"></i>
                                        <a href="#">haducbang@vietthinktank.vn</a>
                                    </span>
                                    <span className="d-m-none">
                                        <i className="fa fa-phone"></i>
                                        <a href="#">+84 938797997</a>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;