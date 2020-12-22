import react from 'react';
import background from '../images/bg-video.mov'

const BgVideo = () => {
  return(
    <div className="bg-video">
      <video className="bg-video-content" autoPlay muted loop>
        <source src={background} type="video/mp4" />
        Your browser is not supported
      </video>
    </div>
  )
}

export default BgVideo;
