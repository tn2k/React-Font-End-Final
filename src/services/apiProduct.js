import axios from "axios";
import instance from "../axios"

const createNewProduct = (productData) => {
    return instance.post("http://localhost:8081/v1/api/product", productData)
};

const getAllProducts = () => {
    return instance.get("http://localhost:8081/v1/api/product")
};

const getAllProducts2 = () => {
    return instance.get("http://localhost:8081/v1/api/product/productRadoom")
};

const getListProduct = () => {
    return instance.get(`http://localhost:8081/v1/api/product/published/all`)
}

const getListProduct2 = () => {
    return instance.get(`http://localhost:8081/v1/api/product/drafts/all`)
}

const getDataProductById = (product_id) => {
    return axios.get(`http://localhost:8081/v1/api/product/${product_id}`)
}

const updateProductById = (product_id, productData) => {
    return instance.patch(`http://localhost:8081/v1/api/product/${product_id}`, productData)
}
export { getAllProducts, createNewProduct, getAllProducts2, getListProduct, getListProduct2, getDataProductById, updateProductById };


