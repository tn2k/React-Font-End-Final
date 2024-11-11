import instance from "../axios"

const createNewProduct = (formData) => {

    console.log("check data product", formData)

    return instance.post("http://localhost:8081/v1/api/product", formData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const getAllProducts = () => {
    return instance.get("http://localhost:8081/v1/api/product")
};

const getAllProducts2 = () => {
    return instance.get("http://localhost:8081/v1/api/product/productRadoom")
};

export { getAllProducts, createNewProduct, getAllProducts2 };


