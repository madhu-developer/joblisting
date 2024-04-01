import React from "react";
import "./JobListing.css";
import { Link } from "react-router-dom";



export const JobListing = (props) => {
const {data} = props
  return (
    <div>
      <h1 className="job-openings-heading">Job Openings</h1>
      <ul className="job-list">
        {data.map((eachObj) => {
          return (
            <li key={eachObj.id} className="each-job-list">
              <h1 className="job-title">{eachObj.job}</h1>
              <p className="job-description">{eachObj.description}</p>
              <Link to="/viewjob"><button type="button" className="view-job-button">View Job</button></Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
