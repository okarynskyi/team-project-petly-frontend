import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import { nanoid } from 'nanoid';
// import { v4 as uuidv4 } from 'uuid';

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
  const token = useSelector(selectToken);
// const unauthorizedFilterId = nanoid();
// const authorizedFilterId = nanoid();
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  // console.log(category)

  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <FilterList>
        {/* {console.log(test)} */}
        {buttons.map(b => (
          <Item key={nanoid()}>
            <Button
              to={b.link === category ? '/notices/' : b.link}
              name={b.link}
            >
              {b.btn}
              {/* {console.log(b.link)} */}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={nanoid()}>
              <Button
                to={b.link === category ? '/notices/' : b.link}
                name={b.link}
              >
                {b.btn}
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