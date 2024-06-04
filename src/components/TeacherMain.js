import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const TeacherMain = () => {
    const navigate=useNavigate();
  return (
    <div>
    <h1 className='text-center p-3 m-3'>Teachers</h1>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Student Registration</h5>
                        <p className="card-text">Register new  student</p>
                        <button className="btn btn-primary" onClick={()=>{navigate("/studentregistration")}}>Register</button>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Student Details</h5>
                        <p className="card-text">Get student deatils</p>
                        <NavLink to="/getstudentdetails" className="btn btn-primary">Get Details</NavLink>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Student Fee Details</h5>
                        <p className="card-text">Get student Fee deatils</p>
                        <NavLink to="/feedetails" className="btn btn-primary">Get Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeacherMain
