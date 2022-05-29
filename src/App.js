import React, { useState } from 'react';
import Profile from "./Components/Profile/Profile"
import About from "./Components/AboutMe/About"
import Contact from "./Components/ContactMe/Contact"
import Projects from "./Components/Projects/Projects"
import NavTabs from './Components/NavTabs/NavTabs';
import Footer from './Components/Footer/Footer'
import {IconContext} from "react-icons"



function App() {

  const [currentPage, setCurrentPage] = useState('Profile');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'Profile') {
    return <Profile />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Projects') {
    return <Projects />;
  }
  return <Contact />;
};

  return (
    //Icon provider is used to add in icons such as github, social media, email, etc.
    <IconContext.Provider value ={{ color: "cornflowerblue"}}>
      <div className="App">
        {/* NavTabs props pass in current page + set the current page when a page change occurs */}
        <NavTabs currentPage={currentPage} handlePageChange ={setCurrentPage}/>
        {renderPage()}
        <Footer/>
      </div>
    </IconContext.Provider>
  );
}

export default App;
