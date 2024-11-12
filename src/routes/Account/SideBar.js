import React from "react";
import "./SideBar.scss";
const SideBar = () => {

    return (

        <div className="account-sidebar">
            <div className="account-title-sidebar">
                <i className="fa-duotone fa-solid fa-user"></i>
                Hi Tndev
            </div>
            <div className="account-list-option-sibar">
                <div className="account-child-list-option-sibar">
                    <i className="fa-thin fa-house"></i>
                    <div>Overview</div>
                </div>
                <div className="account-child-list-option-sibar">
                    <i className="fa-light fa-circle-plus"></i>
                    <div>Create Product</div>
                </div>
                <div className="account-child-list-option-sibar">
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
