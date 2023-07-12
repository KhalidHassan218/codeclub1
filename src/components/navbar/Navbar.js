import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
  SelectUseremail,
  SelectUsername,
} from "../../redux/slice/authSlice";
// import jwt from 'jsonwebtoken';
// import { Buffer } from 'buffer';
import { BiUserCircle } from "react-icons/bi";
import toast from "react-hot-toast";
const Links = (
  <div className="d-flex links justify-content-between align-items-center">
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/find-jobs">Find Jobs</NavLink>
    <NavLink to="/about-us">About US</NavLink>
  </div>
);

const Navbar = () => {
  const username = useSelector(SelectUsername);
  const useremail = useSelector(SelectUseremail);
  const dispatch = useDispatch();
  const [Showmenu, setShowmenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      console.log(token);
      console.log(user);
      dispatch(
        SET_ACTIVE_USER({
          email: user.email,
          username: user.username,
        })
      );
    } else {
      // Token doesn't exist
      // Perform necessary actions (e.g., redirect to login page)
      console.log("no user logged in");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(REMOVE_ACTIVE_USER());
    toast.success("logged out successfully");
    navigate("/");
  };

  const Buttons = (
    <div className="d-flex buttons justify-content-end align-items-center ps-0 ps-lg-4">
      {!useremail ? (
        <NavLink to="sign-in">Login</NavLink>
      ) : (
        <div style={{ fontSize: "13px" }} className="d-flex align-items-center user-credentials">
          <p  style={{ color: "white", fontSize: "15px" }}>
            <BiUserCircle size={20} />
            {username}
          </p>
          <button
            style={{ fontSize: "13px" }}
            onClick={handleLogout}
            className=" btn--blue "
            type="button"
          >
            Logout
          </button>
        </div>
      )}
      <button className="btn--blue ms-0 ms-lg-5">Get Started</button>
    </div>
  );

  const toHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="nav-large-screen d-none d-lg-flex justify-content-between align-items-center">
        <div className="logo text-uppercase pointer" onClick={toHome}>
          code club
        </div>
        {Links}
        {Buttons}
      </div>
      <div
        className="logo text-uppercase pointer d-block d-lg-none"
        onClick={toHome}
      >
        code club
      </div>
      {Showmenu && (
        <div className="burger-menu d-flex  d-lg-none flex-column align-items-center">
          <AiFillCloseCircle
            onClick={() => setShowmenu(false)}
            className="closebutton"
            color="blue"
            size={25}
          />
          {Links}
          {Buttons}
        </div>
      )}
      <GiHamburgerMenu
        onClick={() => setShowmenu(true)}
        color="white"
        className="d-block d-lg-none pointer"
        size={20}
      />
    </div>
  );
};

export default Navbar;
