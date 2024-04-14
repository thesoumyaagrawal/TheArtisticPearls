import React from "react";
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://i.ibb.co/cbTccJB/image-emily.jpg"
          alt="test failed"
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className='font-bold opacity-60'> Still Life Painintg</p>
          <p>Acrylic Painting on canvas The Still life painitng</p>
        </div>
        <div className='flex items-center space-x-2'>
        <p className='font-semibold'>Rs.199</p>
        <p className='line-through opacity-50'>Rs.1999</p>
        <p className='text-green-600 font-semibold'>70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
