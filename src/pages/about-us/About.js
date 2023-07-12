import React from "react";
import "./About.css";
import team from "../../assets/images/icons8-teams-breakout-144.png";
import date from "../../assets/images/icons8-date-100.png";
import article from "../../assets/images/icons8-article-64.png";
import design from "../../assets/images/icons8-design-100.png";
import marketing from "../../assets/images/icons8-ads-96 (1).png";
import finance from "../../assets/images/icons8-magnetic-card-100 (1).png";
const About = () => {
  const applyingSteps = [
    {
      title: "Register In Website",
      content: `Enhance Your Credibllity By Crafting A 
Polished Resume.`,
      image: team,
    },
    {
      title: "Completed Your Profile",
      content: `Complate Your Profile That Recruiters
      Can See Infromation About You.`,
      image: date,
    },
    {
      title: "Selected Candidate",
      content: `Selected Candidate Can Enty The
      Company For Interview.`,
      image: article,
    },
  ];
  const Categories = [
    {
      title: "Design",
      content: `250 Jobs Available`,
      image: design,
    },
    {
      title: "Marketing",
      content: `120 Jobs Available`,
      image: marketing,
    },
    {
      title: "Finance",
      content: `500 Jobs Available`,
      image: finance,
    },
  ];
  return (
    <div className="codeclub-about container text-center">
      <div className="first-titles">
        <h1>
          Accelerate Yor Job Search With JobFinder's One-Click Apply Feature
        </h1>
        <p>
          Jofind Carries The Theme Of Technology In Helping You Find A Job Wth
          An Easy And Fast Process.
        </p>
      </div>
      <div className="applysteps text-center mt-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        {applyingSteps.map((step) => {
          const { image, content, title } = step;
          return (
            <div className="applying_eachstep">
              <div className="stepimage">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <h4>{content}</h4>
            </div>
          );
        })}
      </div>
      <h3>Explore By Category</h3>
      <div className="category flex-column flex-md-row text-center mt-4 d-flex align-items-center justify-content-between">
        {Categories.map((cat) => {
          const { image, content, title } = cat;
          return (
            <div className="eachcat">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <h4>{content}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
