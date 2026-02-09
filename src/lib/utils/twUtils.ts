import { type ClassNameValue, twMerge as _twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassNameValue[]): string => {
  return _twMerge(...classes);
};
