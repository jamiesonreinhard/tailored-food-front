import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import {projects} from '../../data/projects';
import mapboxgl from 'mapbox-gl';
import AboutBanner from './AboutBanner';
import WhoWeAre from './WhoWeAre';
import Team from './Team';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const About = () => {

  const pages = ["Who We Are", "Meet the Team"]
  const [active, setActive] = useState(pages[0])

  return(
    <div>
      <AboutBanner />
      <div className="container">
        <div className="about-tabs mb-5">
          <div className="row">
            <div className="col-6 col-lg-4 text-center">
              <a className={pages[0] === active ? "about-tabs-link active" : "about-tabs-link"} onClick={() => setActive(pages[0])}><h4>{pages[0]}</h4></a>
            </div>
            <div className="col-6 col-lg-4 text-center" >
              <a className={pages[1] === active ? "about-tabs-link active" : "about-tabs-link"} onClick={() => setActive(pages[1])}><h4>{pages[1]}</h4></a>
            </div>
          </div>
        </div>
        {active === "Who We Are" ? <WhoWeAre /> : <Team />}
      </div>
    </div>
  )
}

export default About;