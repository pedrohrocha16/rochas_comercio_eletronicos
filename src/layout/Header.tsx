import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {}

export default function Header({ }: Props) {


   return (
      <div>
         <div className="header">
            <Image src='/cart.png' priority height={60} width={60} alt='cart' className='logo' />
            <p className='marca'><span>Rocha's</span>e-commerce</p>
            <div className='div_icons'>
               <button>
                  <AiOutlineHeart className="icon_heart"/>
               </button>
               <button>
                  <AiOutlineShoppingCart className="icons cart"/>
               </button>
               <div className='div_descCart'>
                  <p className='descCart'>R$ 0,00</p>
                  <p className='descCart'>0 item</p>
               </div>
            </div>
         </div>
      </div>
   )
}