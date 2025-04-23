'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const MenuMobile = ({ onClose, isOpen }: IProps) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('HomePage.header');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const headerMapping = [
    {
      title: t('title1'),
      value: 1,
      ml: 90,
    },
    {
      title: t('title2'),
      value: 2,
      ml: 147,
    },
    {
      title: t('title3'),
      value: 3,
      ml: 98,
    },
  ];

  const options = [
    {
      title: 'English',
      value: 'en',
      flag: '/english-flag.png',
      alt: 'English flag',
    },
    {
      title: 'France',
      value: 'fr',
      flag: '/france-flag.png',
      alt: 'France flag',
    },
  ];

  const onSelectLanguage = (locale: Locale) => {
    // @ts-expect-error
    router.replace({ pathname, params }, { locale });
  };

  useEffect(() => {
    setCurrentLanguage(params.locale as Locale);
  }, [params]);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (!menuRef.current) return;
    if (isOpen) {
      overlayRef.current.style.right = '0px';
      menuRef.current.style.right = '0px';
    } else {
      overlayRef.current.style.right = '-100%';
      menuRef.current.style.right = '-100%';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="fixed -right-full w-full h-screen z-[999] bg-black opacity-60 transition-all duration-300"
        onClick={onClose}
        ref={overlayRef}
      />
      <div
        className="fixed w-3/4 -right-full h-screen z-[9999] bg-white transition-all duration-300 p-2"
        ref={menuRef}
      >
        <div className="flex flex-col gap-2">
          {headerMapping.map((item) => (
            <div
              key={item.value}
              className="text-base font-medium leading-6 text-title-black hover:text-[#eb4969] cursor-pointer transition-all duration-300 ease-out"
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2 w-fit">
          <div
            className="text-base font-medium leading-6 text-title-black cursor-pointer"
            onClick={() => setShowLanguageOptions((prev) => !prev)}
          >
            <span>{t('language')}</span>
          </div>
          <div
            className={`absolute top-full border border-[#E9EAEB] w-full overflow-hidden bg-[#FAFAFA] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all duration-300 ease-in-out
              ${
                showLanguageOptions
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            style={{ zIndex: 10000 }}
          >
            {options.map((item) => (
              <div
                className={`p-[12px_10px] cursor-pointer flex items-center gap-2 ${
                  currentLanguage === item.value
                    ? 'bg-blue-200'
                    : 'hover:bg-blue-200'
                }`}
                onClick={() => {
                  onSelectLanguage(item.value as Locale);
                  setShowLanguageOptions(false);
                }}
                key={item.value}
              >
                <Image src={item.flag} alt={item.alt} width={28} height={28} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
