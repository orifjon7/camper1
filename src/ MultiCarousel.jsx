import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car1 from './modal rasm/multicarul car/11 1.svg'
import car2 from './modal rasm/multicarul car/c a-3.svg'
import car3 from './modal rasm/multicarul car/camp-2.svg'
import car4 from './modal rasm/multicarul car/ccar-2.svg'
import {MultiWrapper} from './Motor/style';
import {YoutubeCarText}  from './Motor/style';

import line from './modal rasm/Line 2-2.svg';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const  MultiCarousel = () => {
  return (
    <>
    <YoutubeCarText> <p>Recommend</p>
   <img src={line} alt="line" /> </YoutubeCarText>
    
    <div> <Carousel responsive={responsive}>
    <MultiWrapper>
      <img src={car1} alt="car1" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car2} alt="car2" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car3} alt="car3" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car4} alt="car4" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car1} alt="car1" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car2} alt="car2" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car3} alt="car3" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
    <MultiWrapper>
      <img src={car4} alt="car4" />
    <p>Knaus</p>
    <button>Discover the range</button>
    <select  name="" id=""><option>Choose a model</option></select>
    </MultiWrapper>
  </Carousel></div>
  </>
  )
}

export default  MultiCarousel