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
  const pageTabs = pages.map((page) => {
    return(
      <a className={page === active ? "about-tabs-link active" : "about-tabs-link"} onClick={() => setActive(page)}><h3>{page}</h3></a>
    )
  })

  return(
    <div>
      <AboutBanner />
      <div className="about-tabs">
        {pageTabs}
      </div>
      {active === "Who We Are" ? <WhoWeAre /> : <Team />}
    </div>
  )
}

export default About;