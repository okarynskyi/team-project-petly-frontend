import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { StyledForm, StyledInput, StyledBtn } from './SearchBar.styled';

export const SearchBar = ({
  value,
  onChange,
  onSubmit,
  onReset,
  searchValue,
}) => {
  return (
    <StyledForm onSubmit={onSubmit} onReset={onReset}>
      <StyledInput
        type="text"
        name="title"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />

      {!searchValue && (
        <StyledBtn type="submit">
          <AiOutlineSearch />
        </StyledBtn>
      )}
      {searchValue && (
        <StyledBtn type="reset">
          <TiDeleteOutline />
        </StyledBtn>
      )}
    </StyledForm>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
