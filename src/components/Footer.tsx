'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import BlockWrapper from './BlockWrapper';
import ButtonRipple from './ButtonRipple';

const Footer = () => {
  const t = useTranslations('HomePage.footer');
  return (
    <div className="mt-10">
      <div className="pt-[70px] pb-[260px] bg-footer">
        <BlockWrapper>
          <div className="m-auto">
            <span className="text-title-black text-[52px] font-semibold leading-[60px] capitalize block text-center max-w-[555px] m-auto max-sm:text-2xl max-sm:leading-8">
              {t.rich('title', {
                guidelines: (chunks) => (
                  <span className="text-[#562C2C80] font-bold">{chunks}</span>
                ),
              })}
            </span>
            <span className="mt-6 block max-w-[647px] text-center text-title-black text-2xl m-auto max-sm:text-sm max-sm:leading-normal max-sm:mt-2">
              {t('description')}
            </span>
          </div>
          <ButtonRipple className="mt-10 py-3 px-10 bg-title-red m-auto rounded-full text-white font-medium text-lg capitalize leading-[20px]">
            {t('button')}
          </ButtonRipple>
        </BlockWrapper>
      </div>
      <div className="bg-[#562C2C]">
        <BlockWrapper>
          <div className="py-14">
            <div className="flex place-content-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <div className="max-w-[370px] max-sm:max-w-[214px]">
                <span className="text-white block max-sm:text-center">
                  BASIC
                  <br className="max-sm:hidden" />
                  514 904-6789
                  <br className="max-sm:hidden" />
                  Quebec, 3100 Boulevard de la Côte-Vertu
                </span>
              </div>
              <div className="max-w-[102px] max-sm:w-full max-sm:text-center">
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Activité 2</span>
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Activité 2</span>
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Activité 2</span>
              </div>
              <div className="max-w-[102px] max-sm:w-full max-sm:text-center">
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Titre 1</span>
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Titre 1</span>
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Titre 1</span>
              </div>
              <div className="max-w-[102px] max-sm:w-full max-sm:max-w-full max-sm:text-center">
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Blog</span>
                <span className="text-[#FFFFFF99] block max-sm:mt-3">Nous contacter</span>
              </div>
            </div>
            <div className="h-[1px] bg-[#FFFFFF4D] mt-14 mb-6"></div>
            <div className="text-white text-center">© BASIC 2024</div>
          </div>
        </BlockWrapper>
      </div>
    </div>
  );
};

export default Footer;
