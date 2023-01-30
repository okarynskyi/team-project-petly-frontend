import { format } from 'date-fns';

export const formatBirthDate = (date) => {
  return format(Date.parse(date), 'dd.MM.yyyy');
};