import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './HeaderPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { logOut } from "../../services/apiService"

const HeaderPage = (props) => {
    const navigate = useNavigate();
    const { t } = props
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn');
    });

    const handleLanguageClick = (language) => {
        props.onLanguageChange(language); // Gọi hàm từ cha để thay đổi ngôn ngữ
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn'));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogin = () => {
        navigate('/login');
    }

    const handleClickLinkHome = () => {
        navigate('/');
    };

    const handleLinkAccount = () => {
        navigate('/Overview');
    };

    const handleLogOut = async () => {
        try {
            await logOut()
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userId');
            setIsLoggedIn(false);
            toast.success("Log Out user success!");
        } catch (error) {
            navigate('/login');
            toast.error("Log Out user fail!");
        }
    }

    return (
        <div className="child-header-page">
            <div className="col-7 image-logo" onClick={handleClickLinkHome}>
                <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945101/image/qodqhx8qkw76shmhp5oi.png" alt="logo" />
            </div>
            <div className="list-child-header-page">
                <div className="tab-child">
                    <i className="fa-solid fa-headset"></i>&nbsp;&nbsp;
                    <div> {t('Support')}</div>
                </div>
                <div className="tab-child">
                    <i className="fa-brands fa-facebook-messenger"></i>&nbsp;&nbsp;
                    <div>{t('Messenger')}</div>
                </div>
                <div className="tab-child" >
                    <div className="content-tab-child">
                        <div className="language-tab-child2" >
                            <i className="fa-solid fa-language"></i> &nbsp;&nbsp;
                            <div>Language</div>
                            <div className="list-change-language">
                                <div className="language-tab-child" onClick={() => handleLanguageClick('en')} >
                                    <img className="image-language-tab-child" src="https://res.cloudinary.com/driamsklu/image/upload/v1730945099/image/lv10wxxt1xlipknzbvmt.png" alt="iconen"></img>&nbsp;&nbsp;
                                    <div>English</div>
                                </div>
                                <div className="language-tab-child" onClick={() => handleLanguageClick('vn')} >
                                    <img className="image-language-tab-child" src="https://res.cloudinary.com/driamsklu/image/upload/v1730945101/image/daeyqy7od2wrezbpajse.png" alt="iconvn"></img>&nbsp;&nbsp;
                                    <div>VietNamese</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-child" onClick={handleLinkAccount}>
                    <i className="fa-duotone fa-solid fa-user"></i>&nbsp;&nbsp;
                    <div>{t('Account')}</div>
                </div>
                <div className="tab-child" onClick={isLoggedIn ? handleLogOut : handleLogin}>
                    <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;
                    <div >{isLoggedIn ? t('Log Out') : t('Login')}</div>
                </div>
            </div>
        </div >
    );

}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HeaderPage));
