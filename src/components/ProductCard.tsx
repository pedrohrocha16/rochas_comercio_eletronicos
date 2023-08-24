import Image from "next/image"
import { IoAddCircle } from 'react-icons/io5'

type Props = {
   src: string
   title: string
   info: string
   tag: string
   price: number
}

export default function ProductCard({ src, title, info, tag, price }: Props) {
   return (
      <li>
         <div className='flex flex-col items-center'>
            <Image src={src} width={200} height={200} alt='product' className="w-auto h-auto" priority />
            <h4>{title}</h4>
            <span>{info}</span>
         </div>
         <div className='products_price'>
            <p>R${price.toFixed(2)}</p>
            <IoAddCircle className="products_price_icon" />
         </div>
         <div className='products_tags'>
            <p>Tags: {tag}</p>
         </div>
      </li>
   )
}