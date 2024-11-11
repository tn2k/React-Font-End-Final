import React from "react";
import { connect } from "react-redux";
import "./BoxProduct.scss";

const BoxProduct = (data) => {
  const Product = data.data

  const formatNumber = Product.product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (

    <a className="box-product-page " href={`http://localhost:3000/${Product.product_id}`} >
      <div className="box-img">
        <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg" alt=" Product 1" />
      </div>
      <div className="type-title-product">
        <div className="child1-type">{`${Product.product_type}`}</div>
        <div className="child2-type">{`${Product.product_size}`}&nbsp;m&sup2;</div>
      </div>
      <div className="name-title-product">{`${Product.product_name}`}</div>
      <div className="address-title-product">{`${Product.product_address}`}</div>
      <div className="price-title-product">
        <div className="child-price">{`${formatNumber}`} </div>
        <div className="child-unit-price">đ&nbsp;&frasl;&nbsp;month</div>
      </div>
      <div className="evaluate-product">
        <div className="rating"><i className="fa-solid fa-star"></i></div>
        <div className="average">{`${Product.product_ratingsAverage}`}</div>
        <div className="people-reviews">&nbsp;&nbsp;46 reviews</div>
      </div>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxProduct);


// const starPercentage = (Product.product_ratingsAverage / 5) * 100;
/* <div className="stars" style={{ width: `${starPercentage}%` }}>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div> */
