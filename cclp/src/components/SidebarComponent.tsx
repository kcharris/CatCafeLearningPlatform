import { SideBarData } from './SideBarData';
import React, { useState, useEffect } from 'react';
import '../App.css';
import videoPlayer from './video-player';

const SidebarComponent: React.FC = () => {

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

    return (
        <div className="layout">
            
            <div>
                {renderSelectedComponent()}
            </div>
        </div>
    );
};

export default SidebarComponent;