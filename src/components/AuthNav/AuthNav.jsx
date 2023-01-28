import { AuthNavStyled, ButtonAuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <ButtonAuthLink to="/login">Login</ButtonAuthLink>
      <ButtonAuthLink to="/register">Registration</ButtonAuthLink>
    </AuthNavStyled>
  );
};

// import { UlStyled, BtnReg, BtnLog } from './AuthNav.styled';

// export const AuthNav = ({ onClose }) => {
//   return (
//     <>
//       <UlStyled>
//         <li>
//           <BtnLog type="button" href="/login" onClick={onClose}>
//             Login
//           </BtnLog>
//         </li>
//         <li>
//           <BtnReg type="button" href="/register" onClick={onClose}>
//             Registration
//           </BtnReg>
//         </li>
//       </UlStyled>
//     </>
//   );
// };

// import { ListItem, ButtonAuthLink } from './AuthNav.styled';

// export const AuthNav = () => {
//   return (
//     <>
//       <ListItem>
//         <ButtonAuthLink type="button" href="/login">
//           Login
//         </ButtonAuthLink>
//       </ListItem>
//       <ListItem>
//         <ButtonAuthLink type="button" href="/register">
//           Registration
//         </ButtonAuthLink>
//       </ListItem>
//     </>
//   );
// };
