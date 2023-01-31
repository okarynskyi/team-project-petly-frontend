import { format, formatDistanceToNowStrict } from 'date-fns';

export const formatBirthDate = date => {
  return format(Date.parse(date), 'dd.MM.yyyy'); //10.10.2003
};

export const formatAgeMonth = date => {
  formatDistanceToNowStrict(new Date(date), {    //2 month
    unit: 'month',
    roundingMethod: 'ceil',
  });
};

export const formatAgeYears = date => {
  formatDistanceToNowStrict(new Date(date), {    //2 years
    unit: 'year',
    roundingMethod: 'ceil',
  });
};