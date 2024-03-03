import React, {useState, useEffect} from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from './logo.svg';
import './App.css';
import upload from './components/upload';
import videoPlayer from './components/video-player';
import searchSection from './components/search-section';

import aTest from './components/A';
import { render } from '@testing-library/react';
import SearchSection from './components/search-section';
import PrimarySearchAppBar from './components/navbar';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<React.FC>(() => videoPlayer); // Set C as the initial selected component

  const handleButtonClick = (component: React.FC) => {
    setSelectedComponent(() => component);
  };


  const renderSelectedComponent = () => {
    if (selectedComponent) {
      return React.createElement(selectedComponent);
    }
    return null;
  };
  // Render the selected component
  
  return (
    <div className="App">
      
      <PrimarySearchAppBar/>
      {/* <div className="searchContainer" onClick={()=> handleButtonClick(SearchSection)}>
        <img src="./cclp/public/searchImage.png" className="searchImage"/> 
        <input className="searchInput" type="text"/>
      </div> */}

      <div className='navbarAndContent'>
          <Sidebar className="sideBar" defaultValue="Explore">
            <Menu>
              <MenuItem onClick={()=> handleButtonClick(videoPlayer)}> 
                <div>Home</div>
              </MenuItem>
              <MenuItem onClick={()=> handleButtonClick(aTest)}> 
                <div>Following</div>
              </MenuItem>
              <MenuItem> 
                <div>Playlist</div>
              </MenuItem>
              <MenuItem onClick={()=> handleButtonClick(searchSection)}> 
                <div>Explore</div>
              </MenuItem>
              <MenuItem> 
                <div>Profile</div>
              </MenuItem>
              <MenuItem className='uploadVideoClass' onClick={()=> handleButtonClick(upload)}> 
                <div>Upload Video</div>
              </MenuItem>
            </Menu>
          </Sidebar>
          {renderSelectedComponent()}
      </div>

    </div>
  );
}

export default App;
