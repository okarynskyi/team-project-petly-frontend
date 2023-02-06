import { formatBirthDate } from 'helpers/formatDate';

export function filterData(obj) {
  let filterUserInfo = [];
  if (obj) {
    for (let key in obj) {
      if (key === 'birthday') {
        if (obj[key]) {
          filterUserInfo.push({
            label: key,
            value: formatBirthDate(obj[key]),
          });
        }
        continue;
      } else {
        filterUserInfo.push({ label: key, value: obj[key] });
      }
    }
  }
  return filterUserInfo;
}
export const checkType = (item) => {
  switch (item.label) {
    case 'email':
      return 'email';
    case 'phone':
      return 'tel';
     case 'birthday':
      return 'date';
    default:
      return 'text';
  }
};