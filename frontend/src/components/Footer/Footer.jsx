import React from 'react'
import LinkedInIcon from '../SVGIcons/FooterIcon/LinkedInIcon';
import InstagramIcon from '../SVGIcons/FooterIcon/InstagramIcon';
import TwitterIcon from '../SVGIcons/FooterIcon/TwitterIcon';
import FacebookIcon from '../SVGIcons/FooterIcon/FacebookIcon';
import './style.css';

const Footer = () => {
  return (
    <div className='Footer-card-class'>
      <div className='Footer-body-structure'>

      <div className='Footer-body-col-1'>
      <div className='Footer-body-Comapny-Heading'>The Artistic Pearls</div>
      <div className='Footer-body-Company-subheading'>Where Art is not just created but crafted with Passion and Purpose.</div>
      <div className='Footer-body-social-links'>
      <a href='#Facebook'> <FacebookIcon /> </a>
      <a href='#twitter'> <TwitterIcon/> </a>
      <a href='#linkedin'><LinkedInIcon /></a>
      <a href='instagram'><InstagramIcon/></a>
      </div>
      </div>

      <div className='Footer-body-col-2'>
      <div className='Footer-body-col-heading'>Pages</div>
      <div className='Footer-body-col-content'>Home</div>
      <div className='Footer-body-col-content'> About the Artist</div>
      <div className='Footer-body-col-content'>Online Classes</div>
      <div className='Footer-body-col-content'>Gallery</div>
      <div className='Footer-body-col-content'>Blogs</div>
      <div className='Footer-body-col-content'>Contact Me</div>
      </div>

      <div className='Footer-body-col-3'>
      <div className='Footer-body-col-heading'>Medium</div>
      <div className='Footer-body-col-content'>Acrylic Painting</div>
      <div className='Footer-body-col-content'>Poster Colour</div>
      <div className='Footer-body-col-content'>Mandala Art</div>
      <div className='Footer-body-col-content'>Lippan Art</div>
      <div className='Footer-body-col-content'>Rangoli</div>
      <div className='Footer-body-col-content'>Drawing/Sketching</div>
      </div>

      <div className='Footer-body-col-4'>
      <div className='Footer-body-col-heading'>Contact</div>
      <div className='Footer-body-col-content'>H.No 106 Sector-3, 1st Floor Geetanjali Nagar, Raipur, Chhattisgarh, INDIA.</div>
      <div className='Footer-body-col-content'>theartisticpearls@gmail.com </div>
      <div className='Footer-body-col-content'>(+91)-7389281804</div>
      </div>
      </div>
      <div className='Footer-body-copyright-text'>Copyright © The Artistic Pearls | Designed and Developed by Soumya Agrawal</div>

    </div>
  )
}

export default Footer
