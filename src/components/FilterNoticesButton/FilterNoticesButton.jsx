import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { selectNoticesByCategory } from '../../redux/notices/noticesSelectors';
import { nanoid } from 'nanoid';

import { Button, FilterList, Item, Wrapper } from './FilterNoticesButton.styled.jsx';
import { useLocation } from 'react-router-dom';
import { AddNoticeButton } from '../../components/AddNoticeButton/AddNoticeButton';

import { useState } from 'react';
import ModalAddPet from 'components/ModalAddsPet/ModalAddsPet.jsx';


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
  const test = useSelector(selectNoticesByCategory);
  const token = useSelector(selectToken);
// const unauthorizedFilterId = nanoid();
// const authorizedFilterId = nanoid();
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <FilterList>
        {console.log(test)}
        {buttons.map(btn => (
          <Item key={nanoid()}>
            <Button
              to={btn.link === category ? '/notices/:categoryName' : btn.link}
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
                to={btn.link === category ? '/notices/:categoryName' : btn.link}
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
      <ModalAddPet
      active={modalActive} 
      setActive={setModalActive}
      >
        </ModalAddPet>
    </Wrapper>
  );
}

export default FilterNoticesButton;