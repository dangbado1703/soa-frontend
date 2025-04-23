'use client';

import { TBlockSessionProps } from '../../types';

const BlockSesson = ({
  title,
  subtitle,
  className,
  bgTitle,
  ...rest
}: TBlockSessionProps) => {
  return (
    <div
      {...rest}
      className={`flex flex-col justify-center items-center w-full gap-4 max-sm:gap-1 ${className}`}
    >
      <div className="flex items-center justify-center relative w-full">
        <div className="border border-[#BBBBBB] absolute w-full" />
        <div
          className={`text-title-red 2xl:text-[52px] text-[40px] font-semibold leading-[60px] uppercase px-10 relative z-[6] max-sm:text-2xl max-sm:leading-normal max-sm:px-4 ${
            bgTitle ? bgTitle : 'bg-white'
          }`}
        >
          <span>{title}</span>
        </div>
      </div>
      {subtitle ? (
        <div className="text-title-black 2xl:text-2xl text-[20px] font-normal leading-[30px] tracking-[0.25px] max-sm:text-sm max-sm:leading-normal">
          <span>{subtitle}</span>
        </div>
      ) : null}
    </div>
  );
};

export default BlockSesson;
