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
      <Styles.CartContent className="animate-[bounce_0.4s_ease-in-out]">
        <Styles.CartTitle>Carrinho de compras</Styles.CartTitle>
        {products.map((product) => (
          <div key={product.id}>
            <CartItem product={product} />
          </div>
        ))}
        {productsTotalPrice > 0 ? (
          <Styles.CartTotal>
            <p className="text-[14px] font-normal">
              Subtotal: R$ {productsTotalPrice.toFixed(2)}
            </p>
          </Styles.CartTotal>
        ) : (
          <p>Seu carrinho está vazio!</p>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
