import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className='col-span-2'>
      <CartItem />
      </div>

      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
      <div className='border'>
      
      </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
