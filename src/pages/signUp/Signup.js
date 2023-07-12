import React, { useState } from "react";
import "./signup.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import vod from "../../assets/images/NoPath - Copy (2).png";
import ahly from "../../assets/images/NoPath - Copy (3).png";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import  toast  from "react-hot-toast";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const username = `${firstName}${lastName}`;

// //     const requestOptions = {
// //       mode: "no-cors",
// //       method: "POST",
      
// //         withCredentials: false,
// //       headers: {
// //         // "Content-Type": "application/json",
// //         // "User-Agent": "PostmanRuntime/7.32.3",
// //         // "Accept":'/',
// //         // "Connection": "Keep-Alive"
// //         // "Content-Type": "application/json",
// //         "Access-Control-Allow-Origin": "*",
// //         "User-Agent": "PostmanRuntime/7.32.3",
// //         "Accept": "/",
// //         'Allow': "POST",
// // 'Content-Type': "application/json",
// // 'Vary': "Accept"
// //       },
// //       body: JSON.stringify({
// //         username:username,
// //         email:email,
// //         password:password,
//     //     location: "",
//     // dateBirth: null
// //       }),
// //     };

// //     const response = await fetch(
// //       "https://codeclub.pythonanywhere.com/user/register/",
// //       requestOptions
// //     )

// //     if (response.status === 200) {
// //       // Registration successful
// //       console.log("Registration successful");
// //     } else {
// //       // Registration failed
// //       console.log("Registration failed");
// //     }
//     var postData = {
//       email: email,
//       password: password,
//       username: username,
//       location: "",
//     dateBirth: null
//     };

//     let axiosConfig = {
//       headers: {
//         // "Content-Type": "multipart/form-data",
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Origin": "http://localhost:3001",
//         "Accept": "/",
//         'Allow': "POST",
// 'Content-Type': "application/json",
// 'Vary': "Accept"
//      // "Connection": "Keep-Alive",
//       },
//     };

//     axios
//       .post("https://codeclub.pythonanywhere.com/user/register/", postData, axiosConfig,)
//       .then((res) => {
//         console.log("RESPONSE RECEIVED: ", res);
//       })
//       .catch((err) => {
//         console.log("AXIOS ERROR: ", err);
//       });
//   };


const navigate = useNavigate()
const handleSubmit = async (e) => {
    let username = `${firstName} ${lastName}`;
    e.preventDefault();
    const data = new FormData();
    // Append form fields to the FormData object
    data.append('email', email);
    data.append('username', username);
    data.append('password', password);
  
    try {
      const response = await axios.post(
        "https://codeclub.pythonanywhere.com/user/register/",
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
    toast.success('Signup successful')
      navigate('/sign-in')
    } catch (error) {
    toast.error(error.message)
console.log(error);
    }
  };
  













  const handleViewPassword = () => {
    if (document.querySelector("#password").type === "password")
      document.querySelector("#password").type = "text";
    else document.querySelector("#password").type = "password";
  };

  return (
    <div className="sign-up">
      <div className="container">
        <div className="head py-3 d-flex justify-content-between align-items-center">
          <Link className="codeclub-link" to="/">

          <h1 className="code-club">code club</h1>

          </Link>
          <Link className="login-btn" to="/sign-in">Login</Link>
        </div>
        <div className="row m-0 mt-5">
          <div className="col-lg-6 text col-md-12 col-sm-12 mb-5">
            <div>
              <h1>find the best shops in egypt</h1>
              <div>
                <p>
                  <AiOutlineCheckCircle />
                  Apply for jobs easily
                </p>
                <p>
                  <AiOutlineCheckCircle />
                  Receive alerts for the best jobs
                </p>
                <p>
                  <AiOutlineCheckCircle />
                  Get discovered by top companies
                </p>
                <p>
                  <AiOutlineCheckCircle />
                  Explore the right jobs & career opportunities
                </p>
              </div>
            </div>

            <h1 className="trusted">Trusted by over 25,000 companies</h1>
            <div>
              <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <img src={vod} alt="vodafone" />
                <img src={ahly} alt="Ahly Bank" />
                <img src={ahly} alt="Ahly Bank" />
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <img src={vod} alt="vodafone" />
                <img src={ahly} alt="Ahly Bank" />
                <img src={ahly} alt="Ahly Bank" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 right col-md-12 col-sm-12">
            <div className="signup-card p-3 px-4">
              <h3 className="mb-3">Sign Up and Start Applying For Jobs</h3>
              <div className="signup-google text-center">
                <FcGoogle size={25} className="google-icon" />
                <p className="mb-0 ">Sign up with Google</p>
              </div>
              <div className="divider">
                <p className="mb-0">or</p>
              </div>
              <form onSubmit={handleSubmit} className="mt-1">
                <div className="d-flex flex-wrap justify-content-between ">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <label className="mt-4">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-100 "
                  required
                />
                <label className="mt-4">Password</label>
                <div className="password-container">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="w-100"
                    required
                    minlength="8"
                  />
                  <AiFillEye
                    onClick={handleViewPassword}
                    className="eye-icon"
                  />
                </div>
                <label className="mt-4">
                  What job titles are you looking for?
                </label>
                <input
                  type="text"
                  className="w-100"
                  placeholder="e.g. Graphic Designer"
                />
                <input
                  type="submit"
                  className="mt-3 w-100 text-center p-1 "
                  value="sign up"
                />
              </form>
              <p className="terms text-center mt-3">
                By signing up, you agree to our{" "}
                <span style={{ color: "blue" }}>Terms and Conditons</span>{" "}
              </p>
              <p className="text-dark text-center sign-in-btn">
                Already on Code Club? <Link to="/sign-in">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
