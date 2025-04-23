'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { TIconProps, TLocationProps } from '../../../types';
import BlockSesson from '../BlockSesson';
import ButtonRipple from '../ButtonRipple';

const MapSession = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mapCenter, setMapCenter] = useState({ x: 50, y: 50 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mapImageRef = useRef<HTMLDivElement | null>(null);
  const locations: TLocationProps[] = [
    { id: '1', position: { lat: 35, lng: 30 }, image: '/mountain-black.svg' },
    { id: '2', position: { lat: 40, lng: 20 }, image: '/fishing-black.svg' },
    { id: '3', position: { lat: 85, lng: 10 }, image: '/crosshair-black.svg' },
  ];

  const t = useTranslations('HomePage');

  const handleMarkerClick = (locationId: string) => {
    if (isTransitioning) return;

    const location = locations.find((loc) => loc.id === locationId);
    if (!location) return;

    if (selectedLocation && selectedLocation !== locationId) {
      setIsTransitioning(true);
      resetZoom();
      setTimeout(() => {
        setSelectedLocation(locationId);
        setZoomLevel(2);
        setMapCenter({
          x: location.position.lng, // đây là left
          y: location.position.lat, // đây là top
        });
        setIsTransitioning(false);
      }, 1000);
    } else {
      setSelectedLocation(locationId);
      setZoomLevel(2);
      setMapCenter({
        x: location.position.lng,
        y: location.position.lat,
      });
    }
  };

  const resetZoom = () => {
    setSelectedLocation(null);
    setZoomLevel(1);
    setMapCenter({ x: 50, y: 50 });
    setIsTransitioning(false);
  };

  return (
    <div className="2xl:px-[340px] max-sm:mb-10 md:px-8 px-4 flex flex-col justify-center bg-[url('/bg-block-2.svg')] bg-no-repeat bg-cover bg-top bg-[#FFF6F4] mt-20 py-[60px] mb-20 max-sm:py-8 max-sm:mt-10">
      <div className="mb-6 max-sm:mb-5">
        <BlockSesson title={t('block.block-2')} bgTitle="bg-[#FFF6F4]" />
      </div>
      <div className="flex items-center justify-center gap-5 mb-6 py-2 max-sm:flex-wrap max-sm:mb-5">
        <ButtonRipple
          bgColorRipple="#dbeafe"
          disabled={isTransitioning}
          className="border disabled:cursor-no-drop max-sm:text-sm max-sm:leading-5 disabled:bg-[#ccc] border-[rgba(242,84,45,0.50)] bg-[#FAFAFA] rounded-[40px] p-[7px_16px] max-sm:p-[5px_16px] text-title-black text-xl leading-5 font-medium hover:opacity-70 gap-2"
        >
          <Image
            src="/mountain-black.svg"
            width={29}
            height={28}
            alt="mountain"
            priority
            className="max-sm:hidden"
          />
          <Image
            src="/mountain-black.svg"
            width={21}
            height={20}
            alt="mountain"
            priority
            className="lg:hidden"
          />
          <span>{t('map.active-1')}</span>
        </ButtonRipple>
        <ButtonRipple
          bgColorRipple="#dbeafe"
          disabled={isTransitioning}
          className="border disabled:cursor-no-drop max-sm:text-sm max-sm:leading-5 disabled:bg-[#ccc] border-[rgba(242,84,45,0.50)] bg-[#FAFAFA] rounded-[40px] p-[7px_16px] max-sm:p-[5px_16px] text-title-black text-xl leading-5 font-medium hover:opacity-70 gap-2"
        >
          <Image
            src="/fishing-black.svg"
            width={29}
            height={28}
            alt="fishing"
            priority
            className="max-sm:hidden"
          />
          <Image
            src="/fishing-black.svg"
            width={21}
            height={20}
            alt="fishing"
            priority
            className="lg:hidden"
          />
          <span>{t('map.active-2')}</span>
        </ButtonRipple>
        <ButtonRipple
          bgColorRipple="#dbeafe"
          disabled={isTransitioning}
          className="border disabled:cursor-no-drop max-sm:text-sm max-sm:leading-5 disabled:bg-[#ccc] border-[rgba(242,84,45,0.50)] bg-[#FAFAFA] rounded-[40px] p-[7px_16px] max-sm:p-[5px_16px] text-title-black text-xl leading-5 font-medium hover:opacity-70 gap-2"
        >
          <Image
            src="/crosshair-black.svg"
            width={29}
            height={28}
            alt="crosshair"
            priority
            className="max-sm:hidden"
          />
          <Image
            src="/crosshair-black.svg"
            width={21}
            height={20}
            alt="crosshair"
            priority
            className="lg:hidden"
          />
          <span>{t('map.active-3')}</span>
        </ButtonRipple>
      </div>
      <div className="w-full relative aspect-[16/9] overflow-hidden flex justify-between">
        <div className="relative text-title-black text-shadow-[0px_0px_8px_rgba(0,0,0,0.10)] text-xl leading-5 font-medium gap-1 mt-4 ml-4 w-fit z-[2] flex items-center h-fit p-[4px_10px] rounded-[8px] bg-[rgba(255,255,255,0.60)] shadow-[0px_2px_10px_0px_rgba(51,51,51,0.10)] backdrop-blur-[7.5px] max-sm:text-base max-sm:leading-5 max-sm:min-h-10">
          <Image
            src="/sample.svg"
            width={41}
            height={40}
            alt="sample"
            className="max-sm:hidden"
          />
          <Image
            src="/sample.svg"
            width={31}
            height={30}
            alt="sample"
            className="lg:hidden"
          />
          <span>{t('map.emplacement')}</span>
        </div>
        <ButtonRipple
          onClick={resetZoom}
          className="relative cursor-pointer text-title-black text-shadow-[0px_0px_8px_rgba(0,0,0,0.10)] text-xl leading-5 font-medium gap-1 mt-4 mr-4 w-fit z-[2] flex items-center h-fit p-[14px_10px] rounded-[8px] bg-[rgba(255,255,255,0.60)] shadow-[0px_2px_10px_0px_rgba(51,51,51,0.10)] backdrop-blur-[7.5px] max-sm:text-base max-sm:leading-5 max-sm:p-[4px_10px] max-sm:min-h-10"
        >
          <span>{t('map.reset')}</span>
        </ButtonRipple>
        <div
          className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
          ref={mapImageRef}
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: `${mapCenter.x}% ${mapCenter.y}%`,
          }}
        >
          <Image src="/map.svg" fill className="object-cover" alt="map image" />
          {locations.map((item) => (
            <PositionIcon
              key={item.id}
              image={item.image}
              position={item.position}
              id={item.id}
              onClick={(id) => handleMarkerClick(id)}
              selectedLocation={selectedLocation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PositionIcon = ({
  image,
  position,
  onClick,
  id,
  selectedLocation,
}: TIconProps) => {
  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
        selectedLocation === id
          ? 'scale-125 z-30'
          : 'scale-100 z-10 hover:scale-110'
      }`}
      style={{ left: `${position.lng}%`, top: `${position.lat}%` }}
      id={id}
      onClick={() => onClick(id)}
    >
      <Image src="/position.svg" width={32} height={42} alt="position" />
      <div className="bg-white p-1 rounded-[888px] top-1 absolute left-1">
        <Image src={image} width={16} height={16} alt="marker icon" />
      </div>
    </div>
  );
};

export default MapSession;
