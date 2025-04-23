'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import ButtonRipple from '../ButtonRipple';

interface TFieldProps {
  label: string;
  placeholder: string;
}

const FormInfo = () => {
  const t = useTranslations('HomePage.textEditor');
  return (
    <div className="w-full flex flex-col gap-5 max-sm:gap-2">
      <FieldInput label={t('name')} placeholder={t('placeholderName')} />
      <FieldInput label={t('email')} placeholder={t('placeholderEmail')} />
      <FieldArea label={t('message')} />
      <FieldFile label={t('file')} />
      <div className="flex gap-4 justify-end mt-8 max-sm:mt-5 max-sm:justify-between">
        <ButtonRipple
          className="border border-[rgba(86,44,44,0.30)] bg-white rounded-[33px] p-[11px_62px] min-w-[200px] text-title-black text-lg font-medium leading-6 max-sm:w-1/2 max-sm:px-0 max-sm:min-w-auto max-sm:text-base max-sm:py-[7px]"
          bgColorRipple="#bedbff"
        >
          <span>Clear All</span>
        </ButtonRipple>
        <ButtonRipple className="bg-[#F2542D] rounded-[33px] p-[12px_48px] flex items-center gap-2 min-w-[200px] text-white text-lg font-medium leading-6 max-sm:w-1/2 max-sm:px-0 max-sm:min-w-auto max-sm:text-base max-sm:py-[7px]">
          <span>{t('send')}</span>
          <Image src="/send-icon.svg" width={24} height={24} alt="send icon" className='max-sm:hidden' />
          <Image src="/send-icon.svg" width={20} height={20} alt="send icon" className='lg:hidden' />
        </ButtonRipple>
      </div>
    </div>
  );
};

const FieldInput = ({ label, placeholder }: TFieldProps) => {
  return (
    <div className="flex w-full items-center gap-4 max-sm:gap-2">
      <LabelField label={label} />
      <div className="w-full">
        <Input placeholder={placeholder} />
      </div>
    </div>
  );
};

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="text-lg hover:border-[#F2542D] focus:border-[#F2542D] transition-all duration-300 text-title-black -tracking-[0.126px] placeholder:text-[#AAA] outline-none w-full h-full p-[11px_15px] rounded-[124px] border border-[rgba(86,44,44,0.30)] shadow-[0px_0px_30px_0px_rgba(242,84,45,0.10)] min-h-10 max-sm:p-[8px_16px] max-sm:text-sm"
    />
  );
};

const FieldArea = ({ label }: { label: string }) => {
  const [fontSize, setFontSize] = useState('18');
  const [content, setContent] = useState({
    heading: 'Heading 6',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
  });

  return (
    <div className="flex w-full items-center gap-4 max-sm:gap-2 max-sm:items-start">
      <LabelField label={label} />
      <div className="w-full">
        <div className="border border-[rgba(86,44,44,0.30)] rounded-lg overflow-hidden shadow-[0px_0px_30px_0px_rgba(242,84,45,0.10)]">
          <div className="flex items-center border-b border-b-[#E2E8F0] flex-wrap relative">
            <div className="border border-[#E2E8F0] absolute w-full lg:hidden" />

            <div className="border-r border-[#E2E8F0] px-2 pt-[7px] pb-[6px] max-sm:min-w-[65px]">
              <button
                className="flex items-center gap-1 cursor-pointer p-[6px] hover:bg-gray-100"
                title="Chọn cỡ chữ"
              >
                <span className="text-[#0E9594] font-semibold leading-[22px] -tracking-[0.112px] text-base max-sm:text-sm max-sm:leading-4 max-sm:-tracking-[0.098px]">
                  {fontSize}
                </span>
                <Image
                  src="/CaretUpDown.svg"
                  width={16}
                  height={16}
                  alt="CaretUpDown fontsize"
                />
              </button>
            </div>

            <div className="flex items-center border-r border-[#E2E8F0] gap-2 p-[7px_8px] pt-2 max-sm:border-r-0 max-sm:w-[180px]">
              <button
                className="p-[6px] max-sm:p-0 cursor-pointer hover:bg-gray-100"
                title="Chọn màu chữ"
              >
                <Image src="/Add.svg" width={20} height={20} alt="add" />
              </button>
              <button
                className="p-[6px] max-sm:p-0 cursor-pointer hover:bg-gray-100"
                title="Chọn background chữ"
              >
                <Image
                  src="/select.svg"
                  alt="select text"
                  width={20}
                  height={20}
                />
              </button>
              <button
                className="p-[6px] max-sm:p-0 cursor-pointer hover:bg-gray-100"
                title="Chữ thường"
              >
                <Image
                  src="/bold.svg"
                  width={20}
                  height={20}
                  alt="bold image"
                />
              </button>
              <button
                className="p-[6px] max-sm:p-0 cursor-pointer hover:bg-gray-100"
                title="Chữ in nghiêng"
              >
                <Image
                  src="/italic.svg"
                  width={20}
                  height={20}
                  alt="italic image"
                />
              </button>
              <button
                className="hover:bg-gray-100 p-[6px] max-sm:p-0 cursor-pointer"
                title="Chữ gạch chân"
              >
                <Image
                  src="/underline.svg"
                  width={20}
                  height={20}
                  alt="underline"
                />
              </button>
              <button className="hover:bg-gray-100 p-[6px] max-sm:p-0 cursor-pointer">
                <Image
                  src="/link.svg"
                  width={20}
                  height={20}
                  alt="link image"
                />
              </button>
            </div>

            <div className="flex items-center border-r border-[#E2E8F0] gap-2 p-[7px_8px] pt-2 lg:hidden">
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/list-number.svg"
                  width={20}
                  height={20}
                  alt="list number"
                />
              </button>
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/list-bullets.svg"
                  width={20}
                  height={20}
                  alt="list bullets"
                />
              </button>
            </div>

            <div className="flex items-center border-r border-[#E2E8F0] gap-2 p-[7px_8px] pt-2">
              <button className="hover:bg-gray-100 p-[6px] max-sm:p-0 cursor-pointer">
                <Image
                  src="/align-right.svg"
                  width={20}
                  height={20}
                  alt="align right"
                />
              </button>
              <button className="hover:bg-gray-100 p-[6px] max-sm:p-0 cursor-pointer">
                <Image
                  src="/text-center.svg"
                  alt="text center"
                  width={20}
                  height={20}
                />
              </button>
              <button className="hover:bg-gray-100 p-[6px] max-sm:p-0 cursor-pointer">
                <Image
                  src="/align-right.svg"
                  width={20}
                  height={20}
                  alt="align right"
                />
              </button>
            </div>

            <div className="flex items-center border-r border-[#E2E8F0] gap-2 p-[7px_8px] pt-2 max-sm:hidden">
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/list-number.svg"
                  width={20}
                  height={20}
                  alt="list number"
                />
              </button>
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/list-bullets.svg"
                  width={20}
                  height={20}
                  alt="list bullets"
                />
              </button>
            </div>

            <div className="flex items-center gap-2 p-[7px_8px] pt-2">
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image
                  src="/image-icon.svg"
                  width={20}
                  height={20}
                  alt="image-icon"
                />
              </button>
              <button className="p-[6px] max-sm:p-0 hover:bg-gray-100 cursor-pointer">
                <Image src="/upload.svg" width={20} height={20} alt="upload" />
              </button>
            </div>
          </div>

          <div className="p-6 flex flex-col">
            <span className="text-2xl leading-8 -tracking-[0.288px] font-medium mb-2 text-title-black max-sm:text-lg">
              {content.heading}
            </span>
            <span className="text-title-black text-lg font-normal leading-[160%] max-sm:text-sm">
              {content.body}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldFile = ({
  label,
  fileName = 'File test',
}: {
  label: string;
  fileName?: string;
}) => {
  const t = useTranslations('HomePage.textEditor');

  return (
    <div className="flex w-full items-center gap-4 max-sm:gap-2 max-sm:items-start">
      <LabelField label={label} />
      <div className="w-full flex items-center gap-4 max-sm:gap-1 max-sm:flex-col max-sm:items-start">
        <div className="flex items-center gap-1">
          <Image
            src="/paperclip.svg"
            width={32}
            height={32}
            alt="file"
            className="max-sm:hidden"
          />
          <Image
            src="/paperclip.svg"
            width={16}
            height={16}
            alt="file"
            className="lg:hidden"
          />
          <span className="text-[#1E88F9] text-xl leading-normal -tracking-[0.14px] font-medium max-sm:text-base">
            {fileName}
          </span>
        </div>
        <span className="text-[#999] text-lg font-normal leading-normal -tracking-[0.126px] max-sm:text-sm max-sm:-tracking-[0.098px]">
          ({t('requiredFile')})
        </span>
      </div>
    </div>
  );
};

const LabelField = ({ label }: { label: string }) => {
  return (
    <div className="w-[130px] shrink-0 max-sm:w-20">
      <span className="text-title-black text-2xl leading-normal font-normal max-sm:text-base">
        {label}:
      </span>
    </div>
  );
};

export default FormInfo;
