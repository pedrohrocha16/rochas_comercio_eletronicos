import React from 'react'
import Image from 'next/image'
import { MdRemove, MdAdd } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

type Props = {
   product: any
}

function CartItem({ product }: Props) {

   return (
      <div className='flex h-[200px] max-w-[400px]'>
         <div className='flex justify-center items-center h-[180px] m-[20px]'>
            <div>
               <Image src={product.src} width={125} height={125} alt='product_cart' className='max-w-[125px]' />
            </div>
            <div className='flex flex-row justify-center ml-[25px] items-center text-[14px] h-[80px] font-medium'>
               <div>
                  <p>{product.name}</p>
                  <p>R${product.price}</p>
                  <div className="text-[16px] flex items-center justify-center text-center gap-[10px] flex-row border-[1px] rounded-[10px] w-[100px] h-[30px] border-zinc-400 mt-5">
                     {product.quantity > 0 ? <MdRemove className="text-[18px]" /> : <IoMdTrash />} {product.quantity}<MdAdd />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem