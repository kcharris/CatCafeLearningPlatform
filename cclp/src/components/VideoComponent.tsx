import React from 'react';
import '../VideoComp.css'
import VideoCard from './VideoCard';


const VideoComponent: React.FC = () => {
  return (
    <div className="app-video-wrapper">
      <div className='appVideo'>
        <VideoCard
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\cat2.mp4'/>
        <VideoCard 
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\introVideo.mp4'/>
        <VideoCard 
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\cat3.mp4'/>
      </div>
    </div>
  );
};

export default VideoComponent;