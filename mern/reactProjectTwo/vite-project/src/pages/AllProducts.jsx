import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BASE_URL, { APIVersion1, endPoints } from '../constants/urls/urls'
import getApiService from '../services/getApiServie'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const farziArray = [1, 2, 3, 4, 5, 6, 7]
    const doubleValue = farziArray.map((value) => value * 2)

    const fetchAllProducts = async () => {
        try {
            // const response = await axios.get(`${BASE_URL}${APIVersion1}/all-products`)
            const response = await getApiService(endPoints.ALL_PRODUCTS)
            setProducts(response.data.products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])
    // function to delete product
    const handleDeleteProduct = async (id) => {
        console.log(id)
        // diy try catch
        const response = await axios.delete(`${BASE_URL}${APIVersion1}/delete/${id}`)
        if (response.data.success) {
            alert(`Product deleted successfully`)
            // apply filter on filter 
            // apply filter on products
            setProducts((prevProducts) => prevProducts.filter(product => product._id !== id));
        }
    }
    return (
        <>
            <h1>All Products</h1>
            {
                products.map((product) => (

                    <div key={product._id}>
                        <p>{product.productTitle}</p>
                        <p>{product.productDescription.slice(0, 2)}...</p>
                        <p>{product.productPrice}</p>
                        <Link to={`/product/${product._id}`}>
                            <button type="button">Product Details</button>
                        </Link>
                        {/* delete */}
                        <br />
                        <button
                            type="button"
                            onClick={() => handleDeleteProduct(product._id)}
                        >Delete
                        </button>
                        {/* call back function*/}
                        <hr />
                    </div>

                ))
            }
        </>

    )
}

export default AllProducts