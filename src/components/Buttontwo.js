import React from 'react';
import './Buttontwo.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn2--primary', 'btn2--outline', 'btn2--test'];

const SIZES = ['btn2--medium', 'btn2--large'];

export const Buttontwo = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/video' className='btn2-mobile'>
      <button
        className={`btn2 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};