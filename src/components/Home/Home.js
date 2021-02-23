import react from 'react';
import BgVideo from '../../components/BgVideo';
import TailoredModel from './TailoredModel';
import Partners from './Partners';
import HomeFooter from './HomeFooter';
import Heading from './Heading';


const Home = () => {
  
  return(
    <div className="home">
      <Heading />
      <div className="container">
        <TailoredModel />
        <Partners />
        <HomeFooter />
      </div>
    </div>
  )
}

export default Home;