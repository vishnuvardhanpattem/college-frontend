import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { REACT_API_KEY } from './utils/Url';
const Navbar = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handlesignout = async () => {
        try {
            const res = await axios.post(`${REACT_API_KEY}/auth/signout`);
            if (res) {
                localStorage.clear();
                navigate("/");
            }
        } catch (error) {
            setError(error);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-white p-3  ">
                <div className="container-fluid sticky" >
                    <a className="navbar-brand text-white fs-3" href="#">OAMDC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Features</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <NavLink className='text-white nav-link' to="/student">student</NavLink>
                        </span>
                        <span className="navbar-text">
                        {localStorage.getItem('current_user') ? <NavLink className='text-white nav-link' to="/teachermain">Teacher</NavLink> : <NavLink className='text-white nav-link' to="/teacherlogin">Teacher</NavLink> }
                        </span>
                        <span className="navbar-text">
                            {!localStorage.getItem('current_user') ? <NavLink className='text-white nav-link' to="/teacherlogin">SignIn</NavLink> : <NavLink onClick={handlesignout} className='text-white nav-link' to="/teachersignout">SignOut</NavLink>}
                        </span>
                        <span className="navbar-text">
                            {!localStorage.getItem('current_user') ? <NavLink className='text-white nav-link' to="/teachersignup">Signup</NavLink> : ""}
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar