import React from 'react'

const About = () => {
    return (
        // jsx, very similar to html
        <>
            <div className='my-4 bg-dark'>

                <div className='container'>
                    <form className='my-4 py-4'>
                        <h1 className='text-warning text-center'>Enter Product Information</h1>
                        
                        {/* desc start */}
                        <div className="mb-3 text-white">
                            <label htmlFor="text" className="form-label">Product Description</label>
                            <textarea type="text" className="form-control" id="text" placeholder="Product Title" />
                        </div>
                        {/* desc end */}
                        {/* file input */}
                        {/* <input type="file" name="file" id="file" /> */}
                        <button type="submit" className='btn btn-primary'>Create Post</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default About