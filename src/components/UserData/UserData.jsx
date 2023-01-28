// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { HiCamera, HiPencil  } from 'react-icons/hi';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import userAvatar from '../../staticImages/userAvatar.png';

const userInfoFromBack = [
  {
    id: 25635767,
    name: 'Alena',
    email: 'al@gmail.com',
    city: 'Tokio',
    birthday: '00.00.0000',
    avatarUrl: userAvatar,
    phone: '+380965749315',
  },
];

function checkType(item) {
  switch (item.label) {
    case 'email':
      return 'email';
    case 'phone':
      return 'tel';
    default:
      return 'text';
  }
}

export const UserData = ({ userInfo = userInfoFromBack }) => {
  let filterUserInfo = [];
  for (let key in userInfo[0]) {
    console.log('key', key);
    if (key === 'id' || key === 'avatarUrl') {
      continue;
    } else {
      filterUserInfo.push({ label: key, value: userInfo[0][key] });
    }
  }

  return (
    <section>
      <h2>My information:</h2>
      <label htmlFor="photoUser">
        <img
          src={userInfo[0].avatarUrl}
          alt="User avatar"
          style={{ width: '233px' }}
        />
        <HiCamera />
        Edit photo
        <input
          type="file"
          name="photo"
          id="photoUser"
          style={{ display: 'none' }}
        />
      </label>
      {userInfo && (
        <ul>
          {filterUserInfo.map(itemValue => (
            <li key={itemValue.label}>
              <UserDataItem
                type={checkType(itemValue)}
                label={itemValue.label}
                value={itemValue.value}
              />
              <HiPencil />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

UserData.propTypes = {
  userInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
