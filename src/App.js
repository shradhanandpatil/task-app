import React from 'react';
// import Navbar from './Navbar/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import SignUp from './Form/form-formik-validation/SignUp';
// import Dashboard from './Form/form-formik-validation/Dashboard';
// import LogIn from './Form/form-formik-validation/LogIn';
import Index from './Axios';

function App() {
  return (
    <>
    {/* <Router>
    <Navbar/>
      <Routes>
       <Route exact path='/' element={<SignUp/>} />
       <Route exact path='/login' element={<LogIn/>} />
       <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router> */}
    <Index/>
    </>
  );
}

export default App;
