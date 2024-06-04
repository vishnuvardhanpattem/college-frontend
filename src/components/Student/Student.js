import React from 'react'

const Student = () => {
    return (
        <div>
            <h1 className='text-center p-3 m-3'>Student</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Student Registration</h5>
                                <p className="card-text">Register as a student</p>
                                <a href="#" className="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Student Login</h5>
                                <p className="card-text">Login as a student</p>
                                <a href="#" className="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Student Details</h5>
                            <p className="card-text">Admission details</p>
                            <a href="#" className="btn btn-primary">Get Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student