export type CalendarDay = {
  date: number;
  isCurrentMonth: boolean;
  status: 'free' | 'busy' | null;
  fullDate: Date;
};

export type DateKey = string;

export type MonthData = {
  [key: string]: {
    occupied: DateKey[];
    libre: DateKey[];
  };
};

export type TBlockSessionProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
  bgTitle?: string;
};

export type TLocation = {
  lat: number;
  lng: number;
};
export type TLocationProps = {
  id: string;
  position: TLocation;
  image: string;
};

export type TIconProps = {
  image: string;
  position: TLocation;
  onClick: (id: string) => void;
  id: string;
  selectedLocation: string | null;
};

export type TCardItemProps = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
};
