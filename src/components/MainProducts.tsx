import ProductCard from "./ProductCard"

type Props = {}

export default function MainProducts({ }: Props) {
   return (
      <div className='main_products'>
         <h2>Produtos</h2>
         <div>
            <ul>
               <ProductCard
                  src="/products/gran_prime.jpg"
                  title="Samsung Galaxy Gran Prime"
                  info="Duos Dual Chip Tela de 5 Câmera 8MP Android 4.4 Processador Quad Core de 1.2Ghz Desbloqueado"
                  tag="CELULARES / ANDROID"
                  price={800}
               />
               <ProductCard
                  src="/products/iphone_14_pro.jpg"
                  title="Apple iPhone 14 Pro Max"
                  info="Tela Super Retina XDR de 6,7 polegadas, Câmera grande-angular de 48 MP para resolução até 4x maior"
                  tag="CELULARES / APPLE"
                  price={6700}
               />
               <ProductCard
                  src="/products/tv_lg_50.jpg"
                  title="Smart TV LED 50 4K UHD IA LG ThinQ"
                  info="Modelo 50UQ801C0SB.BWZ Tamanho 50 Polegadas Sistema Operacional webOS 22 Resolução 4K UHD (3840 x 2160) Processador α5 Gen5 AI Processor 4K Painel LCD/LED IMAGEM DTV Sim HDR10 Sim Upscaler 4K Upscaler Frequência Nativa 60Hz"
                  tag="TELEVISORES"
                  price={2429}
               />
               <ProductCard
                  src="/products/soundbar_jbl.jpg"
                  title="Soundbar JBL SB170BLKBR 2.1 Canais 220W"
                  info=" A inovadora SB170 proporciona experiência imersiva no universo das suas mídias favoritas. Feita para integrar facilmente a todas as decorações, vem em um profundo preto que vai combinar com a sua sala de estar. A Barra de Som carrega 110W RMS em potencial sonoro, surpreendendo a todos em cada toque."
                  tag="ARTIGOS SONOROS"
                  price={1099}
               />
               <ProductCard
                  src="/products/tablet_samsung.jpg"
                  title="TABLET SAMSUNG TAB A8 10.5"
                  info="Divertidamente estético e com um toque bacana, o Galaxy Tab A8 é energia pura, vibrante na aura e jovem na aparência. Com corpo de metal elegante, perfil ultrafino com apenas 6,9 mm, oferece o design de tablet da Samsung na cor grafite, que dá match perfeito com seu estilo"
                  tag="INFORMÁTICA"
                  price={1799}
               />
               <ProductCard
                  src="/products/computer.jpg"
                  title="Computador Gamer Completo RGB Intel Core i5 8GB HD 1TB Kit Gamer com Headset Monitor 20"
                  info="Intel Core i5 8GB HD 1TB"
                  tag="INFORMÁTICA / WINDOWS"
                  price={1859}
               />
               <ProductCard
                  src="/products/macbook.jpg"
                  title="MacBook Pro de 13 polegadas: Chip M2 da Apple"
                  info="CPU de 8 núcleos GPU de 10 núcleos Memória unificada de 8 GB SSD de 512 GB"
                  tag="INFORMÁTICA / APPLE"
                  price={6999}
               />
            </ul>
         </div>
      </div>
   )
}

// 640x 960
// src title info tag price

/* <ProductCard
src="/products/"
title=""
info=""
tag=""
price={ }
/> */