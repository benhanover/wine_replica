import React, { useState } from 'react';

function Bottle({ bottleImg, name }) {
  const [showBuyNow, setShowBuyNow] = useState(false);
  const mouseEnter = () => {
    setShowBuyNow(true);
  };

  const mouseLeave = () => {
    setShowBuyNow(false);
  };
  return (
    <div className='relative flex flex-col w-56 h-72'>
      <div
        className='h-64 bg-white border-2 border-transparent rounded-md hover:border-2 hover:border-rose-600'
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className='flex items-center justify-center mr-2 h-36'>
          <img src={bottleImg} className='object-contain h-28' />
        </div>
        <div className='flex justify-center'>
          <div className='w-40 h-32 text-center '>
            <p className='text-center'>{name}</p>
            <p className='text-sm'>Lorem ipsum is simply dummy text.</p>
          </div>
        </div>
      </div>
      <div
        className='absolute w-32 h-10 bottom-3 left-11'
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {showBuyNow && (
          <div className='flex items-center justify-center w-full h-full bg-red-600 rounded-full'>
            <span className='font-bold text-white'>Buy Now</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bottle;
