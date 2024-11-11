import React, { useState } from "react";
import { toast } from "react-toastify";
import "./ModalCreateProduct.scss";
import { createNewProduct } from "../../services/apiProduct"


const ModalCreateProduct = () => {
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

  return (
    <form className="product-form2" onSubmit={handleSubmitCreateProduct}>
      <h2>Create Product</h2>

      <label>Product Name</label>
      <input type="text" name="product_name" placeholder="Product Name" value={productData.product_name} onChange={handleChange} />

      <label>Product Thumb</label>
      <input type="file" name="product_thumb" placeholder="Product Thumb" onChange={handleChange} accept="image/*" />

      <label>Product Price</label>
      <input type="number" name="product_price" placeholder="Product Price" value={productData.product_price} onChange={handleChange} />

      <label>Product Quantity</label>
      <input type="number" name="product_quantity" placeholder="Product Quantity" value={productData.product_quantity} onChange={handleChange} />

      <label>Product Type</label>
      <select name="product_type" value={productData.product_type} onChange={handleChange}      >
        <option value="" disabled>Select Product Type</option>
        <option value="House">House</option>
        <option value="Room">Room</option>
      </select>

      <label>Product Size</label>
      <input type="text" name="product_size" placeholder="Product Size" value={productData.product_size} onChange={handleChange} />

      <label>Product Address</label>
      <input type="text" name="product_address" placeholder="Product Address" value={productData.product_address} onChange={handleChange} />

      {/* Product Attributes */}
      <h3>Product Attributes</h3>
      <label>House Description</label>
      <input type="text" name="house_description" placeholder="House Description" value={productData.product_attributes.house_description} onChange={handleChange} />

      <label>House Detail</label>
      <input type="text" name="house_detail" placeholder="House Detail" value={productData.product_attributes.house_detail} onChange={handleChange} />

      <label>House Rules</label>
      <input type="text" name="house_rules" placeholder="House Rules" value={productData.product_attributes.house_rules} onChange={handleChange} />

      <label>Rentail Conditions</label>
      <input type="text" name="rentail_conditions" placeholder="Rentail Conditions" value={productData.product_attributes.rentail_conditions} onChange={handleChange} />

      <label>Terms and Conditions</label>
      <input type="text" name="terms_and_conditions" placeholder="Terms and Conditions" value={productData.product_attributes.terms_and_conditions} onChange={handleChange} />

      {/* Product Amenities */}
      <h3>Product Amenities</h3>
      {["wifi", "furnished", "swimmingPool", "airConditioner", "terrace", "tv", "guestAllowed", "washingMachine", "shower", "armoredDoor", "livingRoom", "lift", "dishWasher", "alarm", "oven", "freezer",
        "cooktop", "fridge", "centralizedHeating", "equippedKitchen", "bathtub", "smartTv", "balcony", "hairDryer"
      ].map((amenity) => (
        <label key={amenity} className="amenity">
          <input type="checkbox" checked={productData.product_amenities.includes(amenity)} onChange={() => toggleAmenity(amenity)} />
          {amenity}
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};


export default ModalCreateProduct;
