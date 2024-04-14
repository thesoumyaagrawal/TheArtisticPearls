import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { Scrollbars } from "react-custom-scrollbars";
import ProductCard from "../../components/Product/ProductCard";
import ProductDisplay from "../../components/Product/ProductDisplay";
import Footer from "../../components/Footer/Footer";
const Product = () => {
  return (
    <div>
    <div className="vl-1"> </div>
    <div className="vl-2"> </div>
    <div className="vl-3"> </div>
    <div className="vl-4"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <Navbar />
        <ProductDisplay />
        <Footer />
        </Scrollbars>
    </div>
  )
}

export default Product