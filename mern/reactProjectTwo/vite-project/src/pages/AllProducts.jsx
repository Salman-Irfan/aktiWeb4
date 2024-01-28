import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const farziArray = [1, 2, 3, 4, 5, 6, 7]
    const doubleValue = farziArray.map((value) => value * 2)
    
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/all-products`)
            
            setProducts(response.data.products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllProducts()

    }, [products])
    // function to delete product
    const handleDeleteProduct = async (id) => {
        console.log(id)
        // diy try catch
        const response = await axios.delete(`http://localhost:3000/delete/${id}`)
        if(response.data.success){
            alert(`Product deleted successfully`)
        }
    }
    return (
        <>
            <h1>All Products</h1>
            {
                products.map((product) => (
                    <>
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
                                onClick={()=>handleDeleteProduct(product._id)}
                            >Delete
                            </button>
                            {/* call back function*/}
                        </div>
                        <hr />
                    </>
                ))
            }
        </>

    )
}

export default AllProducts