import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
// import css from './Loader.module.css';

const Spinner = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
