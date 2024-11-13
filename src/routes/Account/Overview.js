import React, { useState, useEffect } from 'react';
import "./Overview.scss";
import SideBar from "./SideBar"
import { Pagination } from '@mui/material';
import { getListProduct } from "../../services/apiProduct";

const Overview = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 4;
    const userId = localStorage.getItem('userId');

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const getListDataUser = async () => {
            try {
                const data = await getListProduct(userId);
                const response = data?.metadata;
                if (Array.isArray(response)) {
                    setTotalItems(response.length);
                    const offset = (currentPage - 1) * itemsPerPage;
                    const dataResponse = response.slice(offset, offset + itemsPerPage);
                    setCurrentItems(dataResponse);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            getListDataUser();
        }
    }, [userId, currentPage, itemsPerPage]);


    return (
        <div className="overview-container">
            <SideBar />
            <div className="overview-content" >
                <div className="overview-header-create-product">
                    <div className="overview-title-header">
                        <div className="icon-overview-title-header">
                            <i className="fa-regular fa-arrow-left"></i>
                        </div>
                        <div className="text-header-title">
                            <div className="text-overview-title-header">Back to Home</div>
                            <div className="text2-overview-title-header">List Product</div>
                        </div>
                    </div>
                    <div className="overview-button-save-product">
                        <i className="fa-light fa-circle-plus"></i>
                        <div className="text-add-product">Add Product</div>
                    </div>
                </div>

                <div className="overview-list-product">
                    <div className="title-list-product">
                        <div className="text-list-product">All</div>
                        <div className="text-list-product">Public</div>
                        <div className="text-list-product">Draft</div>
                    </div>
                    <div className="content-list-product">
                        <div className="title-content-list-product">
                            <div className="text1-list-product">Products</div>
                            <div className="text2-list-product">Manage your products and view their sales performance</div>
                        </div>
                        <div className="child-content-list-product">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Thumbnail</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Created At</th>
                                        <th>Address</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(currentItems) && currentItems.length > 0 ? (
                                        currentItems.map((product, index) => (
                                            <tr key={index}>
                                                <td>{product.product_name}</td>
                                                <td>
                                                    <div className="show-image-thumbnail-product">
                                                        <img
                                                            className="image-thumbnail-product"
                                                            src={product.product_thumb.url}
                                                            alt="Preview"
                                                        />
                                                    </div>
                                                </td>
                                                <td>{product.product_price}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>
                                                    {product.updatedAt = new Date(product.updatedAt).toLocaleDateString('en-GB')}
                                                </td>
                                                <td>{product.product_address}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td>Product is empty</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Pagination
                                count={Math.ceil(totalItems / itemsPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Overview;
