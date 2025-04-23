'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import ButtonRipple from '../ButtonRipple';

const CardSessionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('HomePage.cardSession');
  const cardMap = useMemo(
    () => [
      {
        image: '/image.svg',
        subtitle: t('subtitle'),
        title: t('title'),
        description: t('description'),
        buttonLabel: t('buttonLabel'),
      },
      {
        image: '/image-1.svg',
        subtitle: t('subtitle'),
        title: t('title'),
        description: t('description'),
        buttonLabel: t('buttonLabel'),
      },
      {
        image: '/image-2.svg',
        subtitle: t('subtitle'),
        title: t('title'),
        description: t('description'),
        buttonLabel: t('buttonLabel'),
      },
    ],
    [t]
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="flex justify-between gap-8 max-sm:gap-6 max-sm:flex-col"
      ref={sectionRef}
    >
      {cardMap.map((item, index) => (
        <div
          className={`2xl:max-w-[397px] flex flex-col ${
            index % 2 === 0 ? 'mt-[42px] max-sm:mt-0' : ''
          } opacity-0 transition-all duration-700 ease-out ${
            isVisible ? `opacity-100 delay-${index * 200}` : ''
          }`}
          key={index}
          style={{
            transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
            transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
          }}
        >
          <div className="rounded-[8px] overflow-hidden mb-6 max-w-[397px] h-[397px] relative max-sm:w-full max-sm:aspect-[16/9]">
            <Image
              src={item.image}
              fill
              alt="image card"
              className="object-cover"
            />
          </div>
          <span className="mb-1 text-title-red text-xl font-medium leading-normal max-sm:text-xs">
            {item.subtitle}
          </span>
          <span className="mb-4 text-title-black text-[28px] leading-8 font-medium max-sm:text-base max-sm:leading-normal">
            {item.title}
          </span>
          <div className="w-full line-clamp-2 mb-6 text-[rgba(86,44,44,0.80)] text-[18px] leading-6 font-normal -tracking-[0.18px] max-sm:text-sm max-sm:leading-normal max-sm:-tracking-[0.14px]">
            <span>{item.description}</span>
          </div>
          <ButtonRipple
            bgColorRipple="#dbeafe"
            className="gap-1 w-fit p-[9px_76px] rounded-[333px] border border-[rgba(86,44,44,0.30)] bg-white text-title-black text-[18px] leading-5 font-medium max-sm:text-sm max-sm:leading-4 max-sm:p-[7px_12px]"
          >
            <span>{item.buttonLabel}</span>
            <Image
              src="/arrow-up-right-green.svg"
              width={24}
              height={24}
              alt="arrow up right"
              className="max-sm:hidden"
            />
            <Image
              src="/arrow-up-right-green.svg"
              width={16}
              height={16}
              alt="arrow up right"
              className="lg:hidden"
            />
          </ButtonRipple>
        </div>
      ))}
    </div>
  );
};

export default CardSessionOne;
