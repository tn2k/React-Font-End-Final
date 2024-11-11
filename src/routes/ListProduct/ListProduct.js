import React from "react";
import { connect } from 'react-redux';
import './ListProduct.scss';
import BoxProduct from "./BoxProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListProduct = (data) => {
    const listProduct = data.data
    console.log(listProduct)
    return (

        <div className="list-product-page">
            <div className="list-box-product ">
                {listProduct && listProduct.length > 0 &&
                    listProduct.map((product, index) => {
                        return (
                            <BoxProduct
                                key={`${index}`}
                                data={product}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);