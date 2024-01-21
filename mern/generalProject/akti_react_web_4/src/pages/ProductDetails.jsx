import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
            console.log(response.data);

            if (response.data.success) {
                setProduct(response.data.product);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    return (
        <div>
            <h2>Product Details</h2>
            {product ? (
                <div>
                    <div>
                        {/* Video controls */}
                        {product.productVideoLink && (
                            <div className='container'>
                                <video width={800} controls autoPlay>
                                    <source src={product.productVideoLink} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                    {/* Display product details */}
                    <div>
                        <img src={product.productImageLink} alt={product.title} width={400} />
                    </div>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>

                    
                </div>
            ) : (
                <p>No product details available</p>
            )}

            {/* Update button */}
            <Link className="nav-link" to={`/update-product/${id}`}>
                <button type="button">Update</button>
            </Link>
        </div>
    );
};

export default ProductDetails;
