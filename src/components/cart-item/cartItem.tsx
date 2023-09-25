import React from 'react'
import Image  from 'next/image'
import { MdRemove, MdAdd } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

type Props = {
   src: any
   name: string
   price: number
}

function CartItem({ src, name, price }: Props) {

   const quantity = 0

   return (
      <div className='flex h-[200px] max-w-[400px]'>
         <div className='flex justify-center items-center h-[180px] m-[20px]'>
            <div>
               <Image src={src} width={125} height={125} alt='product_cart' className='max-w-[125px]' />
            </div>
            <div className='flex flex-row justify-center ml-[25px] items-center text-[14px] h-[80px] font-medium'>
               <div>
                  <p>{name}</p>
                  <p>R${price.toFixed(2)}</p>
                  <div className="text-[16px] flex items-center justify-center text-center gap-[10px] flex-row border-[1px] rounded-[10px] w-[100px] h-[30px] border-zinc-400 mt-5">
                     {quantity > 0 ? <MdRemove className="text-[18px]" /> : <IoMdTrash />} {quantity}<MdAdd />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem