import React, { useEffect, useState } from "react";
import "./signIn.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import  toast  from "react-hot-toast";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
const dispatch = useDispatch()
  useEffect(() => {
    if (!password) {
      document.querySelector("#password").type = "password";
    }
  }, [password]);

  const handleViewPassword = () => {
    if (document.querySelector("#password").type === "password" && password)
      document.querySelector("#password").type = "text";
    else document.querySelector("#password").type = "password";
  };


const handleForgotPass =async () =>{

  
  // Append form fields to the FormData object
  


  try {
    const response = await axios.post(
      'https://codeclub.pythonanywhere.com/user/email_request/',
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Handle the response as needed (e.g., show success message)
    console.log(response.data);
  } catch (error) {
    // Handle error response (e.g., show error message)
    console.error(error);
  }
};









  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // Append form fields to the FormData object
    data.append('email', email);
    data.append('password', password);
  
    try {
      const response = await axios.post(
        "https://codeclub.pythonanywhere.com/user/login/",
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
    dispatch(SET_ACTIVE_USER({
      email,
      username: response.data.data.username
    }))
    localStorage.setItem('token' , response.data.token)
    localStorage.setItem('user' , JSON.stringify(response.data.data))
    toast.success('Successfully signed in!')
      navigate('/')
    } catch (error) {
      console.error(error.message);
    toast.error('Email/Password not Correct')

    }
  };
  return (
    <div className="sign-in">
      <div className="container d-flex flex-column align-items-center ">
        <h1 className="code-club text-center ">code club</h1>
        <div className="signin-card p-3 px-4">
          <h3 className="mb-3">Sign Up and Start Applying For Jobs</h3>
          <div className="signup-google text-center">
            <FcGoogle size={25} className="google-icon" />
            <p className="mb-0 ">Sign up with Google</p>
          </div>
          <div className="divider">
            <p className="mb-0">or</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-3">
            <label className="mt-4">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-100 "
              required
            />
            <label className="mt-4">Password</label>
            <div className="password-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id="password"
                className="w-100"
                required
              />
              <AiFillEye onClick={handleViewPassword} className="eye-icon" />
            </div>

            <input
              type="submit"
              className="mt-3 w-100 text-center p-1 "
              value="sign in"
            />
          </form>
          <p onClick={handleForgotPass} style={{ color: "blue" }} className="forgot text-center mt-5">
            forgot password ?
          </p>
          <p className="text-dark text-center sign-in-btn mt-4">
            New to Code Club ? <Link to="/sign-up">Join now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
