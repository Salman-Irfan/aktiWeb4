import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/all-products`);
            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
            console.log(productId)
            const response = await axios.delete(`http://localhost:3000/api/v1/delete-product/${productId}`);

            if (response.data.success) {
                // If deletion is successful, fetch updated product list
                fetchAllProducts();
            } else {
                console.error('Error deleting product:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            {/* riwayati html */}
            <div>All Products</div>
            <ul>
                {products.map((product) => ( // is line ko nhi cherna
                    // curly brackets k andr jo kuch b ika hai us ko b nhi cherna 
                    // class names ko cher skty hai
                    // even apna new htmltag b lga skty hain
                    <li key={product._id} className=''>
                        <p className=''>Product Title: {product.title}</p> 
                        <p className=''>
                            {product.description}
                        </p>
                        <p className=''>Price: {product.price}</p>
                        <div className=''>
                            <img src={product.productImageLink} alt={product.title} width={400} className='' />
                        </div>
                        <div>
                            <Link className="nav-link" to={`/product/${product._id}`}>
                                <button type="button">Read More</button>
                            </Link>
                        </div>
                        {/* Delete button */}
                        <button type="button" onClick={() => handleDeleteProduct(product._id)}>
                            Delete Product
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AllProducts;
