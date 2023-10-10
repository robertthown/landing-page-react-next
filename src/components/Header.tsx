import Image from 'next/image'

import { ItemMenu } from './ItemMenu'
import { Search } from './Search'

import Logo from '../assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { Container } from './Container'



export function Header(){

    return(
        <header className="flex items-center w-full h-20 bg-primary-orange sticky top-0 z-20">
            <div className='absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-40'></div>
            <Container>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex items-center gap-14'>
                        <a href='/'>
                        <Image src={Logo} alt="Logo" className='hover:scale-110 transition duration-150 ease-in-out'/>
                        </a>
                        <div className='header'>
                            <ul className='flex items-center gap-12'>
                                    <ItemMenu name='Para você'/>
                                    <ItemMenu name='Para empresas' />
                                    <ItemMenu name='Serviços' />
                                    <ItemMenu name='Ajuda' />
                            </ul>
                        </div>
                    </div>
                    <Search />
                </div>
                <button className='flex items-center gap-4 bg-primary-blue h-20 pl-10 z-40'>
                    <Image 
                        src={IconUser} 
                        alt='icon-user' 
                    />
                    <span className='text-white font-bold hover:scale-110 transition duration-150 ease-in-out'>Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}