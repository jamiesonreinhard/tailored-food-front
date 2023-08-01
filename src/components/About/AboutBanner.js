import react from 'react';

const AboutBanner = (props) => {
  const {pages, active} = props.props;
  
  return(
    <>
      {pages[0] === active ? (
        <div className="about-banner">
        </div>
      ) : (
        <div className="about-banner-team">
        </div>
      )}
    </>
    
  )
}

export default AboutBanner;
