import React from 'react';
import '../VideoComp.css'
import VideoCard from './VideoCard';


const Atest: React.FC = () => {
  return (
    <div className="app-video-wrapper">
      <div className='appVideo'>
        <VideoCard
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\pexels_videos_Street_at_night.mp4'/>
        <VideoCard 
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\pexels_videos_Street_at_night.mp4'/>
        <VideoCard 
        avatarSrc = "profilePic.png"
        likes = {0}
        comments = {0}
        videoSrc='videos\pexels_videos_Street_at_night.mp4'/>
      </div>
    </div>
  );
};

export default Atest;