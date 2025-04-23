import Image from 'next/image';
import { TCardItemProps } from '../../../types';
import React from 'react';

const CardItem = ({ description, image, subtitle, title }: TCardItemProps) => {
  return (
    <div className="max-w-[340px] flex flex-col gap-6 max-sm:max-w-[200px]">
      <Image
        src={image}
        width={340}
        height={340}
        alt="title image"
        className="max-sm:hidden"
      />
      <Image
        src={image}
        width={200}
        height={200}
        alt="title image"
        className="lg:hidden"
      />
      <div className="flex flex-col gap-[2px]">
        <span className="text-title-red text-xl font-medium leading-normal max-sm:text-xs">
          {subtitle}
        </span>
        <span className="text-[#222] text-[28px] font-medium leading-8 max-sm:text-base max-sm:leading-normal">
          {title}
        </span>
        <div className="mt-3 flex max-sm:mt-2">
          <div className="w-[0.5px] h-auto bg-[#bbb] ml-2 mr-4" />
          <div className="w-full line-clamp-3 text-[rgba(86,44,44,0.80)] text-lg leading-6 font-normal max-sm:text-sm max-sm:-tracking-[1px]">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardItem);
