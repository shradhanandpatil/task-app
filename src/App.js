import React, { lazy ,Suspense  } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Protected from './Router/Protected';
import Index from './Components';
import SignUp from "./Form/form-formik-validation/SignUp"
const LogIn= lazy (()=>import('./Form/form-formik-validation/LogIn'));
const Dashboard = lazy(()=> import('./Form/form-formik-validation/Dashboard'))

function App() {  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/formik' element={<SignUp/>}/>
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
    </Router>
    </>
  );
}

export default App;
