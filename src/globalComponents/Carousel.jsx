import { useState } from "react"
import { motion } from "framer-motion"
import carouselSlides from "../data/carousel.json"
import CarouselProgressBar from "./carouselComponents/CarouselProgressBar"
import CarouselContent from "./carouselComponents/CarouselContent"

const Carousel = () => {
    const slidesLength = carouselSlides.length;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedMedia, setSelectedMedia] = useState(carouselSlides[currentIndex]);
    
    const shiftCarousel = (shiftValue) => {
        const newIndex = (currentIndex + shiftValue + slidesLength) % slidesLength;
        setCurrentIndex(newIndex);
        setSelectedMedia(carouselSlides[newIndex]);
    };
    
    return (
        <div className = "carousel-container">
            <motion.div 
                className="carousel"
                whileHover = {{ scale : 1.02, x:10, y:-10 }}
            >
                <CarouselContent
                    shiftCarousel= {shiftCarousel}
                    selectedMedia= {selectedMedia} 
                />
                <CarouselProgressBar
                    currentSlideIndex = {currentIndex}
                    slidesLength = {slidesLength}
                />
            </motion.div>
            <div className = "box-shadow" style= {{background: "#3A7D44"}}/>
        </div>
    )

}
export default Carousel;