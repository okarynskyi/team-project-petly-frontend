import { NavLink, Outlet  } from "react-router-dom";
import { Container} from "../common/Container.styled";

 export const NoticesCategoryNav = () => {

  return (
 
      <>
           <Container>
        <h3>Кнопки переходу</h3>
              <ul>
                   <li>
          <NavLink to="/" >Sell</NavLink>
        </li>
        <li>
          <NavLink to="lost-found" >Lost and found</NavLink>
        </li>
        <li>
          <NavLink to= "in-good-hands" >In good hands</NavLink>
                  </li>
                  <li>
          <NavLink to="favorites-ads" >Favorite</NavLink>
        </li>
        <li>
          <NavLink to= "my-ads" >My ads</NavLink>
        </li>
        </ul>
      </Container>
      <Outlet />
    </>
     
   
  );
};
