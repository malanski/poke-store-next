import Link from 'next/link'
import Image from 'next/image'
import pokebal from '../public/logo-pokebal.png'

export default function Header () {
    return(
        <header>
             <Image className='pokebal'
                src={pokebal}
                alt="Pokéball"
                width='100px'    
                height='100%' 

                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
            />
            <p className='store-name'>Poke-Store</p>

            <ul className='nav-list'>
                <li>
                <Link href="/ ">
                        <a title='Home'>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a title='About this project'>About Us</a>
                    </Link>
                </li>
                <li>Pokémon</li>
            </ul>
        </header>
    )
}
