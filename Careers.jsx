import React,{useState,useEffect} from 'react'
import "./Careers.css"
import { JobListing } from './JobListing'
 

const url = "https://mocki.io/v1/5f80dd2e-677f-4ea1-a3d4-ea23f36f3387";

export const Careers = () => {
  const [data, setData] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const searchJob = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    const filteredJobs = data.filter((eachObj) =>
      eachObj.job.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredJobs);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setFilteredData(result); 
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <center className="top-section">
        <h1 className="explore-heading">Explore Opportunities here</h1>
        <input type="search" placeholder="Search Here" className="search-input" value={searchText} onChange={searchJob}/>
      </center>
      <div className="bottom-section">
     {/* <aside className="side-container">
        <div className="jobtype-container">
          <h1 className="jobtype-heading">Job Type</h1>
          <div className="jobtype-section">
          <div>
          <input type="checkbox" id="fulltime" className="checkbox-input"/>
          <label htmlFor="fulltime">Full-time</label>
          </div>
          <div>
          <input type="checkbox" id="parttime" className="checkbox-input"/>
          <label htmlFor="parttime">Part-time</label>
          </div>
          </div>
          </div>
          <div className="experience-container">
          <h1>Experience</h1>
          <div className="experience-section">
          <div>
          <input type="checkbox" id="fulltime" className="checkbox-input"/>
          <label htmlFor="fulltime">Full-time</label>
          </div>
          <div>
          <input type="checkbox" id="parttime" className="checkbox-input"/>
          <label htmlFor="parttime">Part-time</label>
          </div>
          </div>
          </div>
  </aside>*/}
      <section className="joblisting-container">
        <div>
          <JobListing data={filteredData} setData={setFilteredData}/>
        </div>
      </section>
    </div>
    </div>
  )
}
