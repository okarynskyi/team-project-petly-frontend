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
import { userUpdate } from 'redux/user/userOperations';
import { getCurrent } from 'helpers/formatDate';
import { chooseTypeLink, findCity } from './helpersForRender';
import { toast } from 'react-toastify';

export const UserDataItem = ({
  activeField,
  setActiveField,
  type,
  label,
  value,
}) => {
  const [startUpdate, setStartUpdate] = useState(false);
  const [disable, setDisable] = useState(true);
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
  // const activeInput = document.querySelector(`#${activeField}`);
  // const handleClickOutside = event => {
  // if (activeField && !startUpdate ) {
  // if (event.target !== activeInput) {
  //   setStartUpdate(false);
  //   setDisable(true);
  //   setActiveField(null);
  // }
  // }
  // };
  // window.addEventListener('mouseup', handleClickOutside);

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
    const emaill = formValues.email;
    const nik = emaill.indexOf('@');
    const validNik = emaill.slice(0, nik);
    if (formValues.email && validNik.length <= 1) {
      toast.error('Add more than 1 symbol before "@" ');
      return;
    }
    if (formValues.email && formValues.email.length > 22) {
      toast.error('Email must contain at least 22 symbols');
      return;
    }
    const number = formValues.phone;
    const validStart = number.slice(0, 4);
    if (formValues.phone && validStart !== '+380') {
      toast.error('Must start with "+380"');
      return;
    }
    if (
      formValues.name &&
      (formValues.name.length < 2 || formValues.name.length > 20)
    ) {
      toast.error('Name must be in English and contain 2-20 symbols');
      return;
    }
    if (
      formValues.location &&
      (formValues.location.length < 4 || formValues.location.length > 40)
    ) {
      toast.error(
        'City must be in English and contain not more than 40 symbols'
      );
      return;
    }
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
        {startUpdate ? (
          type === 'date' ? (
            <InputUserInfo
              type={type}
              name={label}
              id={label}
              max={getCurrent()}
              value={formValues[label]}
              onChange={handleChange}
            />
          ) : (
            <InputUserInfo
              type={type}
              name={label}
              id={label}
              value={formValues[label]}
              onChange={handleChange}
            />
          )
        ) : type === 'email' || type === 'tel' ? (
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
            onClick={() => {
              startUpdateField(label);
            }}
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
  activeField: PropTypes.string,
  setActiveField: PropTypes.func,
};
