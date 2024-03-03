import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import './App.css';
import upload from './components/upload';
import videoPlayer from './components/video-player';
import searchSection from './components/search-section';
import { render } from '@testing-library/react';
import PrimarySearchAppBar from './components/navbar';
import FollowingComponent from './components/FollowingComponent';
import PlayListComponent from './components/PlayListComponent';
import ProfileComponent from './components/ProfileComponent';
import { SideBarData } from './components/SideBarData';

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

      <div className="rowsLayout">
        {/* <div className="searchRow">
          <div className='searchColumn'>
            <div className="logoContainer">
              <img src="./cclp/public/searchImage.png" className="searchImage" />
            </div>
            <div className="searchContainer" onClick={() => handleButtonClick(SearchSection)}>
              <img src="./cclp/public/searchImage.png" className="searchImage" />
              <input className="searchInput" type="text" />
            </div>
          </div>
        </div> */}
        <div className='navbarAndContent'>
          {/* <Sidebar className="sideBar" defaultValue="Explore">
            <Menu>
              <MenuItem onClick={() => handleButtonClick(videoPlayer)}>
                <div>Home</div>
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick(FollowingComponent)}>
                <div>Following</div>
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick(PlayListComponent)}>
                <div>Playlist</div>
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick(searchSection)}>
                <div>Explore</div>
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick(ProfileComponent)}>
                <div>Profile</div>
              </MenuItem>
              <MenuItem className='uploadVideoClass' onClick={() => handleButtonClick(upload)}>
                <div>Upload Video</div>
              </MenuItem>
            </Menu>
          </Sidebar> */}
          <div className='sideBarComponent'>
                <ul className='SidebarList'>
                    {SideBarData.map((val, key) => {
                        return <li key={key}
                            onClick={() => handleButtonClick(val.cmpnt)}
                            className='SidebarRow'>
                            <div id='sidebarIcon'>
                                {val.icon}
                            </div>
                            <div id='sidebarTitle'>
                                {val.title}
                            </div>
                        </li>;
                    })}
                </ul>

            </div>
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
