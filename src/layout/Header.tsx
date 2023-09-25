import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../components/cart/index'
import { useState } from 'react'

type Props = {
   isvisible: any
}

export default function Header({}: Props) {

   const [cartIsVisible, setCartIsVisible] = useState(false);


   const handleCartClick = () => {
      setCartIsVisible(true);
   };


   return (
      <div>
         <div className="header">
            <Image src='/cart.png' priority height={60} width={60} alt='cart' className='logo' />
            <p className='marca'><span>Rocha's</span>e-commerce</p>
            <div className='div_icons'>
               <button>
                  <AiOutlineHeart className="icon_heart" />
               </button>
               <button>
                  <AiOutlineShoppingCart className="icons cart" onClick={handleCartClick} />
               </button>
               <div className='div_descCart'>
                  <p className='descCart'>R$ 0,00</p>
                  <p className='descCart'>0 item</p>
               </div>
            </div>
         </div>
         <div>
            {cartIsVisible && <Cart isvisible="true" setIsVisible={setCartIsVisible} />}
         </div>
      </div>
   )
}