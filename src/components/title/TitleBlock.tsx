'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CardItem from './CardItem';
import { TCardItemProps } from '../../../types';
import { ITEM_WIDTH } from '../../../utils/contants';
import ButtonRipple from '../ButtonRipple';

const TitleBlock = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollX = useRef(0);
  const requestRef = useRef(0);
  const t = useTranslations('HomePage');
  const fakeItem: TCardItemProps[] = [
    {
      description: t('cardSession.description'),
      image: '/title-image-1.png',
      subtitle: t('cardSession.subtitle'),
      title: t('cardSession.title'),
    },
    {
      description: t('cardSession.description'),
      image: '/title-image-2.png',
      subtitle: t('cardSession.subtitle'),
      title: t('cardSession.title'),
    },
    {
      description: t('cardSession.description'),
      image: '/title-image-3.png',
      subtitle: t('cardSession.subtitle'),
      title: t('cardSession.title'),
    },
    {
      description: t('cardSession.description'),
      image: '/title-image-3.png',
      subtitle: t('cardSession.subtitle'),
      title: t('cardSession.title'),
    },
  ];

  const repeatedItems = [...fakeItem, ...fakeItem];

  useEffect(() => {
    const animate = () => {
      if (!sliderRef.current) return;
      scrollX.current += 1;
      const maxScroll = fakeItem.length * ITEM_WIDTH;
      if (scrollX.current >= maxScroll) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(0px)`;
        scrollX.current = 0;
      } else {
        sliderRef.current.style.transition = 'transform 0.2s linear';
        sliderRef.current.style.transform = `translateX(-${scrollX.current}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="mt-[140px] max-sm:mt-[104px]">
      <div className="flex items-end justify-between mb-9 max-sm:justify-center max-sm:mb-4">
        <span className="text-title-red text-5xl font-semibold leading-[60px] max-sm:text-2xl">
          {t('titleBlock.title')}
        </span>
        <div className="flex items-center cursor-pointer gap-1 relative group max-sm:hidden">
          <span className="text-[#666666] text-xl font-medium leading-[150%]">
            {t('titleBlock.learnMore')}
          </span>
          <Image
            src="/ArrowRight.svg"
            width={24}
            height={24}
            alt="arrow right"
          />
          <div className="absolute w-full h-[1px] bg-transparent group-hover:bg-gray-300 bottom-0 transition-all duration-300" />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="ml-[105px] overflow-hidden max-sm:ml-0">
          <div
            ref={sliderRef}
            className="flex pb-[60px] gap-[50px] w-[9999px] transition-all duration-300"
          >
            {repeatedItems.map((item, index) => (
              <CardItem
                key={item.image + index}
                description={item.description}
                image={item.image}
                subtitle={item.subtitle}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <ButtonRipple className="bg-[#F2542D] w-full py-2 flex items-center justify-center gap-2 rounded-[100px] text-base text-white font-medium leading-6">
        <span>{t('titleBlock.learnMore')}</span>
        <Image src="/ArrowRightWhite.svg" width={24} height={24} alt="arrow right" />
      </ButtonRipple>
    </div>
  );
};

export default TitleBlock;
