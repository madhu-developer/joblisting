import React from 'react'
import "./ViewJob.css";

export const ViewJob = () => {
  return (
    <div className="viewjob-container">
        <h1>Software developer</h1>
        <h3>Job Description</h3>
        <p>We are currently seeking a Software Developer</p>
        <h4>Desired Candidate Profile</h4>
       <p>Software Developer with master's degree in Computer Science, Eng(any), Technology, Mgmt. Info, Sys/Assurance or related to Design, develop, implement, maintain and test business functions and web applications using a variety of languages, tools, methodologies and technologies. <br/>
       Develop, create and modify general computer applications software or specialized utility programs. <br/>
       Analyze user needs and develop software solutions. <br/>
       Design software or customize software for client use with the aim of optimizing operational efficiency.<br/>
       Work location is McKinney,TX with required travel to client locations throughout the USA.Please mail resumes to 8951 Collin McKinney Parkway, #1101, McKinney, TX 75070 (or) e-mail: jobs@company.com</p>
       <button type="button" className="apply-now-button">Apply Now</button>
    </div>
  )
}
