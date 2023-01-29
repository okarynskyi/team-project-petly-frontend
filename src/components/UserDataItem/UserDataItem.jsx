import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiPencil, HiCheck } from 'react-icons/hi';
import { LabelUserInfo, ValueUserInfo, CircleBtn } from './UserDataItem.styled';

export const UserDataItem = ({ type, label, value }) => {
  const [disable, setDisable] = useState(false);
  const [startUpdate, setStartUpdate] = useState(true);
  useEffect(() => {
    setDisable(false);
    setStartUpdate(true);
  }, [disable, startUpdate]);
  return (
    <>
      <LabelUserInfo htmlFor={label}>{label}:</LabelUserInfo>
      <div>
        <ValueUserInfo
          type={type}
          name={label}
          id={label}
          value={value}
          disabled={disable}
        />
        {startUpdate ? (
          <CircleBtn type="button">
            <HiCheck color="#F59256" size="14px" />
          </CircleBtn>
        ) : (
          <CircleBtn type="button">
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
