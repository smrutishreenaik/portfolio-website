import React from 'react'
import './middle.css'
import Carousel from "react-elastic-carousel"
import Item from './Item';
import One from './reviews/one';
import Two from './reviews/two';
import Three from './reviews/three';



function Middle() {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white", fontSize: "20px" }}>TESTIMONIALS</h1>
      <div className="App">
        <Carousel >
          <Item><One/></Item>
          <Item><Two/></Item>
          <Item><Three/></Item>
        </Carousel>
      </div>

        </div>
    )
}

export default Middle
