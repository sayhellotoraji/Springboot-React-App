import React from 'react'
import { Carousel } from 'react-bootstrap'

import slideshow1 from "components/images/slideshow1.jpg"
import slideshow2 from "components/images/slideshow2.jpg"

function Slideshow() {
    return (
<div style={{marginTop: '10px', width: '100%'}}>

  <Carousel interval="2500">

    <Carousel.Item style={{height:'240px'}}>
      <img
        className="d-block w-100"
        src={slideshow1}
        alt="First slide"
      />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item style={{height:'240px'}}>
      <img
        className="d-block w-100"
        src={slideshow2}
        alt="Second slide"
      />
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    
  </Carousel>
</div>
    )
}

export default Slideshow
