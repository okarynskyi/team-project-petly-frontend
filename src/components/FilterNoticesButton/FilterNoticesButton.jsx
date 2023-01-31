import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { nanoid } from 'nanoid';

import { Button, FilterList, Item, Wrapper } from './FilterNoticesButton.styled.jsx';
import { useLocation } from 'react-router-dom';
import AddNoticeButton from '../../components/AddNoticeButton/AddNoticeButton';

import { useState } from 'react';
import ModalNotice from 'components/ModalNotice/ModalNotice.jsx';

const buttons = [
  {
    btn: 'lost/found',
    link: 'lost-found',
  },
  {
    btn: 'in good hands',
    link: 'for-free',
  },
  {
    btn: 'sell',
    link: 'sell',
  },
];

const authButtons = [
  {
    btn: 'favorite ads',
    link: 'favorites',
  },
  {
    btn: 'my ads',
    link: 'personal',
  },
];

function FilterNoticesButton() {
  const token = useSelector(selectToken);
// const unauthorizedFilterId = nanoid();
// const authorizedFilterId = nanoid();
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(btn => (
          <Item key={nanoid()}>
            <Button
              to={btn.link === category ? '/notices' : btn.link}
              name={btn.link}
            >
              {btn.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(btn => (
            <Item key={nanoid()}>
              <Button
                to={btn.link === category ? '/notices' : btn.link}
                name={btn.link}
              >
                {btn.btn}
              </Button>
            </Item>
          ))}
      </FilterList>
      <AddNoticeButton 
      onClick={() => setModalActive(true)}
      >
      </AddNoticeButton>
      <ModalNotice
      active={modalActive} 
      setActive={setModalActive}
      >
        </ModalNotice>
    </Wrapper>
  );
}

export default FilterNoticesButton;