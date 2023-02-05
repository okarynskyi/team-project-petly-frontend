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
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ submitForm }) => {
  const [input, setInput] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input });
    //  submitForm(input);
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


// import { useState } from 'react';

// import {
//   HeaderSearchBar,
//   IconSearch,
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from './SearchBar.styled.js';
// import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';

// export const SearchBar = ({ submitForm }) => {
//   const [input, setInput] = useState('');
//   const [, setSearchParams] = useSearchParams();

//   const handleSubmit = e => {
//     e.preventDefault();
//     // Эта функция которая отвечает за отправку запроса. Приходит в пропсе. Нужно обраьотать напильником
//     setSearchParams({ text: input });
//     // submitForm(input);
//     setInput('');
//   };

//   const saveInputState = e => {
//     setInput(e.target.value);
//   };

//   return (
//     <HeaderSearchBar>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchFormInput
//           onChange={saveInputState}
//           name="name"
//           type="text"
//           autocomplete="off"
//           placeholder="Search"
//           value={input}
//         />
//         <SearchFormButton type="submit">
//           <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           <IconSearch />
//         </SearchFormButton>
//       </SearchForm>
//     </HeaderSearchBar>
//   );
// };

// SearchBar.propTypes = {
//   submitForm: PropTypes.func,
// };