import React from 'react'
import './Buttons.css';

const Buttons = ({ buttonText, textColor, buttonColor, height, width, EndIconComponent, borderRadius }) => {
      const buttonStyle = {
        color: textColor,
        backgroundColor: buttonColor,
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 31px', // Adjust padding as needed
        border: 'none',
        borderRadius: borderRadius, // Adjust border radius
        cursor: 'pointer',
      };
    
      return (
        <button className='Buttons-custom' style={buttonStyle}>
          {buttonText}
          {EndIconComponent && <span style={{ marginLeft: '10px' }}><EndIconComponent /></span>}
        </button>
      );
    };


export default Buttons

