// import React, { lazy ,Suspense  } from 'react';
import React from 'react';

// import Navbar from './Navbar/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import SignUp from './Form/form-formik-validation/SignUp';
// import Protected from './Router/Protected';
import './Form/css/formik.css'
import Index from './Redux/Components';
import NavBar from './Redux/Components/navBar';
// import LoginForm from './Form/Form2/loginForm';
// import SubmitForm from './Form/Form2/submitForm';


// const LogIn= lazy (()=>import('./Form/form-formik-validation/LogIn'));
// const Dashboard = lazy(()=> import('./Form/form-formik-validation/Dashboard'))

function App() {  
  return (
    <>
    {/* <Router>
    <Navbar/>
      <Routes>
       <Route exact path='/' element={<SignUp/>} />
         <Route exact path='/login' element={
          <Suspense fallback={<div className='lazyText'>please wait....</div>}>
            <LogIn/>
         </Suspense>
         } />
       <Route exact path='/dashboard' element={
        <Suspense fallback={<div className='lazyText'>please wait.....</div>}>
          <Protected Component={Dashboard}/>
        </Suspense>} />
      </Routes>
    </Router> */}
    {/* <LoginForm/>
    <SubmitForm/> */}
    <NavBar/>
    <Index/>
    </>
  );
}

export default App;
