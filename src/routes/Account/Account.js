import React, { useState, useRef } from "react";
import "./Account.scss";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import { createNewProduct } from "../../services/apiProduct"
import SideBar from "./SideBar"

const Account = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [productData, setProductData] = useState({
    product_name: '',
    product_thumb: null,
    product_price: 0,
    product_quantity: 0,
    product_type: '',
    product_size: 0,
    product_address: '',
    product_ratingsAverage: 0,
    product_attributes: {
      house_description: '',
      house_detail: '',
      house_rules: '',
      rentail_conditions: '',
      terms_and_conditions: ''
    },
    product_amenities: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "product_thumb" && files) {
      setProductData((prevData) => ({
        ...prevData,
        [name]: files[0]
      }));
    } else if (name in productData.product_attributes) {
      // Handle nested attributes
      setProductData((prevData) => ({
        ...prevData,
        product_attributes: {
          ...prevData.product_attributes,
          [name]: value
        }
      }));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const toggleAmenity = (amenity) => {
    setProductData((prevData) => {
      const amenities = new Set(prevData.product_amenities);
      if (amenities.has(amenity)) {
        amenities.delete(amenity);
      } else {
        amenities.add(amenity);
      }
      return { ...prevData, product_amenities: Array.from(amenities) };
    });
  };

  // Submit handler
  const handleSubmitCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      if (key === "product_thumb") {
        formData.append(key, productData[key]);
      } else if (key === "product_attributes") {
        formData.append(key, JSON.stringify(productData[key]));
      } else if (key === "product_amenities") {
        formData.append(key, JSON.stringify(productData[key]));
      } else {
        formData.append(key, productData[key]);
      }
    });
    console.log("check data formData >>> ", formData)
    await createNewProduct(formData);
    toast.success("create product success!")
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitDraftProduct = async (event) => {
    event.preventDefault(); // Ngăn form tự động gửi
    const formData = new FormData(document.getElementById("myForm"));

    try {
      const response = await fetch("https://api1.example.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from API 1:", data);
    } catch (error) {
      console.error("Error submitting to API 1:", error);
    }
  };

  const handleSubmitPublicProduct = async (event) => {
    event.preventDefault(); // Ngăn form tự động gửi
    const formData = new FormData(document.getElementById("myForm"));

    try {
      const response = await fetch("https://api1.example.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from API 1:", data);
    } catch (error) {
      console.error("Error submitting to API 1:", error);
    }
  };

  return (
    <div className="account-container">
      <SideBar />
      <form className="account-content" onSubmit={handleSubmitCreateProduct} id="myForm">
        <div className="account-header-create-product">
          <div className="account-title-header">
            <div className="icon-account-title-header">
              <i className="fa-regular fa-arrow-left"></i>
            </div>
            <div className="text-header-title">
              <div className="text-account-title-header">Back to Home</div>
              <div className="text2-account-title-header">Add New Product</div>
            </div>
          </div>
          <div className="list-button-header-create-product">
            <div className="account-button-save-product">
              <i className="fa-sharp fa-light fa-floppy-disk-circle-arrow-right"></i>
              <div onClick={handleSubmitDraftProduct}>Save to Draft</div>
            </div>
            <div className="account-button-save-product">
              <i className="fa-light fa-floppy-disk"></i>
              <div onClick={handleSubmitPublicProduct}>Save Product</div>
            </div>
          </div>
        </div>
        <div className="account-form-input-product">
          <div className="account-product-image">
            <div className="title-product-image">Product image</div>
            <div className="child-title-product-image">Product image</div>
            <div className="show-image-product">
              {image &&
                (<img className="image-product" src={image} alt="Preview"
                />
                )}
            </div>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
            <div className="button-add-image-product" onClick={handleClick} >
              <i className="fa-regular fa-upload"></i>
              <div>Add Another Image</div>
            </div>
          </div>
          <div className="account-general-information">
            <div className="title-input-information-product" >General information</div>
            <div className="child-input-information-product">
              <div className="name-input-product-name">Product Name</div>
              <input
                type="text"
                name="product_name"
                placeholder="Enter Product Name"
                value={productData.product_name}
                onChange={handleChange}
              />
              <div className="child-input-product">
                <div className="format-input-product">
                  <div className="name-input-product-price">Product Price (&#36;)</div>
                  <input
                    type="number"
                    className="product_price"
                    placeholder="Product Price"
                    value={productData.product_price}
                    onChange={handleChange}
                  />
                </div>

                <div className="format-input-product">
                  <div className="name-input-product-quantity ">Product Quantity</div>
                  <input
                    type="number"
                    className="product_quantity "
                    placeholder="Product Quantity"
                    value={productData.product_quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="format-input-product">
                  <div className="name-input-product-size ">Product Size (m&sup2;)</div>
                  <input
                    type="text"
                    className="product_size"
                    placeholder="Product Size"
                    value={productData.product_size}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="name-input-product-type">Product Type</div>
              <select
                className="product_type"
                value={productData.product_type}
                onChange={handleChange}
              >
                <option value="Room">Room</option>
                <option value="House">House</option>
              </select>

              <div className="name-input-product-address">Product Address</div>
              <input
                type="text"
                name="product_address"
                placeholder="Product Address"
                value={productData.product_address}
                onChange={handleChange}
              />

              <div className="name-input-product-attributes">Product Attributes</div>

              <div className="name-input-product-description">House Description</div>
              <textarea
                type="text"
                name="house_description"
                rows={4}
                cols={70}
                placeholder="House Description"
                value={productData.product_attributes.house_description}
                onChange={handleChange}
              />

              <div className="name-input-product-detail">House Detail</div>
              <textarea type="text"
                rows={4}
                cols={70}
                name="house_detail"
                placeholder="House Detail"
                value={productData.product_attributes.house_detail}
                onChange={handleChange}
              />

              <div className="name-input-product-rules">House Rules</div>
              <textarea
                type="text"
                name="house_rules"
                placeholder="House Rules"
                value={productData.product_attributes.house_rules}
                onChange={handleChange}
              />

              <div className="name-input-product-conditions">Rentail Conditions</div>
              <textarea
                type="text"
                name="rentail_conditions"
                placeholder="Rentail Conditions"
                value={productData.product_attributes.rentail_conditions}
                onChange={handleChange}
              />

              <div className="name-input-product-term">Terms and Conditions</div>
              <textarea
                type="text"
                name="terms_and_conditions"
                placeholder="Terms and Conditions"
                value={productData.product_attributes.terms_and_conditions}
                onChange={handleChange}
              />

              <div className="name-input-product-amenities">Product Amenities</div>
              <div className="list-amenities-product">
                {["Wifi", "Furnished", "Swimming Pool", "Air Conditioner", "Terrace", "Tv", "Guest Allowed", "Washing Machine", "Shower", "Armored Door", "Living Room", "Lift", "Dish Washer", "Alarm", "Oven", "Freezer",
                  "Cooktop", "Fridge", "Centralized Heating", "Equipped Kitchen", "Bathtub", "SmartTv", "Balcony", "Hair Dryer"
                ].map((amenity) => (
                  <div key={amenity} className="amenity">
                    <input type="checkbox" checked={productData.product_amenities.includes(amenity)} onChange={() => toggleAmenity(amenity)} />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div >
  );
};

export default Account;
