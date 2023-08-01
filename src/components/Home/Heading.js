// import BackgroundSlider from 'react-background-slider'
// import image1 from '../../images/home-bg-1.jpg'
// import image2 from '../../images/home-bg-2.jpg'
// import image3 from '../../images/home-bg-3.jpg'
// import image4 from '../../images/home-bg-4.jpg'
import {BsChevronDown} from 'react-icons/bs'


const Heading = () => {
  return(
    <div className="home-heading">
        {/* <BackgroundSlider
        images={[image1, image2, image3, image4]}
        duration={8} transition={0.8} 
        /> */}
        <div className="home-heading-box">
          <div className="principal">
            <small className="home-secondary-title">We build food systems that are</small>
            <h1 className="home-title mb-4">Nutritious, Delicious, Affordable & Local</h1>
            <small className="home-tertiary-title">We aim to end hunger by 2030 through local nutrition entrepreneurship.</small>
          </div>
        </div> 
        <a href="#tailored-model"><BsChevronDown size={50}/></a>
      </div>
  )
}

export default Heading;
