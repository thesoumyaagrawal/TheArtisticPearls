import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Scrollbars } from "react-custom-scrollbars";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import Footer from "../../components/Footer/Footer";
import "./style.css";
const About = () => {
  return (
    <div>
      <div className="vl-1"> </div>
      <div className="vl-2"> </div>
      <div className="vl-3"> </div>
      <div className="vl-4"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <Navbar />
        <HeaderBackground
          heading="About Us"
          content="Meet the Artist and Team"
        />
        <div className="about-div-parent-card-component">
          <div className="about-div-component">
            <div className="about-div-component-text">
              "The aim of art is to represent not the outward appearance of
              things, but their inward significance.”
            </div>
            <div className="about-div-component-artist-name">– Aristotle</div>
          </div>
        </div>
        <div className="about-card-artist-component">
          <div className="about-card-artist-message">
            <div className="about-card-artist-message-heading">
              Hello World!
            </div>
            <div className="about-card-artist-message-content">
              I'm Soumya Agrawal, the proud founder of The Artistic Pearls, an
              art company that transcends traditional boundaries to infuse life
              into every stroke, color, and canvas. By profession, I am a
              software developer, but by choice, I am a self-taught artist
              driven by passion and creativity.
              <br />
              <br />
              At The Artistic Pearls, we go beyond merely creating artwork. We
              breathe life into it. With a diverse range of mediums at our
              disposal, including acrylic, watercolor, poster color, pencil
              color, soft pastel, blow ink, canvas, and oil paintings, we
              believe in exploring the endless possibilities of artistic
              expression. Our portfolio extends to the realms of Mandala and
              Rangoli art, showcasing the versatility and depth of our creative
              endeavors.
              <br />
              <br />
              Having delivered over 50+ paintings to satisfied clients, we take
              pride in the unique and personalized touch we bring to each piece.
              Our creations are more than just visual representations, they are
              an embodiment of emotions, stories, and individuality.
              <br />
              <br />
              As a passionate artist, I not only create but also love to share
              my artistry with others through engaging demonstrations. The joy
              of inspiring and fostering a love for art in others is at the
              heart of what we do at The Artistic Pearls. Join us on this
              artistic journey, where every stroke is a brush with life, and
              every canvas is a world waiting to be explored. Welcome to The
              Artistic Pearls, where art is not just created but crafted with a passion and purpose.
            </div>
          </div>
          <div className="about-right-card-image-component"></div>
        </div>
         
        <div className="about-team-introduction-card">
        
        </div>
        <Footer />
      </Scrollbars>
    </div>
  );
};

export default About;
