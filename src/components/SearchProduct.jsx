import React from 'react'
import NavBar from './NavBar'

const SearchProduct = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6">

                                <label htmlFor="" className="form-label">Product Code</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success">Search</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchProduct