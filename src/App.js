
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AdmissionModule from './components/Teacher/AdmissionModule';
import Home from './components/Home';
import Student from './components/Student/Student';
import TeacherLogin from './components/TeacherLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherMain from './components/TeacherMain';
import StudentDetails from './components/Student/StudentDetails';
import FeeCard from './components/Student/Fees/FeeCard';
import AdmissionModuleEntireForm from './components/Teacher/AdmissionModuleEntireForm';
function App() {
  return (
    <div  >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/teacher' element={<AdmissionModule />}/> */}
          <Route path='/teachermain' element={<TeacherMain />}/>
          <Route path='/student' element={<Student /> } />
          <Route path='/teacherlogin' element={<TeacherLogin/>}/>
          <Route path='/teachersignup' element={<TeacherSignup/>}/>
          {/* <Route path="/teachermain" element={<TeacherMain/>}/> */}
          <Route path='/studentregistration' element={<AdmissionModuleEntireForm />}/>
          <Route path='/getstudentdetails' element={<StudentDetails />} />
          <Route path='/feedetails' element={<FeeCard />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
