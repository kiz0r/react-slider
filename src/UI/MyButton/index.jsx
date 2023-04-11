import React from 'react';
import { myBtn } from './MyButton.module.sass';

const MyButton = ({ children, ...props }) => {
  return (
    <button className={myBtn} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
