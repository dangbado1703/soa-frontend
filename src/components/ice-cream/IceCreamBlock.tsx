import { useTranslations } from 'next-intl';
import Image from 'next/image';

const IceCreamBlock = () => {
  const t = useTranslations('HomePage.iceCream');
  return (
    <div className="md:flex items-start gap-6 max-sm:bg-[url('/image-icecream.svg')] max-sm:bg-no-repeat max-sm:mt-[72px] max-sm:py-8 max-sm:px-4">
      <div className="flex flex-col max-sm:p-[16px_12px] max-sm:bg-[rgba(255,255,255,0.60)] max-sm:backdrop-blur-[7.5px] max-sm:rounded-2xl">
        <div className="uppercase md:text-5xl font-semibold leading-[60px] max-sm:text-2xl max-sm:leading-normal">
          <span className="text-title-red">{t('firstTitle')}</span>
          <span className="text-[rgba(242,84,45,0.60)]">
            {t('secondTitle')}
          </span>
        </div>
        <div className="flex flex-col mt-[60px] max-sm:mt-6">
          <div className="flex items-center max-sm:relative">
            <div className="w-20 h-[2px] bg-[#bbb] shrink-0 mr-12 max-sm:absolute max-sm:w-[1px] max-sm:h-full" />
            <span className="text-title-black text-[28px] font-semibold leading-normal max-sm:text-base max-sm:ml-2">
              {t('about')}
            </span>
          </div>
          <div className="ml-[128px] text-[rgba(86,44,44,0.80)] text-lg font-normal leading-[26px] mt-[19px] max-sm:mt-2 max-sm:ml-0 max-sm:text-sm max-sm:leading-normal max-sm:-tracking-[0.5px]">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
      </div>
      <div className="relative h-[574px] md:w-[503px] shrink-0 rounded-[10px] max-sm:hidden">
        <Image src="/image-icecream.svg" alt="ice-cream" fill />
      </div>
    </div>
  );
};

export default IceCreamBlock;
