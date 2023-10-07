import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

interface CarouselProps{
    images : any
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    
    const sliderImage = [
        {
            url : images[0]+".jpg"
        },
        {
            url : images[1]+".jpg"
        }
    ]
    return (
      
          <SimpleImageSlider
          
            width={300}
            height={200}
            images={sliderImage}
            showBullets={true}
            showNavs={true}
            autoPlay={false}
              
          /> 
  )
}

export default Carousel;
