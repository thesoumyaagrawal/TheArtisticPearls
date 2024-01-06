import React from "react";
// import CustomButton from "./CustomButton";
// import Arrowicon from "../SVGIcons/Arrowicon"; // Corrected import
import "./background.css";

const backgroundimage = () => {
  return (
    <div>
    <div className="backgroundimage">
      <div className="bg-image">
        <div className="content-for-background-image">
          <div className="content-heading">The Artistic Pearls</div>
          <div className="content-subheading">
              Embark on a journey through the vibrant strokes & captivating
              hues of Artistic Pearls, where art is not just created, but
              crafted with passion & purpose.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default backgroundimage;

// <CustomButton
// buttonText="Get Started"
// textColor="#333333"
// buttonColor="#CDA274"
// height="75px"
// width="238px"
// EndIconComponent={() => <Arrowicon color="#FFFFFF" />}
// borderRadius="18px"
// />