import axios from 'axios';
import React, { useState } from 'react';
import { REACT_API_KEY } from '../../utils/Url';

const FeeCard = () => {


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

    let studentCreatedAt = new Date(student?.createdAt).getFullYear();


    const getStudentDetails = async () => {
        try {
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


    const studentInfo = {
        rollNo: "12345",
        name: "PATTEM VISHNU VARDHAN",
        branch: "AIDS",
        semester: "4/4 Semester-I",
        seat: "Convener",
        reimbursement: "Yes",
        category: "BC",
        fatherName: "PATTEM RAMAIAH",
        studentMobile: "",
        parentMobile: ""
    };

    const feeDetails = [
        {
            year: "1st Year",
            fees: [
                {
                    slNo: 1,
                    feeType: "Tution Fee",
                    academicYear: studentCreatedAt,
                    feeAmount: 60000.00,
                    paid: 60000.00,
                    recNos: "21/6/865",
                    recDates: "17/06/2023",
                    due: 0.00,
                }
            ],
            totals: {
                feeAmount: 60000.00,
                paid: 60000.00,
                due: 0.00,
            }
        },
        {
            year: "2nd Year",
            fees: [
                {
                    slNo: 2,
                    feeType: "Tution Fee",
                    academicYear: studentCreatedAt + 1,
                    feeAmount: 60000.00,
                    paid: 60000.00,
                    recNos: "21/6/2075, TFR-23/2948, TFR-23/5168",
                    recDates: "17/06/2023, 29/09/2023, 05/01/2024",
                    due: 0.00,

                }
            ],
            totals: {
                feeAmount: 60000.00,
                paid: 60000.00,
                due: 0.00,

            }
        },
        {
            year: "3rd Year",
            fees: [
                {
                    slNo: 3,
                    feeType: "Tution Fee",
                    academicYear: studentCreatedAt + 2,
                    feeAmount: 60000.00,
                    paid: 15000.00,
                    recNos: "TFR-23/7729",
                    recDates: "19/03/2024",
                    due: 45000.00,
                }
            ],
            totals: {
                feeAmount: 60000.00,
                paid: 15000.00,
                due: 45000.00,
            }
        }
    ];

    return (

        <>

            <div className='container mt-5 d-flex flex-column align-items-center justify-content-center w-50 p-5'>
                <h1 className='my-3'>Get Student Fee Details </h1>
                <div className=" input-group mb-3">
                    <input type="text" id='studentAdhaarNumber' required onChange={(e) => setAdharNumber(e.target.value)} className="form-control" placeholder="Student's Adhaar Number" aria-label="Student's Adhaar Number" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={getStudentDetails} type="button">search</button>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-success mb-3">STUDENT FEE CARD</h3>
                        <div className="mb-4">

                            <p>Name: {student?.studentname}</p>
                            <p>Course: {groupDetails?.group}</p>
                            <p>Category: {studentInfo.category}</p>
                            <p>Father Name: {student?.fathername}</p>
                            <p>Student Mobile: {contactDetails?.mobilenumber}</p>
                            <p>Parent Mobile: {contactDetails?.parentnumber}</p>
                        </div>

                        {feeDetails.map((yearDetail, index) => (
                            <div key={index} className="mb-4">
                                <h4>{yearDetail.year}</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Fee</th>
                                            <th>Academic Year</th>
                                            <th>Fee Amount</th>
                                            <th>Paid</th>
                                            <th>Rec.No(s)</th>
                                            <th>Rec.Date(s)</th>
                                            <th>Due</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {yearDetail.fees.map((fee, index) => (
                                            <tr key={index}>
                                                <td>{fee.slNo}</td>
                                                <td>{fee.feeType}</td>
                                                <td>{fee.academicYear}</td>
                                                <td>{fee.feeAmount.toFixed(2)}</td>
                                                <td>{fee.paid.toFixed(2)}</td>
                                                <td>{fee.recNos}</td>
                                                <td>{fee.recDates}</td>
                                                <td>{fee.due.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan="3" className="text-right"><b>{yearDetail.year.toUpperCase()} TOTALS</b></td>
                                            <td>{yearDetail.totals.feeAmount.toFixed(2)}</td>
                                            <td>{yearDetail.totals.paid.toFixed(2)}</td>
                                            <td colSpan="2"></td>
                                            <td>{yearDetail.totals.due.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeeCard;
