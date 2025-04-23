import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const BlockBasic = () => {
  const t = useTranslations('HomePage.blockBasic');
  return (
    <div className="pt-[60px] pb-[78px] max-sm:pt-8 max-sm:pb-8">
      <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-1">
        <div className="text-title-black text-lg leading-[26px] font-normal max-w-[564px] place-content-between max-sm:text-sm max-sm:leading-normal">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </span>
        </div>
        <div className="text-[40px] text-title-black font-semibold leading-[54px] uppercase max-w-[595px] max-sm:text-2xl max-sm:leading-normal max-sm:w-full">
          <span>
            {t.rich('title', {
              guidelines: (chunks) => (
                <span className="text-title-red">{chunks}</span>
              ),
            })}
          </span>
        </div>
      </div>
      <div className="mt-8 bg-cover bg-center relative rounded-[20px] p-[52px_105px] overflow-hidden max-sm:mt-6 max-sm:p-4">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(0deg, rgba(14, 149, 148, 0.20) 0%, rgba(14, 149, 148, 0.20) 100%), url(/bg-block.png) lightgray 50% / cover no-repeat',
          }}
        ></div>
        <div className="bg-white rounded-2xl relative z-20 pt-[6px] pr-[9px] pl-[10px] max-sm:p-2">
          <div className="w-full h-[463px] relative max-sm:h-[213px]">
            <Image
              src="/block-item.png"
              fill
              className="object-cover"
              alt="block item"
            />
          </div>
          <div className="mt-4 px-6 pt-2 pb-6 max-sm:p-[4px_12px]">
            <div className="flex place-content-between max-sm:flex-col">
              <div className="max-w-[660px] max-sm:flex max-sm:place-content-between max-sm:w-full max-sm:items-center">
                <span className="font-semibold text-2xl tracking-[0.1] max-sm:text-base max-sm:leading-5 max-sm:tracking-[0.16px]">
                  {t('imageLabel')}
                </span>
                <span className="block mt-1 text-lg leading-6 -tracking-[0.1] max-sm:hidden">
                  {t('description')}
                </span>
                <div className="text-sm leading-5 -tracking-[0.14px] lg:hidden p-[4px_8px] rounded-[34px] border border-[rgba(102,102,102,0.10)]">
                  <span>24 Sep 2024</span>
                </div>
              </div>
              <div>
                <span className="text-xl -tracking-[0.1] max-sm:hidden">
                  24 Sep 2024
                </span>
                <span className="block mt-1 leading-5 -tracking-[0.14px] lg:hidden text-[#666] text-sm">
                  {t('description')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-[22px] max-sm:grid-cols-2 max-sm:gap-5">
        <BasicCard name="Anthony Durand" image="/basic-1.png" />
        <BasicCard name="Anthony Durand" image="/basic-2.png" />
        <BasicCard name="Anthony Durand" image="/basic-3.png" />
        <BasicCard name="Anthony Durand" image="/basic-4.png" />
      </div>
      <div className="mt-12 max-sm:mt-6 max-sm:text-center">
        <span className="text-2xl text-[#666] -tracking-[0.24px] absolute max-sm:text-sm max-sm:leading-normal max-sm:-tracking-[0.14px] max-sm:relative">
          {t.rich('checkout', {
            guidelines: (chunks) => (
              <span className="text-title-red font-bold">{chunks}</span>
            ),
          })}
        </span>
      </div>
    </div>
  );
};

const BasicCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="h-[292px] w-full bg-contain relative max-sm:w-full max-sm:aspect-[1/1] max-sm:h-auto max-sm:rounded-[8px] rounded-[20px] overflow-hidden hover:scale-110 transition-all duration-300">
      <Image src={image} fill className="object-cover" alt="image" />
      <div className="absolute bottom-0 inset-x-0 w-full px-5 py-4 bg-[#562C2C99] backdrop-blur-[2px] overflow-hidden max-sm:p-2">
        <div className="flex place-content-between cursor-pointer">
          <div className="flex gap-1.5 items-center">
            <Image
              width={28}
              height={28}
              src="/instagram.svg"
              alt="instagram"
              className="max-sm:hidden"
            />
            <Image
              width={16}
              height={16}
              src="/instagram.svg"
              alt="instagram"
              className="lg:hidden"
            />
            <span className="font-medium text-lg -tracking-[0.18px] text-white max-sm:text-xs max-sm:leading-4 max-sm:-tracking-[0.12px]">
              {name}
            </span>
          </div>
          <Image
            width={28}
            height={28}
            src="/ArrowUpRight.svg"
            alt="ArrowUpRight"
            className="max-sm:hidden"
          />
          <Image
            width={16}
            height={16}
            src="/ArrowUpRight.svg"
            alt="ArrowUpRight"
            className="lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockBasic;
