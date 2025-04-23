import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Service = () => {
  const t = useTranslations('HomePage.service');
  const serviceMap = [
    {
      icon: '/authen.svg',
      alt: 'authen',
      title: t('authen'),
    },
    {
      icon: '/respect.svg',
      alt: 'respect',
      title: t('respect'),
    },
    {
      icon: '/deversite.svg',
      alt: 'diversite',
      title: t('diver'),
    },
    {
      icon: '/person.svg',
      alt: 'person',
      title: t('person'),
    },
    {
      icon: '/smile.svg',
      alt: 'confort',
      title: t('smile'),
    },
  ];
  return (
    <div className="flex items-start justify-between pt-5 pb-[60px] mt-[60px] max-sm:mt-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-6 max-sm:pb-10">
      {serviceMap.map((item, index) => (
        <div className={`flex flex-col items-center ${index === serviceMap.length - 1? 'col-span-2' : ''}`} key={item.icon}>
          <div className="p-3 bg-[#0E9594] rounded-[100px] flex justify-center items-center mb-4 w-fit">
            <Image src={item.icon} alt={item.alt} width={34} height={34} />
          </div>
          <span className="mb-2 text-title-black text-2xl font-medium leading-8 max-sm:text-base max-sm:leading-normal">
            {item.title}
          </span>
          <span className="text-[rgba(86,44,44,0.80)] text-lg leading-6 font-normal max-sm:text-sm max-sm:leading-normal">
            {t('subtitle')}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Service;
