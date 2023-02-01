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