import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    // idr cher khani nhi karni
    const [formdata, setFormdata] = useState({
        title: '',
        description: '',
        price: '',
        productFile: null, // For storing the selected image file
    });
    // idr b cher khani nhi krni
    // Input changing function
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    // File input change function
    const handleFileChange = (e) => {
        setFormdata({
            ...formdata,
            productFile: e.target.files[0], // Store the selected file
        });
    };

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a FormData object to send both text and file data
            const formData = new FormData();
            formData.append('title', formdata.title);
            formData.append('description', formdata.description);
            formData.append('price', formdata.price);
            formData.append('productFile', formdata.productFile);

            // Send the FormData to the server using axios
            const response = await axios.post('http://localhost:3000/api/v1/add-product', formData);

            if (response.data.success) {
                alert('Product added successfully');
            } else {
                console.error('Failed to add product:', response.data.error);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <>
            {/* riwayati html */}
            <div>Add Product</div>
            <form onSubmit={handleSubmit}>
                {/* title */}
                <input
                    className='' // apn mrazi ki classes 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={formdata.title} // input tag k ander value - 
                    onChange={handleChange} // input tag k andr onChange - in ko nhi cherna
                    required
                />
                {/* description */}
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={formdata.description}
                    onChange={handleChange}
                    required
                />
                {/* price */}
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={formdata.price}
                    onChange={handleChange}
                    required
                />
                {/* image file input */}
                <input
                    type="file"
                    name="productFile"
                    id="productFile"
                    accept="image/*" // Specify accepted file types (images in this case)
                    onChange={handleFileChange}
                    required
                />
                {/* submit */}
                <button type="submit">Add Product</button>
            </form>
        </>
    );
};

export default AddProduct;
