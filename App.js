import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Careers } from './Careers';
import { ContactUs } from './ContactUs';
import { ViewJob } from './ViewJob';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />}/>
          <Route path="/viewjob" element={<ViewJob />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
