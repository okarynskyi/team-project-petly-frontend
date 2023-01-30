import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { nanoid } from 'nanoid';

import { Button, FilterList, Item, Wrapper } from './FilterNoticesButton.styled.jsx';
import { useLocation } from 'react-router-dom';
import AddNoticeButton from '../../components/AddNoticeButton/AddNoticeButton';

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
const unauthorizedFilterId = nanoid();
const authorizedFilterId = nanoid();
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={unauthorizedFilterId}>
            <Button
              to={b.link === category ? '/notices' : b.link}
              name={b.link}
            >
              {b.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={authorizedFilterId}>
              <Button
                to={b.link === category ? '/notices' : b.link}
                name={b.link}
              >
                {b.btn}
              </Button>
            </Item>
          ))}
      </FilterList>
      <AddNoticeButton />
    </Wrapper>
  );
}

export default FilterNoticesButton;