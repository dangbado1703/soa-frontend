import React from 'react';
import { createRipple } from '../../utils/helper';

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColorRipple?: string;
}

const ButtonRipple = ({
  children,
  className,
  bgColorRipple = 'rgba(255, 255, 255, 0.6)',
  onClick,
  ...rest
}: IPropsButton) => {
  return (
    <button
      {...rest}
      className={`relative flex items-center justify-center overflow-hidden transition duration-200 ease-in-out cursor-pointer ${className}`}
      onClick={(e) => {
        createRipple(e, bgColorRipple);
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </button>
  );
};

export default ButtonRipple;
