import Image from "next/image";
import { Container } from "./Container";

import ImgAppleStore from '@/assets/btn-apple-store.svg'
import ImgGooglePlay from '@/assets/btn-google-play.svg'
import Arrow from '@/assets/arrow-explorer.svg'
import WomanImage from '@/assets/woman.png'

export function SectionHero(){
    

    return(
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                    <div className="flex gap-6 mb-24">
                        <button>
                            <Image 
                                src={ImgAppleStore}
                                alt="Imagem Apple Store"
                                className='hover:scale-110 transition duration-150 ease-in-out'
                            />
                        </button>
                        <button>
                            <Image 
                                src={ImgGooglePlay}
                                alt="Imagem Google Play"
                                className='hover:scale-110 transition duration-150 ease-in-out'
                            />
                        </button>
                    </div>
                    <button className="flex items-center gap-3 hover:scale-110 transition duration-150 ease-in-out">
                        <Image 
                            src={Arrow}
                            alt="Arrow down"
                        />
                        <a href="#servicos">
                            <span className="text-white text-sm font-bold">Continue explorando</span>
                        </a>
                    </button>

                </div>
                <div className="mr-[-41px]">
                    <Image 
                        src={WomanImage} 
                        alt="Woman Image" 
                    />
                </div>

            </Container>
        </section>
    )
}