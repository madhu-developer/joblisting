import React,{useState} from 'react'
import "./ContactUs.css";

export const ContactUs = () => {
    const [resume, setResume] = useState(null);
    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
        console.log(resume);
      };
  return (
    <div>
    <div className="contactus-container">
    <form className="contactus-form">
        <center className="login-description">
            <h1>Contact Us</h1>
            <p>Embrace your career joining our Company</p>
        </center>
        <input type="text" id="user" placeholder="Enter your name here"/>
        <input type="email" id="mailid" placeholder="Enter your mail-id here"/>
        <input type="password" id="password" placeholder="Enter your password here"/>
        <input className="choose-file" type="file" id="resume" accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} />
        <div className="button">
                <button type="submit" className="submit-button">Submit</button>
                </div>
        </form>
</div>
    {/*<div className="contactus-container">
        <div className="contactus-section">
            <div className="contact-details">
                <h1>Contact Us</h1>
                <p>Embrace your career with the opportunities provided</p>
            </div>
            <form className="form-inputs">
                <input type="text" placeholder="Enter Name Here"/>
                <input type="email" placeholder="Enter Mail-id Here"/>
                <input type="password" placeholder="Enter Password Here"/>
                <input className="choose-file" type="file" id="resume" accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} />
        <div className="button">
                <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
  </div>*/}
    </div>
  )
}
