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
            console.log(response.data); // Log the response data to inspect it

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
                        <img src={product.productImageLink} alt={product.title} width={400} />
                    </div>
                    <p>Title: {product.title}</p>
                    <p> Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ) : (
                <p>No product details available</p>
            )}
            {/* update button */}
            <Link className="nav-link" to={`/update-product/${id}`}>
                <button type="button">Update</button>
            </Link>
        </div>
    );
};

export default ProductDetails;
