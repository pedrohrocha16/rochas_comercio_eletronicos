// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cartItem";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isvisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isvisible>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent className="duration-75">
        <Styles.CartTitle>Carrinho de compras</Styles.CartTitle>
        {products.map((product) => (
          <div key={product.id}>
            <CartItem product={product} />
          </div>
        ))}
        <Styles.CartTotal>
          <p className="text-[14px] font-normal">Subtotal: R$ {productsTotalPrice.toFixed(2)}</p>
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
