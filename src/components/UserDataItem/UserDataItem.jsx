import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiPencil, HiCheck } from 'react-icons/hi';
import { LabelUserInfo, ValueUserInfo, Circle } from './UserDataItem.styled';

export const UserDataItem = ({ type, label, value }) => {
  const [disable, setDisable] = useState(true);
  const [startUpdate, setStartUpdate] = useState(false);
  useEffect(() => {
    setDisable(true);
    setStartUpdate(false)
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
          <Circle type="button">
            <HiCheck color="#F59256" size="16px" />
          </Circle>
        ) : (
          <Circle type="button">
            <HiPencil color="#F59256" size="15px" />
          </Circle>
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
