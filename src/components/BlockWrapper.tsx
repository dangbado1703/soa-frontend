import React from 'react';

interface IWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BlockWrapper = ({ children, className, ...rest }: IWrapperProps) => {
  return (
    <div
      {...rest}
      className={`2xl:px-[340px] md:px-8 px-4 flex flex-col justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default BlockWrapper;
