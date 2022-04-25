import React, { useCallback } from 'react';
import style from './Cards.scss';

function Status({ status }) {
  const statusClass = useCallback(() => {
    switch (status) {
      case 'Dead':
        return (
          <div className='badge bg-danger position-absolute'>{status}</div>
        );

      case 'Alive':
        return (
          <div className='badge bg-success position-absolute'>{status}</div>
        );

      case 'unknown':
        return (
          <div className='badge bg-secondary position-absolute text-capitalize'>
            {status}
          </div>
        );
    }
  }, [status]);
  return <>{statusClass()}</>;
}

export default Status;
