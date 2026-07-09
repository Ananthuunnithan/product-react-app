import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Product Code</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Product Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Category</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Discount%</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Stock Quantity</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12">

                                <label htmlFor="" className="form-label">Description</label>
                                <input type="textarea" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Product Image</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Rating</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct