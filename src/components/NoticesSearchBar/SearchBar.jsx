import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { StyledForm, StyledInput, StyledBtn } from '../../components/NewsSearchBar/SearchBar.styled';
import PropTypes from 'prop-types';


export const SearchBar = ({ 
  value,
  onChange,
  onSubmit,
  onReset,
  searchValue, }) => {

  return (
      <StyledForm onSubmit={onSubmit} onReset={onReset}>
        <StyledInput
          onChange={onChange}
          name="name"
          type="text"
          placeholder="Search"
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
}