import React from "react";
import { connect } from 'react-redux';
import './BottomPage.scss';
import logo from '../assets/images/booking-hotel-high-resolution-logo-white-transparent.png';



class BottomPage extends React.Component {


    render() {
        return (
            <div className="bottom-page">
                <div className="child-bottom-page">
                    <div className="logo-bottom">
                        <div className="horizontal-line"></div>
                        <img src={logo} alt='logo' />
                        <div className="horizontal-line"></div>
                    </div>
                    <div className="tab-bottom-page">
                        <div className="column-tab-bottom">
                            <div className="tilte-tab-bottom">Company</div>
                            <li>Accor Group</li>
                            <li>Management & franchises</li>
                            <li>Careers</li>
                            <li>Sustainable development</li>
                            <li>Affiliate programme</li>
                        </div>
                        <div className="column-tab-bottom">
                            <div className="tilte-tab-bottom">Professional Solutions</div>
                            <li>Business travel</li>
                            <li>Meetings & events</li>
                            <li>Travel professionals</li>
                        </div>
                        <div className="column-tab-bottom">
                            <div className="tilte-tab-bottom">Navigation</div>
                            <li>Web accessibility</li>
                            <li>Sitemap</li>
                            <li>All our services</li>
                            <li>Two languages</li>
                        </div>
                        <div className="column-tab-bottom">
                            <div className="tilte-tab-bottom">Need help?</div>
                            <li>Manage booking</li>
                            <li>Support</li>
                        </div>
                    </div>
                    <div className="icon-connect">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-regular fa-envelope"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>


        )
    }
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomPage);