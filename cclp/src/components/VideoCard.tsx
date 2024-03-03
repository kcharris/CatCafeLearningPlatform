import React, { useRef, useState } from 'react';
import '../VideoComp.css'
import VideoCardSidebar from './VideoCardSidebar';

interface VideoProps {
  avatarSrc: string;
  likes: number;
  comments: number;
  videoSrc: string;
}
const VideoCard: React.FC<VideoProps> = ({avatarSrc, likes, comments, videoSrc}) => {
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
      <VideoCardSidebar
          avatarSrc={avatarSrc} likes={likes} comments={comments}      />
        <video
        ref = {videoRef}
        onClick={onVideoPress}
        className='videoPlayer'
        src={videoSrc}
        loop = {true}/>
      </div>
    </div>
  );
};

export default VideoCard;