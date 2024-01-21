import { useState } from "react"
import carouselSlides from "../data/carousel.json"

const Carousel = () => {
    const [selectedMedia, setSelectedMedia] = useState(carouselSlides[0])
    
    return (
        <div className="carousel">
            <img src = "../assets/chevron-right.svg" width = "100%"/>
            
            <div className="carousel-media-display">

                <div className="carousel-progress-bar">
                </div>
            </div>

            <img src = "../assets/chevron-right.svg" width = "100%"/>
        </div>
    )

}
export default Carousel