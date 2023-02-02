import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import { nanoid } from 'nanoid';

import {
  Button,
  FilterList,
  Item,
  Wrapper,
} from './FilterNoticesButton.styled.jsx';
// import { AddNoticeButton } from '../../components/AddNoticeButton/AddNoticeButton';

// import { useState } from 'react';
// import ModalAddPet from 'components/ModalAddsPet/ModalAddsPet.jsx';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice.jsx';

const buttons = [
  {
    btn: 'lost/found',
    link: 'lost-found',
  },
  {
    btn: 'in good hands',
    link: 'in-good-hands',
  },
  {
    btn: 'sell',
    link: 'sell',
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

function FilterNoticesButton() {
  const token = useSelector(selectToken);
  // const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={nanoid()}>
            <Button to={'/notices/' + b.link} name={b.link}>
              {b.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={nanoid()}>
              <Button to={'/notices/' + b.link} name={b.link}>
                {b.btn}
              </Button>
            </Item>
          ))}
      </FilterList>

      <ModalAddNotice></ModalAddNotice>
    </Wrapper>
  );
}

export default FilterNoticesButton;
