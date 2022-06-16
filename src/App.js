import React from 'react';
import SignUp from './Form/form-formik-validation/SignUp';
// import UseRef from './Form/UseRef/UseRef';
// import UseRef from './Form/UseRef/UseRef';
// import Navbar from './Navbar/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import SignUp from './Form/form-formik-validation/SignUp';
// import Dashboard from './Navbar/Dashboard';

function App() {
  return (
    <>
    {/* <Router>
    <Navbar/>
      <Routes>
       <Route exact path='/' element={<SignUp/>} />
       <Route exact path='/login' element={<UseRef/>} />
       <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router> */}
    <SignUp/>
    {/* <UseRef/> */}
    </>
  );
}

export default App;
