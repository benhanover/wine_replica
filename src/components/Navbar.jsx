import React from 'react';
import UsFlag from '../assets/flag-english.png';

function Navbar() {
  return (
    <div className='flex justify-around pt-2 pb-2 text-gray-400 bg-neutral-50'>
      <div className='flex justify-center basis-1/4'>
        <div className='h-5 w-44'>
          <span className='pr-20 cursor-pointer hover:text-gray-600 hover:text-lg '>
            About Store
          </span>
        </div>
      </div>
      <div className='flex basis-1/2 justify-evenly'>
        <div className='h-5 w-36'>
          <span className='cursor-pointer hover:text-gray-600 hover:text-lg'>
            Payment
          </span>
        </div>
        <div className='h-5 w-36'>
          <span className='cursor-pointer hover:text-gray-600 hover:text-lg'>
            Shipping
          </span>
        </div>
        <div className='h-5 w-36'>
          <span className='cursor-pointer hover:text-gray-600 hover:text-lg'>
            Terms
          </span>
        </div>
        <div className='h-5 w-36'>
          <span className='cursor-pointer hover:text-gray-600 hover:text-lg'>
            Refunds
          </span>
        </div>
        <div className='h-5 w-36'>
          <span className='cursor-pointer hover:text-gray-600 hover:text-lg'>
            Help-Center
          </span>
        </div>
      </div>
      <div className='flex justify-center h-5 basis-1/4 w-36'>
        <span className='pl-20 cursor-pointer hover:text-gray-600 hover:text-lg'>
          English
        </span>
        <img src={UsFlag} className='object-none mt-1' />
      </div>
    </div>
  );
}

export default Navbar;
