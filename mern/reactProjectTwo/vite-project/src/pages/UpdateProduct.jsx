import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const params = useParams()
    const { id } = params

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    // function to fetch product fields
    const fetchProductDetails = async () => {
        
        try {
            const response = await axios.get(`http://localhost:3000/product/${id}`)
            if (response.data.success) {
                setTitle(response.data.product.productTitle)
                setDescription(response.data.product.productDescription)
                setPrice(response.data.product.productPrice)
            }
        } catch (error) {
            console.log(error)
        }
        
        
    }
    useEffect(() => {
        fetchProductDetails()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        const updatedProductData = {
            productTitle: title,
            productDescription: description,
            productPrice: price,
        }
        console.log(updatedProductData)
        const response = await axios.put(`http://localhost:3000/update/${id}`, updatedProductData)
        console.log(response)
        if (response.data.success) {
            alert(`product updated successfully`)
        }
    }
    return (
        <>
            <form onSubmit={handleUpdate}>
                {/* title */}
                <input
                    type="text"
                    placeholder='product title'
                    name='productTitle'
                    value={title}
                    onChange={handleTitleChange}
                />
                {/* description */}
                <input
                    type="text"
                    placeholder='product description'
                    value={description}
                    name='productDescription'
                    onChange={handleDescriptionChange}
                />
                {/* title */}
                <input
                    type="number"
                    placeholder='product title'
                    value={price}
                    name='productPrice'
                    onChange={handlePriceChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UpdateProduct