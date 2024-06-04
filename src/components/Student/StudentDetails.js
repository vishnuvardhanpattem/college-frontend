import React, { useState, useEffect } from 'react';
import axios, { HttpStatusCode } from 'axios';
import Loading from '../utils/Loading';
import { REACT_API_KEY } from '../utils/Url';


const StudentDetails = () => {
    const [adharnumber, setAdharNumber] = useState(null);
    const [studentDetails, setStudentDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const [addressDetails, setAddressDetails] = useState(null);
    const [contactDetails, setContactDetails] = useState(null);
    const [documentDetails, setDocumentDetails] = useState(null);
    const [groupDetails, setGroupDetails] = useState(null);
    const [otherDetails, setOtherDetails] = useState(null);
    const [student, setStudent] = useState(null);



    const getStudentDetails = async () => {
        try {
            console.log("API Key:", REACT_API_KEY);
            setLoading(true);
            const res = await axios.post(`${REACT_API_KEY}/student/getstudentdetails`, { adharnumber });
            console.log(res);
            const response = res.data;
            setAddressDetails(response.AddressDetails);
            setContactDetails(response.ContactDetails);
            setDocumentDetails(response.DocumentDetails);
            setGroupDetails(response.GroupDetails);
            setOtherDetails(response.OtherDetails);
            setStudent(response.student);
            setStudentDetails(res.data);
            setLoading(false);

            // setAdharNumber('');
        } catch (err) {
            console.log("Error : ", err);
            setError("Error : " + err.message);
            setLoading(false);
            setStudentDetails(null);
        }
    };


    if (loading) {
        return <Loading />;
    }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <>

            <div className='container mt-5 d-flex flex-column align-items-center justify-content-center w-50 p-5'>
                <h1 className='my-3'>Get Student Details </h1>
                <div className=" input-group mb-3">
                    <input type="text" id='studentAdhaarNumber' required onChange={(e) => setAdharNumber(e.target.value)} className="form-control" placeholder="Student's Adhaar Number" aria-label="Student's Adhaar Number" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={getStudentDetails} type="button">search</button>
                    </div>
                </div>
            </div>

            {/* Get Student Details */}
            {!studentDetails  ? <h2 className='text-center text-danger'>No Data Found</h2> :
                <div className='container my-5'>
                    <div className="card">
                        <div className="card-body p-5">
                            <h5 className="card-title text-success fw-bold">Student Admission  Details</h5>
                            {/* students Details */}
                            <div className="row">
                                <div className="col-6">
                                    <p>Admission <b>:</b> </p>
                                    <p>Course <b>:</b> {groupDetails?.group}</p>
                                    <p>Student Name <b>:</b> {student?.studentname}</p>
                                    <p>Gender <b>:</b> {student?.gender}</p>
                                    <p>Student Father Name <b>:</b> {student?.fathername}</p>
                                    <p>Student Mother Name <b>:</b> {student?.mothername}</p>
                                    <p>Student DOB <b>:</b> {student?.dob}</p>
                                    <p>Student Email <b>:</b> {contactDetails?.email}</p>
                                    <p>Student Adhaar Number<b>:</b> {student?.adharnumber}</p>
                                    <p>Student Mobile <b>:</b> {contactDetails?.mobilenumber}</p>
                                </div>
                                <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                                    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                                        <img className='rounded' style={{ "maxWidth": "300px", "maxHeight": "300px" }} src={documentDetails.studentphoto} alt="student photo" />
                                    </div>
                                    <p>Inter Hall Ticket No : {student?.interhallticketnumber}</p>
                                    <p>Inter Group : {student?.intergroup}</p>
                                    <p>Tenth Hall Ticket No : {student?.tenthhallticketnumber}</p>
                                </div>

                                <hr />

                                {/* Parents Details */}
                                <h5 className="card-title">Parents & Gaurdians Details</h5>
                                <div className="col-6">
                                    <p>Father Name <b>:</b> {student?.fathername}</p>
                                    <p>Mother Name <b>:</b> {student?.mothername}</p>
                                </div>
                                <div className='col-6 '>
                                    <p>Parents Number <b>:</b> {contactDetails?.parentnumber} </p>
                                    <p>Gaurdian  Number <b>:</b> {contactDetails?.guardiannumber}</p>
                                </div>
                                <hr />
                                {/* Address Details */}
                                <h5 className="card-title">Address Details</h5>
                                <div className="col-6">
                                    <p>Address <b>:</b> {addressDetails?.houseno} {addressDetails?.street} <i>Street</i>, {addressDetails?.village} <i>Village</i></p>
                                    <p>Mandal <b>:</b> {addressDetails?.mandal} </p>
                                    <p>City <b>:</b> {addressDetails?.district}</p>
                                    <p>Pincode <b>:</b> {addressDetails?.pincode}</p>
                                </div>
                                <hr />
                                {/* Other Details */}
                                <h5 className="card-title">Other Details</h5>
                                <div className="col-6">
                                    <p>Student Caste <b>:</b> {otherDetails?.caste}</p>
                                    <p>Category <b>:</b> {otherDetails?.category}</p>
                                    <p>Student Religion <b>:</b> {otherDetails?.religion}</p>
                                    <p>Physicallychallenged <b>:</b> {otherDetails?.physicallychallenged}</p>
                                </div>
                                <div className='col-6'>
                                    <p>Bank Name <b>:</b> {otherDetails?.bankname} </p>
                                    <p>IFSC Code <b>:</b> {otherDetails?.bankifsccode}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
        </>

    );
};

export default StudentDetails;
