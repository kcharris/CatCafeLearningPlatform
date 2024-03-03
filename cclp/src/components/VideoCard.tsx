import React, { useRef, useState } from 'react';
import '../VideoComp.css'

const VideoCard: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const onVideoPress = () => {
    if(isVideoPlaying) {
      videoRef.current?.pause();
      setisVideoPlaying(false);
    }
    else {
      videoRef.current?.play();
      setisVideoPlaying(true);
    }
  }
  return (
    <div>
      <div className='videoCard'>
        <video
        ref = {videoRef}
        onClick={onVideoPress}
        className='videoPlayer'
        src='videos\pexels_videos_Street_at_night.mp4'
        loop = {true}/>
      </div>
    </div>
  );
};

export default VideoCard;