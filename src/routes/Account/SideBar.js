import React from "react";
import "./SideBar.scss";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();

    const handleClickOverViewUser = () => {
        navigate('/Overview');
    }

    const handleClickCreateProduct = () => {
        navigate('/create-product');
    }

    const handleClickEditProduct = () => {
        navigate('/edit-product');
    }

    return (
        <div className="account-sidebar">
            <div className="account-title-sidebar">
                <i className="fa-duotone fa-solid fa-user"></i>
                Hi Tndev
            </div>
            <div className="account-list-option-sibar" >
                <div className="account-child-list-option-sibar" onClick={handleClickOverViewUser}>
                    <i className="fa-thin fa-house"></i>
                    <div>Overview</div>
                </div>
                <div className="account-child-list-option-sibar" onClick={handleClickCreateProduct}>
                    <i className="fa-light fa-circle-plus"></i>
                    <div>Create Product</div>
                </div>
                <div className="account-child-list-option-sibar" onClick={handleClickEditProduct}>
                    <i className="fa-sharp-duotone fa-solid fa-pen-to-square"></i>
                    <div>Edit Product</div>
                </div>
                <div className="account-child-list-option-sibar">
                    <i className="fa-light fa-gear"></i>
                    <div> Setting</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
