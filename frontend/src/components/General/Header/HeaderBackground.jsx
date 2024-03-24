import React from 'react';
import './HeaderBackground.css'
import {motion} from 'framer-motion';
import { fadeIn } from "../../../variants.js";

const HeaderBackground =  ({ heading = 'Login', content = 'For those who are already our user!' }) => {
      return (
        <div>
        <div className="coverbackgroundimage">
          <div className="coverbg-image">
            <div className="covercontent-for-background-image">
            <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3}}
            className='cover-heading'
          >{heading}
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3}}
          className="coverheading-content"
        >{content}
        </motion.div>
          </div>
        </div>
        </div>
        </div>
      );
 
};

export default HeaderBackground;
