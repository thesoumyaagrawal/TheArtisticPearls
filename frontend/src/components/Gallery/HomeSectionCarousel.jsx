import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const [activeIndex,setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    560: { items: 2 },
    1024: { items: 4 },
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item);
const items = [1,1,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard key={item} />);

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5" border>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />{activeIndex!==items.length-5 &&
        <div className="absolute top-1/2 transform -translate-y-1/2 left=0">
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            aria-label="previous"
            sx={{
              bgcolor: "white",
              transform: "translateX(50%) rotate(90deg)",
              color: "black",
              left: "-5rem",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        </div>}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <Button
            variant="contained"
            onClick={slideNext}
            aria-label="next"
            sx={{
              bgcolor: "white",
              transform: "translateX(50%) rotate(90deg)",
              color: "black",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
