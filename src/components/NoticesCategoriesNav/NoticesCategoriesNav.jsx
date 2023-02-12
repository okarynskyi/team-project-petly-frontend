import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { nanoid } from 'nanoid';
import {
  Button,
  FilterList,
  Item,
  Wrapper,
  AuthLinks,
  CommonLinks,
} from './NoticesCategoriesNav.styled';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice.jsx';

const buttons = [
  {
    btn: 'sell',
    link: 'sell',
  },
  {
    btn: 'in good hands',
    link: 'in-good-hands',
  },
  {
    btn: 'lost/found',
    link: 'lost-found',
  },

];

const authButtons = [
  {
    btn: 'favorite ads',
    link: 'favorites-ads',
  },
  {
    btn: 'my ads',
    link: 'my-ads',
  },
];

function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <FilterList>
        <CommonLinks>
          {buttons.map(b => (
            <Item key={nanoid()}>
              <Button to={'/notices/' + b.link} name={b.link}>
                {b.btn}
              </Button>
            </Item>
          ))}
        </CommonLinks>
        <AuthLinks>
          {isLoggedIn &&
            authButtons.map(b => (
              <Item key={nanoid()}>
                <Button to={'/notices/' + b.link} name={b.link}>
                  {b.btn}
                </Button>
              </Item>
            ))}
        </AuthLinks>
      </FilterList>
      <ModalAddNotice></ModalAddNotice>
    </Wrapper>
  );
}

export default NoticesCategoriesNav;
