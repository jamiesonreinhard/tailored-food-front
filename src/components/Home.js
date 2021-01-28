import react from 'react';
import BgVideo from './BgVideo';


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
        <div className="tailored-model">
        
          <div className="tailored-model-card">
            <div className="tailored-model-card-icon">
              <h5 className="tailored-model-card-number">01</h5>
            </div>
            <h5><strong>Anthropological Deep Dives</strong></h5>
            <p>Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape.</p>
          </div>
          <div className="tailored-model-card">
            <div className="tailored-model-card-icon">
              <h5 className="tailored-model-card-number">02</h5>
            </div>
            <h5><strong>Holistic Food Systems </strong></h5>
            <p>Designing and building climate-sensitive agriculture value chains, production facilities, and distribution channels for healthy, delicious, local food.</p>
          </div>
          <div className="tailored-model-card">
            <div className="tailored-model-card-icon">
              <h5 className="tailored-model-card-number">03</h5>
            </div>
            <h5><strong>Sustainable Social Enterprises</strong></h5>
            <p>Identifying and investing the skills and resources in local entrepreneurs, building businesses throughout the value chain that are financially sustainable for years to come.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home;