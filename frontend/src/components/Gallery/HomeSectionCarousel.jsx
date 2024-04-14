import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import acrylic_painting from "../../Data/acrylic_painting.js";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    560: { items: 2 },
    1024: { items: 4.5 },
  };

  const items = acrylic_painting.slice(0, 6).map((item) => <HomeSectionCard key={item} product={item} />);

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
