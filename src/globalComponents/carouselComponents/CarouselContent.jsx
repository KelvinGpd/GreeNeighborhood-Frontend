import carouselSlider from "../../assets/chevron-right.svg"

const CarouselContent = ({selectedMedia, shiftCarousel}) => {
    return (
        <div className = "carousel-content">
            <img 
                className = "carousel-slider"
                src = {carouselSlider} 
                style = {{transform: "scaleX(-1)"}}
                onClick = {() => shiftCarousel(1)}
            />
            <div className="carousel-media-display">
                <div>
                    <div className = "carousel-title">{selectedMedia.title}</div>
                    <div className = "carousel-description" >{selectedMedia.description}</div>
                </div>
                <div className="carousel-progress-bar">
                </div>
            </div>
            <img 
                className = "carousel-slider"
                src = {carouselSlider} 
                onClick = {() => shiftCarousel(-1)}
            />
        </div>

    )


}
export default CarouselContent;