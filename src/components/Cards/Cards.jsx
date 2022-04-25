import React from 'react';
import './Cards.scss';
import { useGlobalContext } from '../../context/Context';
import Loading from '../Loading/Loading';
import Status from './Status';

const Cards = () => {
  const { characters, loading } = useGlobalContext();
  console.log(characters.info);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {characters.results.map((character) => {
          const { id, name, image, location, status } = character;
          return (
            <article className='col-lg-4 col-md-6 col-sm-12' key={id}>
              <div className='character position-relative mb-4'>
                <div className='circle position-absolute'></div>
                <img src={image} alt={name} />
                <div className='character-content position-absolute p-1'>
                  <h6>{name}</h6>
                  <span className='fs-6'>Last location:</span>
                  <p className='fs-6'>{location.name}</p>
                </div>
                <Status status={status} />
              </div>
            </article>
          );
        })}
      </>
    );
  }
};

export default Cards;
