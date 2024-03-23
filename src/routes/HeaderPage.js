import React from "react";
import { connect } from 'react-redux';
import './HeaderPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo_booking_hotel.png';



class HeaderPage extends React.Component {


    render() {
        return (
            <div className="child-header-page">
                <div className="col-4 image-logo"><img src={logo} alt="logo" /></div>
                <div className="col-8 list-child-header-page" >
                    <div className="col-2 tab-child">
                        <i className="fa-regular fa-heart"></i>&nbsp;&nbsp;
                        <div>Favoris</div>
                    </div>
                    <div className="col-2 tab-child">
                        <i className="fa-regular fa-rectangle-list"></i>&nbsp;&nbsp;
                        <div>List your <br /> properly</div>
                    </div>
                    <div className="col-2 tab-child">
                        <i className="fa-solid fa-headset"></i>&nbsp;&nbsp;
                        <div>Support</div>
                    </div>
                    <div className="col-2 tab-child">
                        <i className="fa-brands fa-facebook-messenger"></i>&nbsp;&nbsp;
                        <div>Messenger</div>
                    </div>
                    <div className="col-2 tab-child">
                        <i className="fa-solid fa-language"></i>&nbsp;&nbsp;
                        <div> En-Vi</div>
                    </div>
                    <div className="col-2 tab-child">
                        <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;
                        <div>Login</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);