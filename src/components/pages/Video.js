import React from 'react';
import '../../App.css';
import '../../simple.css';
import ReactPlayer from 'react-player';

function Video() {
  return (
<div className="player-wrapper">
  <ReactPlayer url='https://www.youtube.com/watch?v=1MFurJmxNCs&t=4s' className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}/>
  
</div>


  );
}

export default Video;