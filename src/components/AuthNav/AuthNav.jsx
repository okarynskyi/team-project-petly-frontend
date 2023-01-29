import { AuthNavStyled, ButtonAuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <ButtonAuthLink to="/login" size="95px">
        Login
      </ButtonAuthLink>
      <ButtonAuthLink to="/register" size="144px">
        Registration
      </ButtonAuthLink>
    </AuthNavStyled>
  );
};
