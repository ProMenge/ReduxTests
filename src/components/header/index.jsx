import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";


// Utilities
import UserActionTypes from "../../redux/user/action-types"

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);

  const dispatch = useDispatch();

  console.log({ currentUser })

  const handleCartClick = () => {
    setCartIsVisible(true);
  }

  const handleLoginClick = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: {name: 'Fred', email: 'fred@menge.com'}
    });
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
          <div onClick={handleLoginClick} >Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
