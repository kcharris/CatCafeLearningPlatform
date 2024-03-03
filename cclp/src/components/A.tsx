import React from 'react';
import '../VideoComp.css'
import VideoCard from './VideoCard';

const Atest: React.FC = () => {
  return (
    <div>
      <div className='appVideo'>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    </div>
  );
};

export default Atest;