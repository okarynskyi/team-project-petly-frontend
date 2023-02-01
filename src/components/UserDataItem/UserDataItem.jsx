import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  LabelUserInfo,
  ValueText,
  ValueEmailTel,
  InputUserInfo,
  StyledPencil,
  StyledCheck, FormStyle
} from './UserDataItem.styled';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { useDispatch} from 'react-redux';
// import {
//   selectUserUpdate,
//   selectIsDisabled,
// } from '../../redux/user/userSelectors';
import { userUpdate } from 'redux/user/userOperations';
// import { formatBirthDate } from 'helpers/formatDate';
function chooseTypeLink(type, value) {
  if (type === 'email') {
    return `mailto:${value}`;
  } else if (type === 'tel') {
    return `tel:${value}`;
  }
}

export const UserDataItem = ({ type, label, value }) => {
  const [startUpdate, setStartUpdate] = useState(false);
  const [disable, setDisable] = useState(true);
  // const isDisabled = useSelector(selectIsDisabled);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [birthday, setBirthday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const dispatch = useDispatch();

  const startUpdateField = event => {
    setStartUpdate(true);
  };
  const handleChange = e => {
    setDisable(false);
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'birthday':
        setBirthday(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name) {
      dispatch(userUpdate({ name }));
      setStartUpdate(false);
      setDisable(true);
    }
    if (city) {
      dispatch(userUpdate({ city }));
      setStartUpdate(false);
      setDisable(true);
    }
    if (phone) {
      dispatch(userUpdate({ phone }));
      setStartUpdate(false);
      setDisable(true);
    }
    if (birthday) {
      dispatch(userUpdate({ birthday }));
      setStartUpdate(false);
      setDisable(true);
    }
    if (email) {
      dispatch(userUpdate({ email }));
      setStartUpdate(false);
      setDisable(true);
    }
  };

  return (
    <>
      <LabelUserInfo htmlFor={label}>{label}:</LabelUserInfo>
      <FormStyle onSubmit={handleSubmit}>
        {startUpdate ? (
          <InputUserInfo
            type={type}
            name={label}
            id={label}
            onChange={handleChange}
          />
        ) : type === 'email' || type === 'tel' ? (
          <ValueEmailTel href={chooseTypeLink(type, value)}>
            {value}
          </ValueEmailTel>
        ) : type === 'date' && value === null ? (
          <ValueText>{value}</ValueText>
        ) : (
          <ValueText>{value}</ValueText>
        )}

        {!disable ? (
          <CircleBtn type="submit">
            <StyledCheck />
          </CircleBtn>
        ) : (
          <CircleBtn type="button" onClick={startUpdateField}>
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
  value: PropTypes.string.isRequired,
};
