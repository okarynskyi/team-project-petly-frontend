import PropTypes from 'prop-types';
import { StyledTimeItem, StyledTimeWrapper, StyledTimeTitle, StyledTimeBox, StyledBoxWrapper } from './TimeItem.styled';

const weekArr = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

function TimeItem({ workDays, isOpen, onClick }) {
  const CurrentDay = arr => {
    const dayOfWeekDigit = new Date().getDay();
    let currentValue = '-----------------------';

    if (arr === null || arr.length === 0) return currentValue;

    switch (dayOfWeekDigit) {
      case 0:
        if (!arr[0]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[0].from} - ${arr[0].to}`;
        }
        break;
      case 1:
        if (!arr[1]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[1].from} - ${arr[1].to}`;
        }
        break;
      case 2:
        if (!arr[2]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[2].from} - ${arr[2].to}`;
        }
        break;
      case 3:
        if (!arr[3]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[3].from} - ${arr[3].to}`;
        }
        break;
      case 4:
        if (!arr[4]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[4].from} - ${arr[4].to}`;
        }
        break;
      case 5:
        if (!arr[5]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[5].from} - ${arr[5].to}`;
        }
        break;
      case 6:
        if (!arr[6]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[6].from} - ${arr[6].to}`;
        }
        break;
      default:
        currentValue = null;
        break;
    }
    return currentValue;
  };
  const weekDays = arr => {
    if (!arr) return null;
    return arr.map((item, index) => (
      <StyledTimeItem key={index}>
        {weekArr[index]}
        {item.isOpen ? (
          <div style={{ display: 'flex' }}>
            <p>{item.from}</p> -
            <p>{item.to}</p>
          </div>
        ) : (
          <p>Closed</p>
        )}
      </StyledTimeItem>
    ));
  };

   return (
    <StyledTimeWrapper onClick={onClick}>
      <StyledTimeTitle isOpen={isOpen}>Time:</StyledTimeTitle>
      <StyledTimeBox isOpen={isOpen}>{CurrentDay(workDays)}</StyledTimeBox>
      <StyledBoxWrapper isOpen={isOpen}>{weekDays(workDays)}</StyledBoxWrapper>
    </StyledTimeWrapper>
  );
}

export default TimeItem;

TimeItem.propTypes = {
  workDays: PropTypes.array,
  isOpen: PropTypes.bool,
};