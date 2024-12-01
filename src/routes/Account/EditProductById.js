import React, { useState, useRef, useEffect } from "react";
import "./EditProductById.scss";
import { toast } from "react-toastify";
import { updateProductById } from "../../services/apiProduct"
import SideBar from "./SideBar"
import { useParams, useLocation } from 'react-router-dom';
import { convertAmenityName } from "../../utils/index"

const EditProductById = () => {

  const location = useLocation();
  const { productId } = useParams();
  const productData2 = location.state?.productData;
  const [images, setImages] = useState([])
  const fileInputRef = useRef(null);

  const [productData, setProductData] = useState({
    product_name: '',
    product_image: [],
    product_price: 0,
    product_quantity: 0,
    product_type: '',
    product_size: 0,
    product_address: '',
    product_ratingsAverage: 0,
    product_attributes: {
      product_description: '',
      product_detail: '',
      product_rules: '',
      rentail_conditions: '',
      terms_and_conditions: ''
    },
    product_amenities: []
  });

  useEffect(() => {
    if (productData2) {
      setProductData({
        product_name: productData2.product_name,
        product_image: productData2.product_image,
        product_price: productData2.product_price,
        product_quantity: productData2.product_quantity,
        product_type: productData2.product_type,
        product_size: productData2.product_size,
        product_address: productData2.product_address,
        product_ratingsAverage: productData2.product_ratingsAverage,
        product_attributes: {
          product_description: productData2.product_attributes.product_description,
          product_detail: productData2.product_attributes.product_detail,
          product_rules: productData2.product_attributes.product_rules,
          rentail_conditions: productData2.product_attributes.rentail_conditions,
          terms_and_conditions: productData2.product_attributes.terms_and_conditions,
        },
        product_amenities: productData2.product_amenities
      });
    };
    if (productData2 && productData2.product_image) {
      setImages(productData2.product_image);
    }
  }, [productData2]);

  const ListAmenities = ["Wifi", "Furnished", "Swimming Pool", "Air Conditioner", "Terrace", "Tv", "Guest Allowed", "Washing Machine", "Shower", "Armored Door", "Living Room", "Lift", "Dish Washer", "Alarm", "Oven", "Freezer",
    "Cooktop", "Fridge", "Centralized Heating", "Equipped Kitchen", "Bathtub", "Smart Tv", "Balcony", "Hair Dryer"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "product_image" && files) {
      const fileList = Array.from(files)
      const newImages = fileList.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setProductData((prevData) => {
        const totalImages = prevData.product_image
          ? prevData.product_image.length + newImages.length
          : newImages.length;
        if (totalImages > 5) {
          alert("Chỉ được chọn tối đa 5 ảnh.");
          return {
            ...prevData,
            [name]: [],
          };
        }
        return {
          ...prevData,
          [name]: [...(prevData.product_image || []), ...newImages],
        };
      });
    }
    else if (name === "product_price" && name === "product_size") {
      const value = e.target.value.replace(/\./g, '');
      setProductData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
    else if (name in productData.product_attributes) {
      setProductData((prevData) => ({
        ...prevData,
        product_attributes: {
          ...prevData.product_attributes,
          [name]: value
        }
      }));
    }
    else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  ////////////////////////////

  const handleBlur = (e) => {
    const { name } = e.target
    setProductData((prevData) => ({
      ...prevData,
      [name]: formatNumber(prevData[name])
    }));
  };

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /////////////////////////////

  const toggleAmenity = (amenity) => {
    setProductData((prevData) => {
      const amenities = new Set(prevData.product_amenities);
      if (amenities.has(amenity)) {
        amenities.delete(amenity);
      } else {
        amenities.add(amenity);
      }
      console.log(prevData)
      return { ...prevData, product_amenities: Array.from(amenities) };

    });
  };

  const handleSubmitPublicProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      if (key === "product_image") {
        productData[key].forEach((thumb) => {
          formData.append(key, thumb.file);
        });
      } else if (key === "product_attributes") {
        formData.append(key, JSON.stringify(productData[key]));
      } else if (key === "product_amenities") {
        formData.append(key, JSON.stringify(productData[key]));
      } else {
        formData.append(key, productData[key]);
      }
    });
    const response = await updateProductById(productId, formData);
    if (!response) {
      toast.error("edit product fail!")
    }
    else {
      toast.success("create product success!")
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const removeAllImages = () => {
    setProductData((prevData) => ({
      ...prevData,
      product_image: [],
    }));
  };


  return (
    <div className="account-container">
      <SideBar />
      <form className="account-content" id="myForm2" onSubmit={handleSubmitPublicProduct}>
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
            <div className="account-button-save-product" onClick={handleSubmitPublicProduct} role="button" >
              <i className="fa-light fa-floppy-disk"></i>
              <div >Save Product</div>
            </div>
          </div>
        </div>
        <div className="account-form-input-product">
          <div className="account-product-image">
            <div className="title-product-image">Product image</div>
            <div className="child-title-product-image">Product image</div>
            {images.map((img, index) => (
              <div key={index} className="show-image-product">
                <img className="image-product" src={img.url} alt={`Preview-${index}`} />
              </div>
            ))}
            <input type="file" accept="image/**" ref={fileInputRef} onChange={handleChange} style={{ display: "none" }} name="product_image" disabled={productData.product_image.length >= 5} multiple />
            <div className="action-image-product">
              <div className="button-add-image-product" onClick={handleClick} >
                <i className="fa-regular fa-upload"></i>
                <div>Add Another Image</div>
              </div>
              <div className="button-remove-image-product" onClick={removeAllImages}>
                <i className="fa-sharp fa-regular fa-eraser"></i>
                <div>Remove All</div>
              </div>
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
                    type="text"
                    name="product_price"
                    placeholder="Product Price"
                    value={productData.product_price}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>

                <div className="format-input-product">
                  <div className="name-input-product-quantity ">Product Quantity</div>
                  <input
                    type="number"
                    name="product_quantity"
                    placeholder="Product Quantity"
                    value={productData.product_quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="format-input-product">
                  <div className="name-input-product-size ">Product Size (m&sup2;)</div>
                  <input
                    type="text"
                    name="product_size"
                    placeholder="Product Size"
                    value={productData.product_size}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="name-input-product-type">Product Type</div>
              <select
                className="product_type"
                name="product_type"
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

              <div className="name-input-product-description">Product Description</div>
              <textarea
                type="text"
                name="product_description"
                rows={4}
                cols={70}
                placeholder="Product Description"
                value={productData.product_attributes.product_description}
                onChange={handleChange}
              />
              {productData.product_type === "House" && (
                <>
                  <div className="name-input-product-detail">Product Detail</div>
                  <textarea type="text"
                    rows={4}
                    cols={70}
                    name="product_detail"
                    placeholder="Product Detail"
                    value={productData.product_attributes.product_detail}
                    onChange={handleChange}
                  />
                </>
              )}

              <div className="name-input-product-rules">Product Rules</div>
              <textarea
                type="text"
                name="product_rules"
                placeholder="Product Rules"
                value={productData.product_attributes.product_rules}
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
                {ListAmenities.map((amenity) => {
                  const normalizedAmenity = convertAmenityName(amenity);
                  return (
                    <div key={normalizedAmenity} className="amenity">
                      <input
                        type="checkbox"
                        checked={productData.product_amenities.includes(normalizedAmenity)}
                        onChange={() => toggleAmenity(normalizedAmenity)}
                      />
                      {amenity}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >
  );
};

export default EditProductById;
