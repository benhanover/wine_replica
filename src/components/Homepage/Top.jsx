import React from 'react';
import { background_image } from '../../assets';

function Top() {
  return (
    <div className='relative h-96'>
      <div>
        <img src={background_image} />
      </div>
      <div className='absolute w-3/5 h-12 bg-white rounded-full bottom-4 right-40'>
        <div className='flex items-center justify-between h-12 text-sm text-gray-400'>
          <div className='ml-4'>
            <span>HOME - CATELOG - OLD WINE</span>
          </div>
          <div className='mr-4'>
            <span>
              Sort by <span className='text-cyan-600'>Popularity </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
