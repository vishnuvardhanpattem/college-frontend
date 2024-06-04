import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { REACT_API_KEY } from './utils/Url';
const TeacherSignup = () => {
  const navigate=useNavigate();  
  const [teachername,setTeacherName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);
  const handleSubmit=async(e)=>{
    setError(null);
    e.preventDefault();
    try {
        const res=await axios.post(`${REACT_API_KEY}/auth/signup`,{teachername,email,password});
        if(res.data.message){
            alert(res.data.message);
            navigate("/teacherlogin")
        }
    } catch (err) {
        setError(err.response.data.error);
    }
  }  
  return (
    <div className='container mt-5 w-50 '>
        <form>
            {error?<p className='text-danger'>{error}</p>:""}
            <div class="form-group">
                <label for="exampleInputEmail1">Teacher Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Teacher name" onChange={(e)=>{setTeacherName(e.target.value)}}/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button class="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
            <p>Already have an account? <Link to="/teacherlogin">Sign In</Link></p>
        </form>
    </div>
  )
}

export default TeacherSignup
