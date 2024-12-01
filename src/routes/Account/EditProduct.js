import React, { useState, useEffect, useCallback } from 'react';
import "./EditProduct.scss";
import SideBar from "./SideBar"
import { Pagination } from '@mui/material';
import { getListProduct, getListProduct2, getDataProductById } from "../../services/apiProduct";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [buttonType, setButtonType] = useState('all');
    const itemsPerPage = 4;
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const getListDataUser = useCallback(async () => {
        const data = await getListProduct(userId);   // Dữ liệu cho Public
        const data2 = await getListProduct2(userId); // Dữ liệu cho Draft
        const response = [...(data.metadata || []), ...(data2.metadata || [])];

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

    const handleGetDataProductById = async (product_id) => {
        if (!product_id) {
            throw toast.error("get product fail!");
        }
        const dataProduct = await getDataProductById(product_id);
        console.log("check data ", dataProduct)
        if (dataProduct?.data?.metadata === null) {
            throw toast.error("not found product!");
        };
        navigate(`/edit/${product_id}`, { state: { productData: dataProduct?.data?.metadata } });
    }

    const handleDeleteProductById = () => {
        Swal.fire({
            title: 'Are you sure you want to delete this product?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Product has been deleted!");
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
            } else {
                console.log("Deletion action has been canceled.");
            }
        });
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(currentItems) && currentItems.length > 0 ? (
                                        currentItems.map((product) => (
                                            <tr key={product.product_id}>
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
                                                    {product.updatedAt = new Date(product.updatedAt).toLocaleDateString('en-GB')}
                                                </td>
                                                <td>{product.product_address}</td>
                                                <td>
                                                    <div className="list-icon-action-product">
                                                        <i className="fa-light fa-pen-to-square" onClick={() => handleGetDataProductById(product.product_id)}></i>
                                                        <i className="fa-regular fa-trash" onClick={() => handleDeleteProductById(product.product_id)}></i>
                                                    </div>
                                                </td>
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

export default EditProduct;
