import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import MainList from './MainList'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

type Props = {}

export default function MainSection({ }: Props) {


  let products: any[] = [
    { id: 0, src: "/products/gran_prime.jpg", name: "Samsung Galaxy Gran Prime", info: "Duos Dual Chip Tela de 5 Câmera 8MP Android 4.4 Processador Quad Core de 1.2Ghz Desbloqueado", quantity: 0, tag: "CELULARES / ANDROID", price: 800 },
    { id: 1, src: "/products/iphone_14_pro.jpg", name: "Apple iPhone 14 Pro Max", info: "Tela Super Retina XDR de 6,7 polegadas, Câmera grande-angular de 48 MP para resolução até 4x maior", quantity: 0, tag: "CELULARES / APPLE", price: 6700 },
    { id: 2, src: "/products/tv_lg_50.jpg", name: "Smart TV LED 50 4K UHD IA LG ThinQ", info: "Modelo 50UQ801C0SB.BWZ Tamanho 50 Polegadas Sistema Operacional webOS 22 Resolução 4K UHD (3840 x 2160) Processador α5 Gen5 AI Processor 4K Painel LCD/LED IMAGEM DTV Sim HDR10 Sim Upscaler 4K Upscaler Frequência Nativa 60Hz", quantity: 0, tag: "TELEVISORES", price: 2429 },
    { id: 3, src: "/products/soundbar_jbl.jpg", name: "Soundbar JBL SB170BLKBR 2.1 Canais 220W", info: "A inovadora SB170 proporciona experiência imersiva no universo das suas mídias favoritas. Feita para integrar facilmente a todas as decorações, vem em um profundo preto que vai combinar com a sua sala de estar. A Barra de Som carrega 110W RMS em potencial sonoro, surpreendendo a todos em cada toque.", quantity: 0, tag: "ARTIGOS SONOROS", price: 1099 },
    { id: 4, src: "/products/tablet_samsung.jpg", name: "TABLET SAMSUNG TAB A8 10.5", info: "Divertidamente estético e com um toque bacana, o Galaxy Tab A8 é energia pura, vibrante na aura e jovem na aparência. Com corpo de metal elegante, perfil ultrafino com apenas 6,9 mm, oferece o design de tablet da Samsung na cor grafite, que dá match perfeito com seu estilo", quantity: 0, tag: "INFORMÁTICA", price: 1799 },
    { id: 5, src: "/products/computer.jpg", name: "Computador Gamer Completo RGB Intel Core i5 8GB HD 1TB Kit Gamer com Headset Monitor 20", info: "Intel Core i5 8GB HD 1TB", quantity: 0, tag: "INFORMÁTICA / WINDOWS", price: 1859 },
    { id: 6, src: "/products/macbook.jpg", name: "MacBook Pro de 13 polegadas: Chip M2 da Apple", info: "CPU de 8 núcleos GPU de 10 núcleos Memória unificada de 8 GB SSD de 512 GB", quantity: 0, tag: "INFORMÁTICA / APPLE", price: 6999 },
  ]

  let Cart: any[] = []

  function handleClick(product: any) {
    const newItem = [
      product.id,
      product.src,
      product.name,
      product.price.toFixed(2),
      product.quantity
    ]
    Cart.push(newItem)
  }

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
          <div className='select-none flex flex-col max-h-[550px] sm:h-[400px] sm:m-[30px] text-center items-center'>
            <h1 className='font-[600] w-full text-[30px]'>Encontre o seu produto com o melhor preço do mercado!</h1>
            <p className='font-light w-full'>Rocha's e-commerce há mais de 10 anos sendo referência em vendas no país!</p>
            <Image src="/peoplebuying.png" width={200} height={200} alt='people' className="w-auto h-auto" priority />
          </div>
          <div className='mt-[2rem]'>
            <MainList />
          </div>
        </main>
        <div className='main_products'>
          <h2>Produtos</h2>
          <ul>
            {products && products.map((product) => (
              <div key={product.id} onClick={() => handleClick(product)}>
                <ProductCard
                  src={product.src}
                  name={product.name}
                  info={product.info}
                  tag={product.tag}
                  price={product.price}
                />
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </div >
  )
}

