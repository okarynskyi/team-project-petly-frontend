import { format, formatDistanceToNowStrict } from 'date-fns';

export const formatBirthDate = date => {
  return format(Date.parse(date), 'dd.MM.yyyy'); //10.10.2003
};

export const formatAgeMonth = date => {
  formatDistanceToNowStrict(new Date(date), {
    //2 month
    unit: 'month',
    roundingMethod: 'ceil',
  });
};

export const formatAgeYears = date => {
  formatDistanceToNowStrict(new Date(date), {
    //2 years
    unit: 'year',
    roundingMethod: 'ceil',
  });
};

function day_of_the_month(d) {
  return `${d.getMonth() < 10 ? '0' : ''}${d.getMonth() + 1}`;
}
function day_of_the_day(d) {
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}
export function getCurrent() {
  const now = new Date();
  const normaYear = now.getFullYear();
  const normaMonth = day_of_the_month(now);
  const normaDate = day_of_the_day(now);
  return `${normaYear}-${normaMonth}-${normaDate}`;
}

export function dateConverter(utcDate) {
  const date = new Date(utcDate);
  const day = (date.getDay()+1).toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear();
  const convertedDate = [day, month, year].join('/');
  return convertedDate;
}