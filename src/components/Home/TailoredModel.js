import react from 'react';

const TailoredModel = () => {
  return(
    <div className="tailored-model" id="tailored-model">
        
          <div className="tailored-model-card">
            <div className="tailored-model-card-icon-mobile">
              <h5>01</h5>
            </div>
            <div className="tailored-model-card-image-box mr-5">
              <img className="tailored-model-card-image" src="/images/tailored-model-1.jpg" alt="Anthropological Deep Dives">
              </img>
              <div className="tailored-model-card-image-icon">
                <h5>01</h5>
              </div>
            </div>
            <div className="tailored-model-card-details">
              <h5><strong>Anthropological Deep Dives</strong></h5>
              <p>Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape.</p>
            </div>
          </div>

          <div className="tailored-model-card">
            <div className="tailored-model-card-icon-mobile" style={{backgroundColor: "#e0ad3e" }}>
              <h5>02</h5>
            </div>
            <div className="tailored-model-card-details">
              <h5><strong>Holistic Food Systems </strong></h5>
              <p>Designing and building climate-sensitive agriculture value chains, production facilities, and distribution channels for healthy, delicious, local food.</p>
            </div>
            <div className="tailored-model-card-image-box ml-5">
              <img className="tailored-model-card-image" src="/images/tailored-model-2.jpg" alt="Anthropological Deep Dives"></img> 
              <div className="tailored-model-card-image-icon right" style={{backgroundColor: "#e0ad3e" }}>
                <h5>02</h5>
              </div>
            </div>
          </div>

          <div className="tailored-model-card"> 
            <div className="tailored-model-card-icon-mobile" style={{backgroundColor: "#51b688"}}>
              <h5>03</h5>
            </div>
            <div className="tailored-model-card-image-box mr-5">
            <img className="tailored-model-card-image" src="/images/tailored-model-3.jpg" alt="Anthropological Deep Dives"></img>
              <div className="tailored-model-card-image-icon" style={{backgroundColor: "#51b688"}}>
                <h5>03</h5>
              </div>
            </div>
            <div className="tailored-model-card-details">
              <h5><strong>Sustainable Social Enterprises</strong></h5>
              <p>Identifying and investing the skills and resources in local entrepreneurs, building businesses throughout the value chain that are financially sustainable for years to come.</p>
            </div>
          </div>

        </div>
  )
}

export default TailoredModel;