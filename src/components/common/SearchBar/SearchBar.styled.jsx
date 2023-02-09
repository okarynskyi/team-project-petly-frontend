import styled from 'styled-components';

export const StyledForm = styled.form`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 40px 10px 20px;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${props => props.theme.radii.br20};
  width: 100%;

  &:focus {
    outline: ${props => props.theme.borders.main};
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  padding: 12px 14px;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: black;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverAccent};
  }
`;
