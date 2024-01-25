import React from 'react';
import './HeaderBackground.css'

const HeaderBackground =  ({ heading = 'Login', content = 'For those who are already our user!' }) => {
      return (
        <div>
        <div className="coverbackgroundimage">
          <div className="coverbg-image">
            <div className="covercontent-for-background-image">
            <div className='cover-heading'>{heading}</div>
            <div className="coverheading-content">{content}</div>
          </div>
        </div>
        </div>
        </div>
      );
 
};

export default HeaderBackground;
