import { NavLink, Outlet  } from "react-router-dom";
import { Container} from "../common/Container.styled";

 export const NoticesCategoryNav = () => {

  return (
 
      <>
           <Container>
        <h3>Кнопки переходу</h3>
      <ul>
        <li>
          <NavLink to="lost-found" >Lost and found</NavLink>
        </li>
        <li>
          <NavLink to= "in-good-hands" >In good hands</NavLink>
        </li>
        </ul>
      </Container>
      <Outlet />
    </>
     
   
  );
};
