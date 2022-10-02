import React, { useState, useEffect } from "react";
import LoadingMask from "../loadingMask/LoadingMask";
import PizzaCard from "./PizzaCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PizzaFetch() {
  //! DATA FETCH
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://lapiccolaitalia.herokuapp.com/api/pizza"
    );
    const jsonData = await result.json();
    //  console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="pizza-card">
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="pizzaContainer"
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 539,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 2,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 540,
            },
            items: 2,
            partialVisibilityGutter: 2,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {loading ? (
          <LoadingMask />
        ) : (
          data.map((pizza, index) => <PizzaCard pizza={pizza} key={index} />)
        )}
      </Carousel>
    </div>
  );
}

export default PizzaFetch;
