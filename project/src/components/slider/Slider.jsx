import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const sliderData = [
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle2.png",
  },
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle3.png",
  },
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle4.png",
  },
];

const slideContainerStyle = {
  width: "404px",
  height: "582px",
  position: "relative",
  padding: "0",
};
const slideContainerStyle2 = {
  display: "flex",
  flexflow: "row nowrap",
  gap: "1rem",
  width: "502px",
  height: "486px",
  position: "relative",
  overflow: "hidden",
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    const nxtIndex = newIndex === 0 ? 2 : newIndex - 1;
    setCurrentIndex(newIndex);
    setNextIndex(nxtIndex);
    console.log(newIndex);
    console.log(nxtIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const nxtIndex = newIndex === 2 ? 1 : newIndex + 1;
    setCurrentIndex(newIndex);
    setNextIndex(nxtIndex);
    console.log(newIndex);
    console.log(nxtIndex);
  };

  const sliderStyle = {
    backgroundImage: `url(${sliderData[currentIndex].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="container-fluid container_slider">
      <div className="row m-0">
        <div className="col-12 col-md-4 slider_info">
          <h2 className="title">50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button type="button" className="btn">
            Explore More
          </button>
        </div>
        <div className="col-12 col-md-4" style={slideContainerStyle}>
          <div className="show-image">
            <div>
              <p>
                01 <BsDashLg /> Bed Room
              </p>
              <h4>Inner Peace</h4>
            </div>
            <button className="btn">
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-4 p-0 slideswrap">
          <div className="bg-white" style={slideContainerStyle2}>
            {sliderData &&
              sliderData.map((item, key) => {
                return key === 0 ? (
                  <div
                    style={{
                      backgroundImage: `url(${sliderData[currentIndex].img})`,
                    }}
                    key={key}
                    className="slide m-0"
                  ></div>
                ) : (
                  <div
                    style={{
                      backgroundImage: `url(${sliderData[nextIndex].img})`,
                    }}
                    key={key}
                    className="slide m-0"
                  ></div>
                );
              })}
          </div>
          <div className="controls">
            {currentIndex > 0 && (
              <button type="button" onClick={prevSlide} className="arrow left">
                <PiLessThan />{" "}
              </button>
            )}
            {currentIndex !== sliderData.length - 1 && (
              <button type="button" onClick={nextSlide} className="arrow right">
                <PiGreaterThan />
              </button>
            )}
          </div>
          <div className="slideIndicators">
            {sliderData &&
              sliderData.map((item, key) => {
                return (
                  <span className={currentIndex === key ? "slideIndicator active" :"slideIndicator"} key={key}><GoDotFill /></span>
                );
              })
              }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
