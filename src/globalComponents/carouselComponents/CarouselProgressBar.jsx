import carEmoji from "../../assets/car_emoji.svg"

const CarouselProgressBar = ({slidesLength, currentSlideIndex}) => {


    return (
        <div className = "carousel-progress-bar">
            {Array.from({ length: slidesLength }, (_, index) => (
                index === currentSlideIndex ? 
                <img src={carEmoji}/> : 
                <div
                    key = {index}
                    className = "carousel-progress-bar-inactive-slide"
                />
            ))}
        </div>
    )


}
export default CarouselProgressBar;
