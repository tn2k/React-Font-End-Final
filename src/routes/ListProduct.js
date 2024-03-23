import React from "react";
import { connect } from 'react-redux';
import './ListProduct.scss';
import BoxProduct from "./BoxProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListProduct = () => {

    const productList = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },

    ];

    return (
        <div className="list-product-page">
            <div className="list-box-product ">
                {productList.slice(0, 12).map((product, index) => (
                    <BoxProduct
                        key={product.id} />
                ))}
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);