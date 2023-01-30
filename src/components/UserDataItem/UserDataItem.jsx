import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LabelUserInfo,
  ValueText,
  ValueEmailTel,
  InputUserInfo,
  StyledPencil,
  StyledCheck,
} from './UserDataItem.styled';
import { CircleBtn } from 'components/common/CircleBtn.styled';

function chooseTypeLink(type, value) {
  if (type === 'email') {
    return `mailto:${value}`;
  } else if (type === 'tel') {
    return `tel:${value}`;
  }
}

export const UserDataItem = ({ type, label, value }) => {
  const [startUpdate, setStartUpdate] = useState(false);
  useEffect(() => {
    setStartUpdate(false);
  }, [startUpdate]);
  return (
    <>
      <LabelUserInfo htmlFor={label}>{label}:</LabelUserInfo>
      <div>
        {startUpdate ? (
          <InputUserInfo type={type} name={label} id={label} value={value} />
        ) : type === 'email' || type === 'tel' ? (
          <ValueEmailTel href={chooseTypeLink(type, value)}>
            {value}
          </ValueEmailTel>
        ) : (
          <ValueText>{value}</ValueText>
        )}
        {startUpdate ? (
          <CircleBtn type="button">
            <StyledCheck />
          </CircleBtn>
        ) : (
          <CircleBtn type="button">
            <StyledPencil />
          </CircleBtn>
        )}
      </div>
    </>
  );
};

UserDataItem.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
