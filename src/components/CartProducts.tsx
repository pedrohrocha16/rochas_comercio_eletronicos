import { AiFillCloseSquare } from 'react-icons/ai'

type Props = {
   func?: any
   condition?: boolean
}

export default function CartProducts({ func, condition }: Props) {

   return (
      <div id='modal'>
         <div className='fade'></div>
         <div className="modal">
            <h2 className="title_car">Carrinho de Compras</h2>
            <button className='modal_close' onClick={() => func(condition)}><AiFillCloseSquare /></button>
            <div className="dados_car">
               <p className='quantd_item_car'>Quantidade</p>
               <button className='quantd_item_remove'>Esvaziar Carrinho</button>
            </div>
         </div>
      </div>
   )
}