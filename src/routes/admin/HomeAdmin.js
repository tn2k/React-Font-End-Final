import React from 'react'
import './HomeAdmin.scss';
import { NavLink } from 'react-router-dom';
import ListUser from '../ListUser/ListUser';


const HomeAdmin = () => {
    return (
        <div className='layout-home-admin'>
            <div className='sidebar-container'>
                <div className='btn-infor-title'>
                    <div className='btn-infor-name'>Hi dev</div>
                    <div className='btn-infor-email'>tanconganh123@gmail.com</div>
                </div>
                <li>
                    <i className="fa-solid fa-house"></i>
                    <NavLink to="/contact" className="nav-link active" href="#home">Home</NavLink>
                </li>
                <li>
                    <i className="fa-regular fa-user"></i>
                    <NavLink to="/contact" className="nav-link" href="#Profile">Profile</NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-message"></i>
                    <NavLink to="/contact" className="nav-link" href="#Messages">Messages </NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-gear"></i>
                    <NavLink to="/contact" className="nav-link" href="#Setting">Setting</NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-question"></i>
                    <NavLink to="/contact" className="nav-link" href="#Help">Help</NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-lock"></i>
                    <NavLink to="/contact" className="nav-link" href="#Password">Password</NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <NavLink to="/contact" className="nav-link" href="#SignOut">Sign Out</NavLink>
                </li>
            </div>
            <div className='fetch-list-user'>
                <ListUser />
            </div>
        </div>



    )
}

export default HomeAdmin