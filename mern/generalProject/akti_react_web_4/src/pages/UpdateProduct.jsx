import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
    });

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
            if (response.data.success) {
                const productData = response.data.product;
                setFormData({
                    title: productData.title,
                    description: productData.description,
                    price: productData.price.toString(), // Convert to string for input type="number"
                });
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };
    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateData = {
                title: formData.title,
                description: formData.description,
                price: parseFloat(formData.price), // Convert back to number
            };

            const updateResponse = await axios.put(`http://localhost:3000/api/v1/update-product/${id}`, updateData);

            if (updateResponse.data.success) {
                alert('Product updated successfully:');
                navigate(`/product/${id}`);
            } else {
                console.error('Failed to update product:', updateResponse.data.error);
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    

    return (
        <>
            <div>Update Product</div>
            <form onSubmit={handleSubmit}>
                {/* title */}
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                {/* description */}
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                {/* price */}
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                {/* submit */}
                <button type="submit">Update Product</button>
            </form>
        </>
    );
};

export default UpdateProduct;
