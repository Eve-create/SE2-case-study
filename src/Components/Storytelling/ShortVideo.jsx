import React from 'react'
import './ShortVideo.css'
import intro from "../Assets/vid.mp4"

const ShortVideo = () => {
  return (
    <div className="digital-story-telling">
        <div className="video-container">
            
            <video
            src={intro}
            autoPlay
            loop
            />
        </div>
    </div>
  );
}

export default ShortVideo;