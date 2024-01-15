import React from 'react';
import Icons from '../assets/sprite.svg';

export const Icon = ({ id, className, width, height }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
};
