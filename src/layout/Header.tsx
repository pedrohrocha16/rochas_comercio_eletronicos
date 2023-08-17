import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {}

export default function Header({ }: Props) {

   return (
      <div className="header">
         <Image src='/cart.png' height={60} width={60} alt='cart' className='logo' />
         <p className='marca'><span>Rocha's</span>e-commerce</p>
         <div className='div_icons'>
            <AiOutlineHeart className="icons" />
            <AiOutlineShoppingCart className="icons cart" />
            <div className='div_descCart'>
               <p className='descCart'>R$ 0,00</p>
               <p className='descCart'>0 item</p>
            </div>
         </div>
      </div>
   )
}