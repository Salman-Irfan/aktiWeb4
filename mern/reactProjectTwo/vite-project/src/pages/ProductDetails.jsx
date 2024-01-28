import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    const { id } = params

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/${id}`)
            console.log(response)
            setProduct(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }
    // useffect chalta hai jab componetn mount ho
    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <div>ProductDetails</div>
            {
                product.productTitle
            }
            <Link to={`/product/update/${id}`}>
                <button type="button">update</button>
            </Link>
        </>
    )
}

export default ProductDetails