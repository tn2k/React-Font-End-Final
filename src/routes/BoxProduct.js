import React from "react";
import { connect } from 'react-redux';
import './BoxProduct.scss';
import image1 from '../assets/images/pexels-adrien-olichon-3884479.jpg'
import { Link } from "react-router-dom";



const BoxProduct = ({ id }) => {

    const starPercentage = (4.6 / 5) * 100;
    return (
        <div className="box-product-page ">
            <div className="box-img"><img src={image1} /></div>
            <div className="text-title-product">{id}The Porter House Hotel Sydney</div>
            <div className="evaluate-product">
                <div className="average">4.5</div>
                <div className="rating">
                    <div className="stars" style={{ width: `${starPercentage}%` }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="people-reviews">46 reviews</div>
            </div>
            <Link href="http://localhost:3000/home"> Book The Porter House Hotel Sydney - MGallery
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
        </div >

    )

};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxProduct)