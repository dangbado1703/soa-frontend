import BlockBasic from '@/components/block-basic/BlockBasic';
import BlockSesson from '@/components/BlockSesson';
import BlockWrapper from '@/components/BlockWrapper';
import IceCreamBlock from '@/components/ice-cream/IceCreamBlock';
import Calendar from '@/components/our-active/Calendar';
import TextEditor from '@/components/our-active/FormInfo';
import Service from '@/components/service/Service';
import CardSessionOne from '@/components/title-block-1/CardSessionOne';
import MapSession from '@/components/title-block-2/MapSession';
import TitleBlock from '@/components/title/TitleBlock';
import VideoBanner from '@/components/VideoBanner';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage.block');
  return (
    <div className="flex flex-col relative">
      <VideoBanner />
      <BlockWrapper>
        <BlockSesson
          title={t('block-1')}
          subtitle={t('subtitle-1')}
          className="max-sm:mt-16 mb-10 mt-20 max-sm:mb-5"
        />
        <CardSessionOne />
      </BlockWrapper>
      <MapSession />
      <BlockWrapper>
        <div className="px-[190px] mb-10 max-sm:px-0">
          <BlockSesson
            title={t('our-active')}
            className="mt-[60px] max-sm:mt-8"
          />
        </div>
        <div className="flex flex-col gap-10">
          <Calendar />
          <TextEditor />
        </div>
      </BlockWrapper>
      <BlockWrapper>
        <TitleBlock />
      </BlockWrapper>
      <BlockWrapper className="max-sm:px-0">
        <IceCreamBlock />
      </BlockWrapper>
      <BlockWrapper>
        <Service />
      </BlockWrapper>
      <BlockWrapper className="bg-block">
        <BlockBasic />
      </BlockWrapper>
    </div>
  );
}
