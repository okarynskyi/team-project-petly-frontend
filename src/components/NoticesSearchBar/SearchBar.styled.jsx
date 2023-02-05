import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const HeaderSearchBar = styled.div`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  height: 44px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const SearchForm = styled.form`
  display: flex;
  max-width: 604px;
  width: 100%;
  align-items: center;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

export const SearchFormInput = styled.input`
  border: none;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  outline: none;
  width: 100%;
  margin-left: 20px;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.fs20};
    font-weight: ${props => props.theme.fontWeights.fw500};
    font: inherit;
    color: #535353;
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`;

export const IconSearch = styled(BiSearchAlt2)`
  width: 20px;
  height: 20px;
  margin: auto;
`;
