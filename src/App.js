import "./App.css";
import Customerreview from "./Components/Customerreview";
import Data from "./Components/data";
import Bottom from "./Components/Bottom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };
  return (
    <div>
      <div className="App">
        <div className="heading">
          <p className="main-heading">TESTIMONALS</p>
          <p className="sub-heading">TESTIMONALS</p>
          <p className="caption">What our Fantastic Users say</p>
        </div>
        <div className="main-section"></div>
        <Slider {...settings}>
          {Data.map((item) => (
            <Customerreview item={item} />
          ))}
        </Slider>
      </div>
      <Bottom />
    </div>
  );
}

export default App;
