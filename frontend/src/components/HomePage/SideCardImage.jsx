import React from "react";
import "./SideCardImage.css";
import Callicon from "../SVGIcons/Callicon";
import Arrowicon from "../SVGIcons/Arrowicon"; // Corrected import
import CustomButton from "./CustomButton";

const SideCardImage = () => {
  return (
    <div className="card-image-component">
      <div className="left">
        <div className="left-text-heading">
          Crafting the Canvas: Elevating the Art of Stylish Living, Stylishly
        </div>
        <div className="left-text-content">
          Embark on a journey where creativity intertwines with style at
          Artistic Pearls. We weave the art of stylish living into every
          masterpiece, inviting you to explore a world where elegance meets
          expression. Stylishly curated, uniquely yours – discover the essence
          of life through our crafted canvases.
        </div>
        <div className="contact-block">
        <div className="contact">
          <Callicon />
          <div className="text-phone-number">
            <div className="contact-number">+91 73892 81804</div>
            <div className="contact-number-description">
              Contact Hours: 9 AM - 5 PM IST
            </div>
            <div className="contact-number-description">
              Availability: Monday-Friday
            </div>
          </div>
        </div>
        </div>
        <CustomButton
        buttonText="Get Free Estimate"
        textColor="white"
        buttonColor="#292F36"  // Add # before the hex code
        height="75px"
        width="238px"
        EndIconComponent={Arrowicon}
        borderRadius="18px"
      />
      </div>
      <div className="right">
        <div className="right-card-image-component"></div>
      </div>
    </div>
  );
};

export default SideCardImage;
