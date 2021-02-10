import react from 'react';
import BgVideo from '../../components/BgVideo';
import TailoredModel from './TailoredModel';
import Partners from './Partners';
import HomeFooter from './HomeFooter';


const Home = () => {
  
  return(
    <div className="home">
        {/* <BgVideo /> */}
      <div className="home-heading">
        
        <div className="home-heading-box">
          <small className="home-secondary-title"><strong>WE BUILD FOOD SYSTEMS THAT ARE</strong></small>
          <h1 className="home-title mb-4">Nutritious, Delicious, Affordable & Local</h1>
          <h5 className="home-tertiary-title">We aim to end hunger by 2030 through local nutrition entrepreneurship.</h5>
        </div>
        
      </div>

      <div className="container">
        <TailoredModel />
        <Partners />
        <HomeFooter />
      </div>
    </div>
  )
}

export default Home;