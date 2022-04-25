import React from 'react';
import './Loading.scss';
import loader from '../../assets/img/loader.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={loader} alt='' className='loader' />
    </div>
  );
};

export default Loading;
