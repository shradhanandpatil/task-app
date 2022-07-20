import React, { useState } from 'react'
import Home from '../../Components/Home';
import { validEmail,validPassword} from '../Regex/regex';

export default function Form() {
    let [firstname,setFirstName]=useState("");
    let [lastname,setLastName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [number,setNumber]=useState("");
    let [emailErr, setEmailErr] = useState(false);
    let [pwdError, setPwdError] = useState(false);
    const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
         emailErr && alert('Your email is invalid') 
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
         pwdError && alert('Your password is invalid') 
      }
   };

  return (
    <>
    <Home/>
    <div className="conatiner">
    <form>
          <div>
            <label htmlFor="firstname">firstname : </label>
            <input type="firstname" id='firstname' placeholder='Enter your Email id'required value={firstname} onChange={(e)=> setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastname">lastname : </label>
            <input type="lastname" id='lastname' placeholder='Enter your Email id'required value={lastname} onChange={(e)=> setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="Email">Email : </label>
            <input type="Email" id='Email' placeholder='Enter your Email id'required value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div>
              <label htmlFor="password">Password : </label>
              <input type="password" id='password' placeholder='Enter your Password' required value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <div>
              <label htmlFor="number">Number : </label>
              <input type="number" id='password' placeholder='Enter your Number'required value={number} onChange={(e)=> setNumber(e.target.value)} />
          </div>
          <button type='submit' onClick={validate}  className='btn'>Submit</button>
      </form> 
    </div>
    </>
  )
}

