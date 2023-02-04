import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LabelUserInfo,
  ValueText,
  ValueEmailTel,
  InputUserInfo,
  StyledPencil,
  StyledCheck,
  FormStyle,
} from './UserDataItem.styled';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { useDispatch } from 'react-redux';
// import {  useSelector } from 'react-redux';
// import { selectIsLoadingUser } from 'redux/user/userSelectors.js';
import { userUpdate } from 'redux/user/userOperations';

function chooseTypeLink(type, value) {
  if (type === 'email') {
    return `mailto:${value}`;
  } else if (type === 'tel') {
    return `tel:${value}`;
  }
}
function findCity(label) {
  if (label === 'location') {
    return `city`;
  } else {
    return `${label}`;
  }
}

// function choosePattern(label) {
//   if (label === 'location') {
//     return `${/[A-Z][a-z]*,\s[A-Z][a-z]*/}`;
//   }
//   if (label === 'name') {
//     return `${/^[a-zA-Z]{2,20}$/}`;
//   }
//   if (label === 'email') {
//     return `${/^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/}`;
//   }
//   if (label === 'birthday') {
//     return;
//   }
//   if (label === 'phone') {
//     return `${/^\+380\d{9}$/}`;
//   }
// }

export const UserDataItem = ({
  activeField,
  setActiveField,
  type,
  label,
  value,
}) => {
  const [startUpdate, setStartUpdate] = useState(false);
  const [disable, setDisable] = useState(true);
  // const isLoading = useSelector(selectIsLoadingUser);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    birthday: '',
    phone: '',
    location: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormValues(prev => {
      return { ...prev, [label]: value };
    });
  }, [label, value]);

  const handleChange = e => {
    setDisable(false);
    setFormValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const changedField = Object.entries(formValues).find(item => item[1]);
    dispatch(userUpdate({ [changedField[0]]: changedField[1] }));
    setStartUpdate(false);
    setDisable(true);
    setActiveField(null);
  };
  const startUpdateField = label => {
    if (!activeField) {
      setStartUpdate(true);
      setActiveField(label);
    }
  };

  return (
    <>
      <LabelUserInfo htmlFor={label}>{findCity(label)}:</LabelUserInfo>
      <FormStyle onSubmit={handleSubmit}>
        {startUpdate  ? (
          <InputUserInfo
            type={type}
            name={label}
            id={label}
            value={formValues[label]}
            // pattern={choosePattern(label)}
            onChange={handleChange}
          />
        ): (type === 'email' || type === 'tel') ? (
          <ValueEmailTel href={chooseTypeLink(type, value)}>
            {value}
          </ValueEmailTel>
        ) : (
          <ValueText>{value}</ValueText>
        )}

        {!disable ? (
          <CircleBtn type="submit">
            <StyledCheck />
          </CircleBtn>
        ) : (
          <CircleBtn
            type="button"
            onClick={() => startUpdateField(label)}
            disabled={activeField && activeField !== label}
          >
            <StyledPencil />
          </CircleBtn>
        )}
      </FormStyle>
    </>
  );
};

UserDataItem.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};
