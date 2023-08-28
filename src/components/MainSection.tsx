import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import MainList from './MainList'
import { motion } from 'framer-motion'
import MainProducts from './MainProducts'


type Props = {

}

export default function MainSection({ }: Props) {
  return (
    <div className='mainSection'>
      <label htmlFor="search" className='div_search'>
        <input type="text" placeholder='Buscar produtos' id='search' className="search" />
        <FaSearch className="icon_search" />
      </label>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <main>
          <div className='select-none flex flex-col max-h-[70vh] md:h-[400px] sm:m-[30px] text-center items-center'>
            <h1 className='font-[600] w-full text-[30px]'>Encontre o seu produto com o melhor preço do mercado!</h1>
            <p className='font-light w-full'>Rocha's e-commerce há mais de 10 anos sendo referência em vendas no país!</p>
            <Image src="/peoplebuying.png" width={200} height={200} alt='people' className="w-auto h-auto" priority />
          </div>
          <div className='mt-[2rem]'>
            <MainList />
          </div>
        </main>
      </motion.div>
      <MainProducts />
    </div >
  )
}