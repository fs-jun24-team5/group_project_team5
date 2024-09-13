import React, { useState } from 'react';
import Img from '../../assets/imgs/Iphone_XS.png';
import Heart from '../../assets/icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/filled_heart_icon.svg';

export const Card: React.FC = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  return (
    <div className="card">
      <img src={Img} alt="phone" />
      <h3 className="card__text">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h3>
      <div className="card__price">
        <h3 className="card__price-regular">$799</h3>
        <h3 className="card__price-discount">$899</h3>
      </div>
      <div className='card__separator'></div>
      <div className="card__specs">
        <div className="card__specs-screen">
          <p className="card__specs-screen--left">Screen</p>
          <p className="card__specs-screen--right">5.8” OLED</p>
        </div>
        <div className="card__specs-memory">
          <p className="card__specs-memory--left">Capacity</p>
          <p className="card__specs-memory--right">64 GB</p>
        </div>
        <div className="card__specs-ram">
          <p className="card__specs-ram--left">RAM</p>
          <p className="card__specs-ram--right">4 GB</p>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__buttons-add">Add to cart</button>
        <button className="card__buttons-heart" onClick={() => setIsHeartActive(!isHeartActive)}>
          {isHeartActive ? <img src={FilledHeart} alt="" /> : <img src={Heart} alt="" />}
        </button>
      </div>
    </div>
  );
};
