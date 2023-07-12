import React, { useState } from "react";
import "./home.css";
import { Navbar } from "../../components";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import vodafone from '../../assets/images/vodafone.png'
import intel from '../../assets/images/intel.png'
import tesla from '../../assets/images/tesla.png'
import amd from '../../assets/images/amd.png'
const Home = () => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const companies =[
    {
    image:vodafone,
    name: "vodafone"
  },
    {
    image:intel,
    name: "intel"
  },
    {
    image:tesla,
    name: "tesla"
  },
    {
    image:amd,
    name: "amd"
  },
]
  return (
    <div className="codeclub_home">
      <Navbar />
      <div className="home-content container">
        <div className="first-letter">
          <span className="me-0 me-md-4">NEW</span>
          <span className="text-light fw-bold">
            Now you can get free concultation with our Hr team
          </span>
        </div>
        <p>
          Code Club innovative algorithm finds your ideal career match. Elevate
          your future with Code Club today.
        </p>
        <form>
          <GoSearch size={28} />
          <input
            type="text"
            value={job}
            name="job"
            placeholder="Search Jobs"
            onChange={(e) => setJob(e.target.value)}
          />
          <IoLocationOutline size={28} />
          <input
            type="text"
            value={location}
            name="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn--blue">Find Job</button>
        </form>
        <div className="growing">Job 4,000+ companies already growing</div>
        <div className="companiesimage w-100 mt-4 d-flex align-items-center justify-content-between">
          {companies.map((company , index) => {
            const { image, name } = company;
            return <img key={index} src={image} alt={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
