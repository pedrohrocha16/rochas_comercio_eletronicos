// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cartItem";

const Cart = ({ setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <Styles.CartContainer isvisible>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Carrinho de compras</Styles.CartTitle>
        {products.map((product) => (
          <div key={product.price}>
            <CartItem
              src={product.src}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
