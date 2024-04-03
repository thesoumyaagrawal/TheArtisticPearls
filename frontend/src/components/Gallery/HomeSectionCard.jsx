import React from "react";
//import img from "../../assets/myPaintings/buddha_Mandala.jpg";
const HomeSectionCard = ({ product }) => {

  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          src="https://drive.google.com/file/d/1KkCJu5uWn-B5YwH4IGEWUkH99xEWeYHc/view?usp=drive_link"
          alt="test"
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.description}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
