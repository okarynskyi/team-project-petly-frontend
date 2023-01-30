import { useState } from 'react';

import {
  HeaderSearchBar,
  IconSearch,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled.jsx';

import PropTypes from 'prop-types';


export const SearchBar = ({ submitForm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    setInput('');
  };

  const saveInputState = e => {
    setInput(e.target.value);
  };

  return (
    <HeaderSearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          onChange={saveInputState}
          name="name"
          type="text"
          autocomplete="off"
          placeholder="Search"
          value={input}
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <IconSearch />
        </SearchFormButton>
      </SearchForm>
    </HeaderSearchBar>
  );
};

SearchBar.propTypes = {
  submitForm: PropTypes.func,
};