import React, { useState, useEffect, useCallback } from 'react';
import "./Overview.scss";
import SideBar from "./SideBar"
import { Pagination } from '@mui/material';
import { getListProduct, getListProduct2 } from "../../services/apiProduct";

const Overview = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [buttonType, setButtonType] = useState('all');
    const itemsPerPage = 4;
    const userId = localStorage.getItem('userId');

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const getListDataUser = useCallback(async () => {
        const data = await getListProduct(userId);   // Dữ liệu cho Public
        const data2 = await getListProduct2(userId); // Dữ liệu cho Draft
        const response = [...(data.metadata || []), ...(data2.metadata || [])];
        console.log(response)
        let dataResponse;
        if (buttonType === 'public') {
            dataResponse = data.metadata || [];
        } else if (buttonType === 'draft') {
            dataResponse = data2.metadata || [];
        } else if (buttonType === 'all') {
            dataResponse = response;
        }

        if (Array.isArray(dataResponse)) {
            setTotalItems(dataResponse.length);
            const offset = (currentPage - 1) * itemsPerPage;
            const paginatedData = dataResponse.slice(offset, offset + itemsPerPage);
            setCurrentItems(paginatedData);
        }
    }, [userId, currentPage, itemsPerPage, buttonType]);

    useEffect(() => {
        if (userId) {
            getListDataUser();
        }
    }, [userId, currentPage, buttonType, getListDataUser]);

    const handleClickPublic = () => {
        setButtonType('public');
        setCurrentPage(1);
    };

    const handleClickDraft = () => {
        setButtonType('draft');
        setCurrentPage(1);
    };

    const handleClickAll = () => {
        setButtonType('all');
        setCurrentPage(1);
    };

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
                        <div className="text-list-product" onClick={handleClickAll}>All</div>
                        <div className="text-list-product" onClick={handleClickPublic}>Public</div>
                        <div className="text-list-product" onClick={handleClickDraft}>Draft</div>
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
                                                            src={product.product_image[0].url}
                                                            alt="Preview"
                                                        />
                                                    </div>
                                                </td>
                                                <td>{product.product_price}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>
                                                    {product.createdAt = new Date(product.createdAt).toLocaleDateString('en-GB')}
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
