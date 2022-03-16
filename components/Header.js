import Link from 'next/link'
import Image from 'next/image'
import pokebal from '../public/logo-pokebal.png'
import { useRouter } from "next/router";

export default function Header () {
    const router = useRouter();
    return(
        <header>

            <div className='logo-loja'>
                <Image className='pokebal'
                    src={pokebal}
                    alt="Pokéball"
                    width='100px'    
                    height='100%' 

                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
                <p className='store-name'>Poke-Store</p>
            </div>

            <ul className='nav-list'>
                <li className={router.pathname == "/" ? "active" : ""}>
                <Link href="/ ">
                        <a title='Home'>Home</a>
                    </Link>
                </li>
                <li className={router.pathname == "/about" ? "active" : ""}>
                    <Link href="/about">
                        <a title='About this project'>About Us</a>
                    </Link>
                </li>
                <li className={router.pathname == "/category" ? "active" : ""}>
                    <Link href="/category">
                        <a title='About this project'>Category</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
