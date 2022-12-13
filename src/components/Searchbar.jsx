import React from 'react';

import {
  wine_logo,
  cart_img,
  search_img,
  hamburger_icon,
} from '../assets/index.js';

function Searchbar() {
  return (
    <div>
      <div className='flex items-center justify-around h-20 font-sans'>
        <div className='flex justify-center h-12 basis-1/4'>
          <img src={wine_logo} className='object-contain rounded-md' />
          <div className='flex flex-col justify-center'>
            <span className='ml-1 text-3xl font-bold'>WINE</span>
          </div>
        </div>
        <div className='flex items-center justify-between bg-white rounded-full h-14 basis-1/2'>
          <div>
            <select className='ml-4 mr-4 font-semibold'>
              <option value='no selection'>ALL CATAGORIES</option>
              <option value='red'>Red</option>
              <option value='white'>White</option>
            </select>
            <input
              type='text'
              value='Search for product'
              className='text-gray-400 h-14'
            />
          </div>
          <img
            src={search_img}
            className='object-contain h-10 ml-5 rounded-full shadow-lg shadow-orange-200'
          />
        </div>
        <div className='flex items-center justify-center h-16 basis-1/4'>
          <span className='text-gray-400'>3 Items</span>
          <span>
            {'('}180${')'}
          </span>
          <img src={cart_img} className='object-contain ml-1 h-7' />
        </div>
      </div>

      <div className='flex justify-around h-12 mt-2'>
        <div className='basis-1/6'>
          <div className='flex justify-end'>
            <div className='flex'>
              <img src={hamburger_icon} />
              <select></select>
            </div>
            <span>Select Catagory</span>
          </div>
        </div>
        <div className='basis-1/2'>
          <div className='flex justify-start'>
            <span className='ml-3 text-gray-400'>Popular</span>
            <span className='ml-3'>Blender</span>
            <span className='ml-3'>Blender1</span>
            <span className='ml-3'>Blender2</span>
            <span className='ml-3'>Blender3</span>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='flex justify-around w-3/4'>
            <span className='ml-3'>Orders</span>
            <span className='ml-3'>Wishlist</span>
            <span className='ml-3'>Account</span>
            <span className='ml-3'>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
