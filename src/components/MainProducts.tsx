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
                  info="Modelo 50UQ801C0SB.BWZ Tamanho 50 Polegadas Sistema Operacional webOS 22 Resolução 4K UHD (3840 x 2160) Processador α5 Gen5 AI Processor 4K Painel LCD/LED IMAGEM DTV Sim HDR10 Sim Upscaler 4K Upscaler Frequencia Nativa 60Hz"
                  tag="TELEVISORES"
                  price={2429}
               />
            </ul>
         </div>
      </div>
   )
}

// 640x 960
// src title info tag price