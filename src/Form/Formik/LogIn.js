import React from "react";
import { useFormik } from "formik";
import '../css/login.css'

function LogIn() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: values=>{
        console.log(values);
    }
  });
  return (
    <>
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstname">firstname : </label><br></br>
          <input
            type="firstname"
            id="firstname"
            name="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            placeholder="Enter your Email id"
          />
        </div>
        <div>
          <label htmlFor="lastname">lastname : </label><br></br>
          <input
            type="lastname"
            id="lastname"
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            placeholder="Enter your Email id"
          />
        </div>
        <div>
          <label htmlFor="Email">Email : </label><br></br>
          <input
            type="Email"
            id="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your Email id"
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label><br></br>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your Password"
          />
        </div>
        <div>
          <label htmlFor="pasword">Confirm password :</label><br></br>
          <input
            type="password"
            id="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Enter your Number"
          />
        </div>
        <button className="btn-black" type="submit">Submit</button>
        <button className="btn-red" type="reset">Reset</button>
      </form>
    </div>
    </>
  );
}

export default LogIn;
