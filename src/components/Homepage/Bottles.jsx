import React from 'react';
import Bottle from './Bottle';
import { wine1, wine2, wine3, wine4, wine5 } from '../../assets';

function Bottles() {
  return (
    <div>
      <div className='flex'>
        <Bottle bottleImg={wine1} name={'Blenders Pride'} />
        <Bottle bottleImg={wine2} name={'Matusalem'} />
        <Bottle bottleImg={wine3} name={'Remi Martin'} />
      </div>
      <div className='flex'>
        <Bottle bottleImg={wine4} name={'Old Monk'} />
        <Bottle bottleImg={wine5} name={'Hennessy'} />
        <Bottle bottleImg={wine3} name={'Remi Martin'} />
      </div>
    </div>
  );
}

export default Bottles;
