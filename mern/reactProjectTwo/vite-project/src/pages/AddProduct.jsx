import axios from "axios";
import React, { useState } from "react";
import BASE_URL, {  APIVersion1, endPoints } from "../constants/urls/urls";
import postApiService from "../services/postApiService";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    // function to send data to backend server
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            productTitle: title,
            productDescription: description,
            productPrice: price,
        };

        // send data to backend
        // api services,
        // const response = await axios.post(
        //     `http://localhost:3000/api/add-product`,
        //     formData
        // );

        
        // const response = await axios.post(`${BASE_URL}${APIVersion1}${endPoints.ADD_PRODUCT}`, formData);

        // FROM api services
        const response = await postApiService(endPoints.ADD_PRODUCT, formData)
        console.log(response)
        
        if (response.data.success) {
            alert(response.data.message);
        } else {
            alert(response.data.message);
        }
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Title"
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={description}
                            rows={3}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={price}
                            id="number"
                            placeholder="price"
                            onChange={handlePriceChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
