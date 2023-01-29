import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiPencil, HiCheck } from 'react-icons/hi';
import {
  LabelUserInfo,
  ValueText,
  ValueEmailTel,
  InputUserInfo,
} from './UserDataItem.styled';
import { CircleBtn } from 'components/common/CircleBtn.styled';
// import check from '../../staticImages/check.svg';
// import pencil from '../../staticImages/pencil.svg';

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
            {/* <IconInBtn width="13" height="13">
              <use href={check}></use>
            </IconInBtn> */}
            <HiCheck color="#F59256" size="14px" />
          </CircleBtn>
        ) : (
          <CircleBtn type="button">
            {/* <svg width="13" height="13">
              <use href={pencil}></use>
            </svg> */}
            <HiPencil color="#F59256" size="15px" />
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
