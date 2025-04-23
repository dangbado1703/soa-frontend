'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Locale, useTranslations } from 'next-intl';
import Image from 'next/image';
import ButtonRipple from './ButtonRipple';
import MenuMobile from './menu-mobile/MenuMobile';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

const Header = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const languageOptionsRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('HomePage.header');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
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

  useEffect(() => {
    if (!showLanguageOptions) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageOptionsRef.current &&
        !languageOptionsRef.current.contains(event.target as Node)
      ) {
        setShowLanguageOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageOptions]);

  useEffect(() => {
    setCurrentLanguage(params.locale as Locale);
  }, [params]);

  return (
    <>
      <div className="flex top-0 z-50 fixed w-full 2xl:px-[340px] md:px-8 px-4 items-center justify-between pt-4 pb-[15px] border-b border-b-[rgba(238,238,238,0.20)] bg-[rgba(86,44,44,0.70)] backdrop-blur-[7.5px]">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center shrink-0 w-[110px] h-auto relative min-h-10"
          >
            <Image
              src="https://www.sourceofasia.com/wp-content/uploads/2022/02/soa-logo.svg"
              alt="Logo SOA"
              priority
              fill
              className="object-contain"
            />
          </Link>
          {headerMapping.map((item) => (
            <div
              key={item.value}
              className="hidden lg:block text-base font-medium leading-6 text-white hover:text-[#eb4969] cursor-pointer transition-all duration-300 ease-out"
              style={{ marginLeft: item.ml }}
            >
              <span>{item.title}</span>
            </div>
          ))}
          <div className="relative w-fit ml-12" ref={languageOptionsRef}>
            <div
              className="hidden lg:block text-base font-medium leading-6 text-white hover:text-[#eb4969] cursor-pointer transition-all duration-300 ease-out"
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
                  <Image
                    src={item.flag}
                    alt={item.alt}
                    width={28}
                    height={28}
                  />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Image
            className="cursor-pointer"
            priority
            src="/mountains.svg"
            width={28}
            height={28}
            alt="mountains"
          />
          <Image
            className="cursor-pointer"
            priority
            src="/fishing-icon.svg"
            width={28}
            height={28}
            alt="fishing"
          />
          <Image
            className="cursor-pointer"
            priority
            src="/crosshair.svg"
            width={28}
            height={28}
            alt="crosshair"
          />
          <ButtonRipple className="p-[6px_16px] bg-[#F2542D] rounded-[32px] ml-4 hover:opacity-90">
            <Image
              src="/arrow-up-right.svg"
              width={24}
              height={24}
              alt="crosshair"
              className="ml-2"
              priority
            />
          </ButtonRipple>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Image src="/menu.svg" alt="menu" height={24} width={24} />
        </button>
      </div>
      <MenuMobile onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default Header;
