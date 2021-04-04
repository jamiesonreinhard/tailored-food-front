import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import {projects} from '../../data/projects';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const WhoWeAre = () => {
  const [viewport, setViewport] = useState({
    latitude: -8.4606,
    longitude: -10.9408,
    zoom: 1,
    width: "100%",
    height: "400px"
  })
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, [])
  return(
    <div className="about">
      <div className="container">
        <h3 className="about-title">Tailored Food will be a key catalyst in <span style={{color: "#e0ad3e"}}>ending hunger by 2030</span> by building delicious, nutritious, low-cost food systems around the world.</h3>
        <div className="row">
          <div className="col-lg-7 col-sm-12 mb-3">
            <div className="mb-4">
                <h4 style={{fontSize: "20px", fontWeight: "bold"}}>Our Story</h4>
              
              
              
              March 23, 2016: At a hospital hit hard by Ebola on the outskirts of Monrovia, Liberia, I met with the Head Pediatrician, Dr. Jude. Over a long conversation Dr. Jude shared:

                <div className="about-story-quote">"I treat malnourished children at my hospital with what UNICEF provides me, but I know most of these kids will die once I send them home. And there is no advice I can give to their mothers - there simply is no nutritious food available in local markets".
                </div>

              This was the spark of a multi-year journey dedicated to designing and taking to market nutritious delicious low-cost food in Liberia. As we started diving further into the landscape of food and malnutrition globally, I realized what our team was learning each day in Liberia could have far broader implications. <br /><br />Tailored Food was born to partner with incredible local nutrition entrepreneurs in designing and selling food products to families hardest hit by malnutrition, food products that are delicious, culturally-relevant, incredibly nutritious, and locally produced. Tailored is not a food company, but is a lean social enterprise consultancy that partners with local leaders in the markets we work. We have produced and sold to the extreme poor close to a million meals in the last 3 years. Interested in learning more? <Link to="/contact">Please contact us.</Link>
              </div>
            
            <div>
              <h4 style={{fontSize: "20px", fontWeight: "bold"}}>What We Do</h4>
              <p>Design and take to market delicious, nutritious, low-cost food products in partnership with local entrepreneurs in the countries most affected by malnutrition.</p>
            </div>

            <div>
              <h4 style={{fontSize: "20px", fontWeight: "bold"}}>How We Do It</h4>
              <p>Find the most ambitious entrepreneurs and provide them with a team of top food industry experts to design, launch, and grow nutritious low-cost food products in their home markets. Build farmer supply chains, fit for purpose manufacturing facilities, and innovative distribution strategies, leveraging emerging trends like ecommerce, to create financially sustainable businesses that balance profit with real world impact.</p>
            </div>

            <div>
              <h4 style={{fontSize: "20px", fontWeight: "bold"}}>Why We Succeed</h4>
              <p>Tailored Food is well-positioned to pioneer an innovative form of international development, leveraging its expertise and networks to ensure nutritious, delicious, culturally relevant, and low-cost food is available to people suffering from malnutrition in their markets every day, without a reliance on continuous charitable funding. Our organization will bring product development and demand creation expertise that will be unleashed at the policy level globally while also being mobilized at the grassroots level in partnership with local for and non-profit food organizations.</p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12" style={{padding: "0px 16px"}}>
            <div className="text-center">
              <ReactMapGl 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                className="map-container"
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={viewport => {
                  setViewport(viewport);
                }}
                onClick={e => {
                  e.preventDefault();
                  setSelectedProject(null);
                }}
              >
                {projects.map(project => {
                  return(
                    <Marker 
                    key={project.location} 
                    latitude={project.coordinates[0]} 
                    longitude={project.coordinates[1]}
                  >
                    <div
                      className="marker"
                      onClick={e => {
                        e.preventDefault();
                        setSelectedProject(project);
                      }}
                    ></div>
                  </Marker>
                  )
                })}

                {selectedProject && (
                  <Popup 
                    latitude={selectedProject.coordinates[0]} 
                    longitude={selectedProject.coordinates[1]}
                    onClose={() => {
                      setSelectedProject(null);
                    }}
                  >
                    <div>
                      <h5>{selectedProject.location}</h5>
                      {/* <small>{selectedProject.product}</small> */}
                    </div>
                  </Popup>
                )}
              </ReactMapGl>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre;