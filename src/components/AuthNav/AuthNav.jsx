import { AuthNavStyled, ButtonAuthLink } from './AuthNav.styled';

export const AuthNav = ({ onClose }) => {
  return (
    <AuthNavStyled>
      <ButtonAuthLink onClick={onClose} to="/login" size="95px">
        Login
      </ButtonAuthLink>
      <ButtonAuthLink onClick={onClose} to="/register" size="144px">
        Registration
      </ButtonAuthLink>
    </AuthNavStyled>
  );
};
