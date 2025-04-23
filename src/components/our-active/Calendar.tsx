'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'use-intl';
import { formatDateKey, getMonthName } from '../../../utils/helper';
import { dayNames } from '../../../utils/contants';
import { CalendarDay, DateKey, MonthData } from '../../../types';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [occupiedDays, setOccupiedDays] = useState<DateKey[]>([]);
  const [libreDays, setLibreDays] = useState<DateKey[]>([]);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const [monthsData, setMonthsData] = useState<MonthData>({});
  const defaultBusy = useMemo(() => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const defaultBusyArr = [
      formatDateKey(new Date(year, month, 2)),
      formatDateKey(new Date(year, month - 3, 28)),
      formatDateKey(new Date(year, month - 3, 29)),
    ];
    return defaultBusyArr;
  }, []);
  const t = useTranslations('HomePage.calendar');

  const goToPreviousMonth = () => {
    saveCurrentMonthData();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    saveCurrentMonthData();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const saveCurrentMonthData = () => {
    const monthKey = `${currentYear}-${currentMonth}`;
    setMonthsData((prev) => ({
      ...prev,
      [monthKey]: {
        occupied: [...occupiedDays],
        libre: [...libreDays],
      },
    }));
  };

  useEffect(() => {
    const monthKey = `${currentYear}-${currentMonth}`;
    if (monthsData[monthKey]) {
      setOccupiedDays(monthsData[monthKey].occupied);
      setLibreDays(monthsData[monthKey].libre);
    } else {
      const allLibreDays: DateKey[] = [];
      const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

      for (let i = 1; i <= lastDay; i++) {
        const date = new Date(currentYear, currentMonth, i);
        allLibreDays.push(formatDateKey(date));
      }

      setOccupiedDays(defaultBusy);
      setLibreDays(allLibreDays);
    }
  }, [currentMonth, currentYear, defaultBusy]);

  const getDayStatus = (day: CalendarDay): CalendarDay['status'] => {
    if (!day.isCurrentMonth) return null;

    const dateKey = formatDateKey(day.fullDate);
    if (occupiedDays.includes(dateKey)) return 'busy';
    if (libreDays.includes(dateKey)) return 'free';
    return null;
  };

  const toggleDayStatus = (day: CalendarDay) => {
    if (!day.isCurrentMonth) return;

    const dateKey = formatDateKey(day.fullDate);
    const currentStatus = getDayStatus(day);

    setOccupiedDays((prev) => prev.filter((d) => d !== dateKey));
    setLibreDays((prev) => prev.filter((d) => d !== dateKey));
    if (currentStatus === 'free') {
      setOccupiedDays((prev) => [...prev, dateKey]);
    } else if (currentStatus === 'busy') {
      return;
    } else {
      setLibreDays((prev) => [...prev, dateKey]);
    }
  };

  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    let firstDayOfWeek = firstDayOfMonth.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const daysFromPreviousMonth = firstDayOfWeek;
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousMonthYear =
      currentMonth === 0 ? currentYear - 1 : currentYear;
    const lastDayOfPreviousMonth = new Date(
      previousMonthYear,
      currentMonth,
      0
    ).getDate();

    for (let i = 0; i < daysFromPreviousMonth; i++) {
      const date = lastDayOfPreviousMonth - daysFromPreviousMonth + i + 1;
      const fullDate = new Date(previousMonthYear, previousMonth, date);
      const dateKey = formatDateKey(fullDate);
      days.push({
        date,
        isCurrentMonth: false,
        status: occupiedDays.includes(dateKey) ? 'busy' : null,
        fullDate,
      });
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const fullDate = new Date(currentYear, currentMonth, i);
      const dateKey = formatDateKey(fullDate);
      let status: 'free' | 'busy' | null = null;

      if (occupiedDays.includes(dateKey)) {
        status = 'busy';
      } else if (libreDays.includes(dateKey)) {
        status = 'free';
      }

      days.push({
        date: i,
        isCurrentMonth: true,
        status,
        fullDate,
      });
    }

    const totalDaysToShow = 42;
    const daysFromNextMonth = totalDaysToShow - days.length;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      const fullDate = new Date(nextMonthYear, nextMonth, i);
      const dateKey = formatDateKey(fullDate);
      days.push({
        date: i,
        isCurrentMonth: false,
        status: occupiedDays.includes(dateKey) ? 'busy' : null,
        fullDate,
      });
    }

    return days;
  };

  useEffect(() => {
    setCalendarDays(generateCalendarDays());
  }, [currentMonth, currentYear, occupiedDays, libreDays]);

  return (
    <div className="w-full p-[24px_32px] rounded-3xl flex flex-col gap-8 border bg-white border-[rgba(86,44,44,0.30)] shadow-[0px_0px_30px_0px_rgba(242,84,45,0.10)] max-sm:p-4">
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={goToPreviousMonth}
          className="cursor-pointer"
          aria-label="Previous month"
        >
          <Image
            src="/arrow-left.svg"
            width={24}
            height={24}
            alt="arrow left"
            className="max-sm:hidden"
          />
          <Image
            src="/arrow-left.svg"
            width={16}
            height={16}
            alt="arrow left"
            className="lg:hidden"
          />
        </button>

        <span className="text-xl leading-6 -tracking-[0.14px] text-title-black font-medium max-sm:text-base max-sm:-tracking-[0.112px]">
          {t(getMonthName(currentMonth))} {currentYear}
        </span>

        <button
          onClick={goToNextMonth}
          className="cursor-pointer"
          aria-label="Next month"
        >
          <Image
            src="/arrow-right.svg"
            width={24}
            height={24}
            alt="arrow right"
            className="max-sm:hidden"
          />
          <Image
            src="/arrow-right.svg"
            width={16}
            height={16}
            alt="arrow right"
            className="lg:hidden"
          />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {Object.keys(dayNames).map((item) => (
          <div
            className="text-center font-semibold leading-6 -tracking-[0.126px] text-title-black text-lg"
            key={item}
          >
            {t(item as keyof typeof dayNames)}
          </div>
        ))}
        {calendarDays.map((day) => (
          <div
            key={formatDateKey(day.fullDate)}
            onClick={() => day.isCurrentMonth && toggleDayStatus(day)}
            className={`
              p-[8px_16px] rounded-[8px] flex flex-col items-center justify-between border min-h-[72px] max-sm:min-h-auto max-sm:p-2
              ${
                !day.isCurrentMonth
                  ? 'bg-[#F5F5F5] border-[#DFDFDF]'
                  : day.status === 'busy'
                  ? 'bg-white border-[#DFDFDF]'
                  : day.status === 'free'
                  ? 'bg-[#FFF4F1] border-[#F2542D]'
                  : 'bg-[#F5F5F5] border-[#DFDFDF]'
              }
              ${
                day.isCurrentMonth
                  ? 'cursor-pointer hover:opacity-70'
                  : 'cursor-default'
              }
              transition-colors duration-200
            `}
          >
            <span
              className={`text-xl font-semibold leading-6 -tracking-[0.14px] max-sm:text-sm max-sm:leading-5 max-sm:-tracking-[0.098px] ${
                !day.isCurrentMonth
                  ? 'text-[#ccc]'
                  : day.status === 'free'
                  ? 'text-title-black'
                  : 'text-[#999]'
              }`}
            >
              {day.date}
            </span>
            <span
              className={`text-lg font-normal leading-6 -tracking-[0.126px] max-sm:hidden ${
                day.status === 'free' ? 'text-title-red' : 'text-[#AAA]'
              }`}
            >
              {day.status ? t(day.status) : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
