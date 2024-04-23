import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
const CartItem = () => {
  return (
    <div>
      <div className="p-5 shadow-lg border rounded-md">
        <div className="flex items-center">
          <div className="w-[10rem] h[10rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              className="w-full h-full object-cover object-top"
              src="https://i.imghippo.com/files/tyLRi1713425356.jpg"
              alt=""
            />
          </div>

          <div className="ml-5 space-y-1">
            <p className="font-semibold">Radha Krishna</p>
            <p className="opacity-70">Acrylic painting on Canvas</p>
            <p className="opacity-70 mt-2">Seller: Soumya Agrawal</p>
            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
              <p className="font-semibold">Rs 16000</p>
              <p className="opacity-50 line-through">Rs 8000 </p>
              <p className="text-green-600 font-semibold">50% Off</p>
            </div>
          </div>

        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </span>
        </div>
        <div>
        <Button>Remove</Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
