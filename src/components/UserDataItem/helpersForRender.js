export function chooseTypeLink(type, value) {
  if (type === 'email') {
    return `mailto:${value}`;
  } else if (type === 'tel') {
    return `tel:${value}`;
  }
}
export function findCity(label) {
  if (label === 'location') {
    return `city`;
  } else {
    return `${label}`;
  }
}
