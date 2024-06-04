
// import React from 'react'
// import OfficeUseOnly from './OfficeUseOnly'
// import { useState } from 'react'
// const AdmissionModule = () => {
//     const [formData,setFormData]=useState({
//         studentname:"",
//         fathername:"",
//         mothername:"",
//         dob:"",
//         gender:"",
//         adharnumber:"",
//         interhallticketnumber:"",
//         intergroup:"",
//         tenthhallticketnumber:"",
//         houseno:"",
//         district:"",
//         street:"",
//         secretriat:"",
//         mandal:"",
//         pincode:1234678,
//         village:"",
//         student:"",
//         mobilenumber:"",
//         parentnumber:"",
//         guardiannumber:"",
//         email:"",
//         religion:"",
//         caste:"",
//         category:"",
//         physicallychallenged:"",
//         castecertificatenumber:"",
//         incomecertificatenumber:"",
//         ewsnumber:"",
//         ricecardnumber:"",
//         motheradharnumber:"",
//         bankname:"",
//         bankifsccode:"",
//         accountno:"",
//         sscmarksheet:"",
//         intermarksheet:"",
//         studentadharcard:"",
//         motheradharcard:"",
//         castecertificate:"",
//         rationcard:"",
//         incomecertificate:"",
//         motherbankpassbook:"",
//         passportsize:""
//     })
//     return (
//         <div className='container-fluid'>
//             <h1 className='text-center p-3 mt-2'>Online Admission Module for Degree Colleges(OAMDC 2024-2025)</h1>
//             <h3 className='p-2'>Application should be filled in <b>CAPITAL LETTERS</b> & according to <b>10<sup>th</sup> Marks list</b></h3>
//             <form>
//                 <div>
//                     <div className="form-floating mb-3">
//                         <input type="text" className="form-control" id="studentname" placeholder="" />
//                         <label for="studentName">Student's Name</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input type="text" className="form-control" id="mothername" placeholder="" />
//                         <label for="motherName">Mother's Name</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input type="text" className="form-control" id="fathername" placeholder="" />
//                         <label for="FatherName">Father's Name</label>
//                     </div>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='date' placeholder='Date of Birth' />
//                         <input className='form-control' id="gender" type='text' placeholder='Gender' />
//                     </div>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' id="adharnumber" placeholder='Student Aadhar Number' />
//                         <input className='form-control' type='text' placeholder='Blood Group' />
//                     </div>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' id='interhallticketnumber' placeholder='Intermediate/Equivalent Hall Ticket No : ' />
//                         <input className='form-control' type='text' id="intergroup" placeholder='Inter Group' />
//                         <input className='form-control' type='text' id='tenthhallticketnumber' placeholder='10th Hall Ticket No : ' />
//                     </div>
//                 </div>

//                 {/* Address Details */}

//                 <div>
//                     <h5 className='p-2'>Address Details :</h5>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' placeholder='House No : ' id='houseno'/>
//                         <input className='form-control' type='text' placeholder='Street' id="street" />
//                         <input className='form-control' type='text' placeholder='Village' id="village" />
//                         <input className='form-control' type='text' placeholder='Mandal' id='mandal'/>
//                         <input className='form-control' type='text' placeholder='District' id="district" />
//                         <input className='form-control' type='number' placeholder='Pincode' id="pincode"/>
//                         <input className='form-control' type='text' placeholder='Secretariat/Sachivalayam' id="secretriat"/>

//                     </div>
//                 </div>

//                 {/* Contact Details */}
//                 <div>
//                     <h5 className='p-2'>Contact Details :</h5>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' placeholder='Mobile No : ' id='mobilenumber'/>
//                         <input className='form-control' type='number' placeholder='Parents Contact  No : ' id='parentnumber'/>
//                         <input className='form-control' type='number' placeholder='Gaurdian Contact  No : ' id='guardiannumber' />
//                         <input className='form-control' type='email' placeholder='Email : ' id="email/>
//                     </div>
//                 </div>

//                 {/* Other Details */}
//                 <div>
//                 <h5 className='p-2'>Other Details :</h5>
//                 <div className='d-flex justify-content-evenly my-2'>
//                     <input className='form-control' type='text' placeholder='Religion' />
//                     <input className='form-control' type='text' placeholder='Caste' />
//                     <select className="form-select" aria-label="Sub Caste" placeholder="Category">
//                         <option selected>Category : </option>
//                         <option value="OC">OC</option>
//                         <option value="BC-A">BC-A</option>
//                         <option value="BC-B">BC-B</option>
//                         <option value="BC-C">BC-C</option>
//                         <option value="BC-D">BC-D</option>
//                         <option value="BC-E">BC-E</option>
//                         <option value="BC-F">Bc-F</option>
//                         <option value="SC">SC</option>
//                         <option value="ST">ST</option>
//                     </select>
//                         <select className="form-select" aria-label="Physically Handicapped" placeholder='Physically Handicapped'>
//                             <option value='Physically Handicapped'>Physically Handicapped</option>
//                             <option value='Non-Physically Handicapped' selected>Non Physically Handicapped</option>
//                         </select>
//                     </div>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' placeholder='Caste Certificate Mee Seva No :  ' id="castecertificatenumber"/>
//                         <input className='form-control' type='number' placeholder='Income Certificate Mee Seva No : ' id="incomecertificatenumber"/>
//                         <input className='form-control' type='number' placeholder='Incase of OC Caste EWS Certificate Mee Seva No : ' id="ewsnumber"/>
//                     </div>
//                     <div className='d-flex justify-content-evenly my-2'>
//                         <input className='form-control' type='number' placeholder='Ration Card No :  '  id="ricecardnumber"/>
//                         <input className='form-control' type='number' placeholder='Mother Aadhar No : ' id="motheradharnumber"/>
//                         <input className='form-control' type='number' placeholder='Bank Name: ' id="bankname"/>
//                         <input className='form-control' type='number' placeholder='Account No : ' id="accountno"/>
//                         <input className='form-control' type='number' placeholder='Bank IFSC code : ' id="bankifsccode" />
//                     </div>
//                 </div>

//                 {/* Xerox Copies to submit: */}
//                 <div>
//                     <h5 className='p-2'>Xerox Copies to submit:</h5>
//                     <div className="container ">
//                         <div className="row fw-bold">
//                             <div className="col">
//                                 1.10<sup>th</sup> Marks list
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 2.Intermediate Marks list & T.C
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 3.Student Aadhar Card
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                         </div>
//                         <div className="row fw-bold">
//                             <div className="col">
//                                 4.Mother Aadhar Card
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 5.Caste Certificate
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 6.Ration Card
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                         </div>
//                         <div className="row fw-bold">
//                             <div className="col">
//                                 7.Income Certificate
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 8.Mother Bank Passbook
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>
//                             <div className="col">
//                                 9.photo
//                                 <input className='form-control' type='file' placeholder='10th marklist'/>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 {/* Study Details */}

//                 <div>
//                     <h5 className='p-2'>Last 7 years Study Details :</h5>
//                     <table className="table" border={2} cellPadding={3} cellSpacing={5}>
//                         <thead>
//                             <tr>
//                                 <th scope="col">S.No</th>
//                                 <th scope="col">Name Of the College/School</th>
//                                 <th scope="col">Academic Year</th>
//                                 <th scope="col">Class</th>
//                                 <th scope="col">Place</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">1</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>2<sup>nd</sup> inter</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>1<sup>st</sup> inter</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">3</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>10<sup>th</sup>Class</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">4</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>9<sup>th</sup>Class</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">5</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>8<sup>th</sup>Class</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">6</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>7<sup>th</sup>Class</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">7</th>
//                                 <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
//                                 <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
//                                 <td>6<sup>th</sup>Class</td>
//                                 <td><input className='form-control' type='text' placeholder='Place' /></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <div className="row mb-3">
//                         <div className="col-6">
//                             <label for="secondLanguage"><h6 className='p-2'>Second Language Preferred</h6></label>
//                             <select className="form-select" aria-label="Second Language Preferred" placeholder="Second Language Preferred" id="secondLanguage">
//                                 <option value="sanskrit" selected>Sanskrit</option>
//                                 <option value="telugu">Telugu</option>
//                                 <option value="hindi">Hindi</option>
//                                 <option value="urdu">Urdu</option>
//                             </select>
//                         </div>
//                         <div className='col-6'>
//                             <label for="degreeGroupChosen"><h6 className='p-2'>Degree Group Chosen</h6></label>
//                             <select className="form-select" aria-label="Degree Group Chosen" placeholder="Degree Group Chosen" id="degreeGroupChosen">
//                                 <option value="bscphysics" selected>B.SC(Physics)</option>
//                                 <option value="bsccomputerscience" selected>B.SC(Computer Science)</option>
//                                 <option value="bscdataanalytics" selected>B.SC(Data Analytics)</option>
//                                 <option value="bscelectronics" selected>B.SC(Electronics)</option>
//                                 <option value="bscstatistics" selected>B.SC(Statistics)</option>
//                                 <option value="bscstatistics" selected>B.SC(Internet Of Things)</option>
//                                 <option value="bCom">B.Com(Computers)</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* photo gallery */}
//                     <div className='p-5 d-flex justify-content-evenly fs-2'>
//                         <div>
//                             <label for="studentPhoto">Affix Passport size photo</label>
//                             <input type="file" className="form-control" id="studentPhoto" placeholder="" />
//                         </div>
//                         <div >
//                             <label for="studentSignature">Signature of the student</label>
//                             <input type="file" className="form-control" id="studentSignature" placeholder="" />
//                         </div>
//                     </div>

//                     <div className="form-floating mb-3">
//                         <input type="number" className="form-control" id="contactNo" placeholder="" />
//                         <label for="contactNo">Reference Lecture Name & Contact No : </label>
//                     </div>



//                     {/* Submit Button */}
//                     <div className="d-flex justify-content-center   m-3">
//                         <button type="submit" className="btn btn-primary btn-expand-lg px-4">Submit</button>
//                     </div>
//                 </div>
//             </form>
//             <OfficeUseOnly />
//         </div>
//     )
// }

// export default AdmissionModule
import React, { useEffect } from 'react'
import OfficeUseOnly from './OfficeUseOnly'
import { useState } from 'react'
import axios from 'axios'
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,

} from 'firebase/storage';
import { app } from "../firebase.config"
import { useNavigate } from 'react-router-dom';
import { REACT_API_KEY } from '../utils/Url';
const AdmissionModule = () => {
    const navigate = useNavigate();
    const [studentAdharPhoto, setStudentAdharPhoto] = useState();
    const [motherAdharPhoto, setMotherAdharPhoto] = useState();
    const [sscMarksheet, setSscMarksheet] = useState();
    const [rationCardPhoto, setRationCardPhoto] = useState();
    const [interMarksheet, setInterMarkSheet] = useState();
    const [motherBankPassBook, setMotherBankPassbook] = useState();
    const [casteCertificatePhoto, setCasteCertificatePhoto] = useState();
    const [incomeCertificatePhoto, setIncomeCertificatePhoto] = useState();
    const [studentPhoto, setStudentPhoto] = useState();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        studentname: "",
        fathername: "",
        mothername: "",
        dob: "",
        gender: "",
        adharnumber: 0,
        interhallticketnumber: 0,
        intergroup: "",
        tenthhallticketnumber: 0,
        houseno: "",
        district: "",
        street: "",
        secretriat: "",
        mandal: "",
        pincode: 0,
        village: "",
        mobilenumber: 0,
        parentnumber: 0,
        guardiannumber: 0,
        email: "",
        religion: "",
        caste: "",
        category: "",
        physicallychallenged: "",
        castecertificatenumber: "",
        incomecertificatenumber: "",
        ewsnumber: "",
        ricecardnumber: "",
        motheradharnumber: 0,
        bankname: "",
        bankifsccode: "",
        accountno: 0,
        sscmarksheet: "",
        intermarksheet: "",
        studentadharcard: "",
        motheradharcard: "",
        castecertificate: "",
        rationcard: "",
        incomecertificate: "",
        motherbankpassbook: "",
        studentphoto: "",
        bloodgroup: "",
        secondlanguage: "sanskrit",
        group: ""
    })


    const handleChange = (e) => {
        if (e.target.id === "dob") {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value.toString()
            })
        }
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        setError(null)
        try {
            e.preventDefault();
            const studentadharurl = await storeImage(studentAdharPhoto);
            const motheradharurl = await storeImage(motherAdharPhoto);
            const sscurl = await storeImage(sscMarksheet);
            const interurl = await storeImage(interMarksheet);
            const castecertificateurl = await storeImage(casteCertificatePhoto);
            const rationcardurl = await storeImage(rationCardPhoto);
            const incomecertificateurl = await storeImage(incomeCertificatePhoto);
            const motherbankurl = await storeImage(motherBankPassBook);
            const photourl = await storeImage(studentPhoto);
            setFormData({
                ...formData,
                motheradharcard: motheradharurl,
                studentadharcard: studentadharurl,
                sscmarksheet: sscurl,
                intermarksheet: interurl,
                castecertificate: castecertificateurl,
                rationcard: rationcardurl,
                incomecertificate: incomecertificateurl,
                motherbankpassbook: motherbankurl,
                studentphoto: photourl
            })
            const res = await axios.post(`${REACT_API_KEY}/student/studentregistration`, { formData })
            if (res.data.message) {
                alert(res.data.message);
            }
        } catch (err) {
            console.log(err);
            setError(err.response.data.error);
        }
    }

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };
    useEffect(() => {
        console.log("formdata:", formData);
    }, [formData])
    useEffect(() => {
        if (!localStorage.getItem('current_user')) {
            navigate("/teacherlogin");
        }
    }, [])
    return (
        <div className='container-fluid'>
            {error ? <p className='text-danger'>{error}</p> : ""}
            <h1 className='text-center p-3 mt-2'>Online Admission Module for Degree Colleges(OAMDC 2024-2025)</h1>
            <h3 className='p-2'>Application should be filled in <b>CAPITAL LETTERS</b> & according to <b>10<sup>th</sup> Marks list</b></h3>
            <form>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="studentname" placeholder="" onChange={handleChange} required />
                        <label for="studentName">Student's Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mothername" placeholder="" onChange={handleChange} required />
                        <label for="motherName">Mother's Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="fathername" placeholder="" onChange={handleChange} required />
                        <label for="FatherName">Father's Name</label>
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='date' id="dob" placeholder='Date of Birth' onChange={handleChange} required />
                        <input className='form-control' id="gender" type='text' placeholder='Gender' onChange={handleChange} required />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' id="adharnumber" placeholder='Student Aadhar Number' onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Blood Group' onChange={handleChange} id='bloodgroup' required />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' id='interhallticketnumber' placeholder='Intermediate/Equivalent Hall Ticket No : ' onChange={handleChange} required />
                        <input className='form-control' type='text' id="intergroup" placeholder='Inter Group' onChange={handleChange} required />
                        <input className='form-control' type='text' id='tenthhallticketnumber' placeholder='10th Hall Ticket No : ' onChange={handleChange} required />
                    </div>
                </div>
                {/* Address Details */}
                <div>
                    <h5 className='p-2'>Address Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='text' placeholder='House No : ' id='houseno' onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Street' id="street" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Village' id="village" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Mandal' id='mandal' onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='District' id="district" onChange={handleChange} required />
                        <input className='form-control' type='number' placeholder='Pincode' id="pincode" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Secretariat/Sachivalayam' id="secretriat" onChange={handleChange} required />
                    </div>
                </div>
                {/* Contact Details */}
                <div>
                    <h5 className='p-2'>Contact Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Mobile No : ' id='mobilenumber' onChange={handleChange} required />
                        <input className='form-control' type='number' placeholder='Parents Contact  No : ' id='parentnumber' onChange={handleChange} required />
                        <input className='form-control' type='number' placeholder='Gaurdian Contact  No : ' id='guardiannumber' onChange={handleChange} required />
                        <input className='form-control' type='email' placeholder='Email : ' id='email' onChange={handleChange} required />
                    </div>
                </div>
                {/* Other Details */}
                <div>
                    <h5 className='p-2'>Other Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='text' placeholder='Religion' id='religion' onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Caste' id='caste' onChange={handleChange} required />
                        <select className="form-select" aria-label="Sub Caste" placeholder="Category" id='category' onChange={handleChange} required>
                            <option selected>Category : </option>
                            <option value="OC">OC</option>
                            <option value="BC-A">BC-A</option>
                            <option value="BC-B">BC-B</option>
                            <option value="BC-C">BC-C</option>
                            <option value="BC-D">BC-D</option>
                            <option value="BC-E">BC-E</option>
                            <option value="BC-F">Bc-F</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                        <select className="form-select" aria-label="Physically Handicapped" placeholder='Physically Handicapped' id='physicallychallenged' onChange={handleChange} required>
                            <option value='Physically Handicapped'>Physically Handicapped</option>
                            <option value='Non-Physically Handicapped' selected>Non Physically Handicapped</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='text' placeholder='Caste Certificate Mee Seva No :  ' id="castecertificatenumber" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Income Certificate Mee Seva No : ' id="incomecertificatenumber" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Incase of OC Caste EWS Certificate Mee Seva No : ' id="ewsnumber" onChange={handleChange} required />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Ration Card No :  ' id="ricecardnumber" onChange={handleChange} required />
                        <input className='form-control' type='number' placeholder='Mother Aadhar No : ' id="motheradharnumber" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Bank Name: ' id="bankname" onChange={handleChange} required />
                        <input className='form-control' type='number' placeholder='Account No : ' id="accountno" onChange={handleChange} required />
                        <input className='form-control' type='text' placeholder='Bank IFSC code : ' id="bankifsccode" onChange={handleChange} required />
                    </div>
                </div>

                {/* Xerox Copies to submit: */}
                <div>
                    <h5 className='p-2'>Xerox Copies to submit:</h5>
                    <div className="container ">
                        <div className="row fw-bold">
                            <div className="col">
                                1.10<sup>th</sup> Marks list
                                <input className='form-control' type='file' placeholder='10th marklist' onChange={(e) => { setSscMarksheet(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                2.Intermediate Marks list & T.C
                                <input className='form-control' type='file' placeholder='intermediate marklist' onChange={(e) => { setInterMarkSheet(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                3.Student Aadhar Card
                                <input className='form-control' type='file' placeholder='student adhar photo' onChange={(e) => { setStudentAdharPhoto(e.target.files[0]) }} required />
                            </div>
                        </div>
                        <div className="row fw-bold">
                            <div className="col">
                                4.Mother Aadhar Card
                                <input className='form-control' type='file' placeholder='mother adhar photo' onChange={(e) => { setMotherAdharPhoto(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                5.Caste Certificate
                                <input className='form-control' type='file' placeholder='caste certificate' onChange={(e) => { setCasteCertificatePhoto(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                6.Ration Card
                                <input className='form-control' type='file' placeholder='ration card' onChange={(e) => { setRationCardPhoto(e.target.files[0]) }} required />
                            </div>
                        </div>
                        <div className="row fw-bold">
                            <div className="col">
                                7.Income Certificate
                                <input className='form-control' type='file' placeholder='income certificate' onChange={(e) => { setIncomeCertificatePhoto(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                8.Mother Bank Passbook
                                <input className='form-control' type='file' placeholder='mother bank passbook' onChange={(e) => { setMotherBankPassbook(e.target.files[0]) }} required />
                            </div>
                            <div className="col">
                                9.photo
                                <input className='form-control' type='file' placeholder='student photo' onChange={(e) => { setStudentPhoto(e.target.files[0]) }} required />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Study Details */}

                <div>
                    <h5 className='p-2'>Last 7 years Study Details :</h5>
                    <table className="table" border={2} cellPadding={3} cellSpacing={5}>
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name Of the College/School</th>
                                <th scope="col">Academic Year</th>
                                <th scope="col">Class</th>
                                <th scope="col">Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>2<sup>nd</sup> inter</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>1<sup>st</sup> inter</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>10<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>9<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>8<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>7<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>6<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row mb-3">
                        <div className="col">
                            <label for="secondLanguage"><h6 className='p-2'>Second Language Preferred</h6></label>
                            <select className="form-select" aria-label="Second Language Preferred" placeholder="Second Language Preferred" id="secondlanguage" onChange={handleChange}>
                                <option value="sanskrit" selected>Sanskrit</option>
                                <option value="telugu">Telugu</option>
                                <option value="hindi">Hindi</option>
                                <option value="urdu">Urdu</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label for="degreeGroupChosen"><h6 className='p-2'>Degree Group Chosen</h6></label>
                            <select className="form-select" aria-label="Degree Group Chosen" placeholder="Degree Group Chosen" id="degreeGroupChosen" onChange={handleChange}>
                                <option value="B.SC(Physics)" selected>B.SC(Physics)</option>
                                <option value="B.SC(Electronics)" >B.SC(Electronics)</option>
                                <option value="B.SC(Statistics)" >B.SC(Statistics)</option>
                                <option value="B.SC(Internet Of Things)" >B.SC(Internet Of Things)</option>
                                <option value="B.Com(Computers)">B.Com(Computers)</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label for="degreeGroupChosenMajors"><h6 className='p-2'>Majors</h6></label>
                            <select className="form-select" aria-label="Degree Group Chosen Majors" placeholder="Degree Group Chosen Majors" id="degreeGroupChosenMajors" >
                                <option value="B.SC(Physics)" >B.SC(Physics)</option>
                                <option value="B.SC(Electronics)" >B.SC(Electronics)</option>
                                <option value="B.SC(Statistics)" >B.SC(Statistics)</option>
                                <option value="B.SC(Internet Of Things)" selected>B.SC(Internet Of Things)</option>
                                <option value="B.SC(Computer Science)" >B.SC(Computer Science)</option>
                                <option value="B.SC(Data Analytics)" >B.SC(Data Analytics)</option>
                                <option value="B.Com(Computers)">B.Com(Computers)</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label for="degreeGroupChosenMinors"><h6 className='p-2'>Minors</h6></label>
                            <select className="form-select" aria-label="Degree Group Chosen Minors" placeholder="Degree Group Chosen Minors" id="degreeGroupChosenMinors" >
                                <option value="B.SC(Physics)" >B.SC(Physics)</option>
                                <option value="B.SC(Electronics)" selected>B.SC(Electronics)</option>
                                <option value="B.SC(Statistics)" >B.SC(Statistics)</option>
                                <option value="B.SC(Internet Of Things)" >B.SC(Internet Of Things)</option>
                                <option value="B.SC(Computer Science)" >B.SC(Computer Science)</option>
                                <option value="B.SC(Data Analytics)" >B.SC(Data Analytics)</option>
                                <option value="B.Com(Computers)">B.Com(Computers)</option>
                            </select>
                        </div>
                    </div>

                    {/* photo gallery */}
                    {/* <div className='p-5 d-flex justify-content-evenly fs-2'>
                        <div>
                            <label for="studentPhoto">Affix Passport size photo</label>
                            <input type="file" className="form-control" id="studentPhoto" placeholder="" />
                        </div>
                        <div >
                            <label for="studentSignature">Signature of the student</label>
                            <input type="file" className="form-control" id="studentSignature" placeholder="" />
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="contactNo" placeholder="" />
                        <label for="contactNo">Reference Lecture Name & Contact No : </label>
                    </div> */}

                    {/* College Preferences */}
                    <h2>Enter your top 5 college preferences:</h2>
                    <div className='row'>
                        <div className="col form-floating mb-3 ps-2">
                            <input type="text" className="form-control" id="collegePreference" placeholder="1.College Preference" />
                            <label for="collegePreference">1.College Preference</label>
                        </div>
                        <div className="col form-floating mb-3 ps-2">
                            <input type="text" className="form-control" id="collegePreference" placeholder="2.College Preference"  />
                            <label for="collegePreference">2.College Preference</label>
                        </div>
                        <div className="col form-floating mb-3 ps-2">
                            <input type="text" className="form-control" id="collegePreference" placeholder="3.College Preference" />
                            <label for="collegePreference">3.College Preference</label>
                        </div>
                        <div className="col form-floating mb-3 ps-2">
                            <input type="text" className="form-control" id="collegePreference" placeholder="4.College Preference"  />
                            <label for="collegePreference">4.College Preference</label>
                        </div>
                        <div className="col form-floating mb-3 ps-2">
                            <input type="text" className="form-control" id="collegePreference" placeholder="5.College Preference" />
                            <label for="collegePreference">5.College Preference</label>
                        </div>
                    </ div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center   m-3">
                        <button type="submit" className="btn btn-primary btn-expand-lg px-4" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdmissionModule