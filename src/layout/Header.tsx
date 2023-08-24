import {AiFillCloseSquare} from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {}

export default function Header({ }: Props) {

   const [cartVisible, setCartVisible] = useState<boolean>(false)

   return (
      <div>
         <div className="header">
            <Image src='/cart.png' priority height={60} width={60} alt='cart' className='logo' />
            <p className='marca'><span>Rocha's</span>e-commerce</p>
            <div className='div_icons'>
               <button>
                  <AiOutlineHeart className="icon_heart" onClick={() => setCartVisible(false)} />
               </button>
               <button>
                  <AiOutlineShoppingCart className="icons cart" onClick={() => setCartVisible(true)} />
               </button>
               <div className='div_descCart'>
                  <p className='descCart'>R$ 0,00</p>
                  <p className='descCart'>0 item</p>
               </div>
            </div>
         </div>
         {cartVisible ?
            <div id='modal'>
               <div className='fade'></div>
               <div className="modal">
                  <h2>texto do modal</h2>
                  <button onClick={() => setCartVisible(false)}><AiFillCloseSquare /></button>
               </div>
            </div> : ""}
      </div>
   )
}