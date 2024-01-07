import React from 'react'

const About = () => {
    return (
        // jsx, very similar to html
        <>
            <div className='my-4 bg-dark'>

                <div className='container'>
                    <form className='my-4 py-4'>
                        <h1 className='text-warning text-center'>Enter Product Information</h1>
                        {/* title start */}
                        <div className="mb-3 text-white">
                            <label htmlFor="text" className="form-label">Product Title</label>
                            <input type="text" className="form-control" id="text" placeholder="Product Title" />
                        </div>
                        {/* title end */}
                        {/* desc start */}
                        <div className="mb-3 text-white">
                            <label htmlFor="text" className="form-label">Product Description</label>
                            <textarea type="text" className="form-control" id="text" placeholder="Product Title" />
                        </div>
                        {/* desc end */}
                        {/* price start */}
                        <div className="mb-3 text-white">
                            <label htmlFor="price" className="form-label">Product Price</label>
                            <input type="number" className="form-control" id="text" placeholder="Product Title" />
                        </div>
                        {/* price end */}
                    </form>
                </div>
            </div>

        </>
    )
}

export default About