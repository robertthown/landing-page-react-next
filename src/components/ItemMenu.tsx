import Image from 'next/image'
<script src="./scriptDropdown.js" />
import Arrow from '@/assets/arrow-down.svg'

type Props = {
    name: string
}



export function ItemMenu({name} : Props){
    return(
        <li className='hover:scale-110 transition duration-150 ease-in-out'>
            <button className='flex items-center gap-3' data-dropdown>
            <span className='text-white font-bold'>{name}</span>
            <Image 
                src={Arrow}
                alt='Arrow dropdown'
            />
            </button>
        </li>
    )
}