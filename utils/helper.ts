import { monthNames } from './contants';

export const createRipple = (
  event: React.MouseEvent<HTMLButtonElement>,
  bgRippleColor?: string
) => {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');

  if (bgRippleColor) {
    circle.style.background = bgRippleColor;
  }

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
  setTimeout(() => {
    if (button.contains(circle)) {
      button.removeChild(circle);
    }
  }, 1000);
};
export const getMonthName = (month: number): keyof typeof monthNames => {
  return Object.keys(monthNames)[month] as keyof typeof monthNames;
};

export const formatDateKey = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};
