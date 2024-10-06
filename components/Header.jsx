import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
    return (
        <header className='py-8 xl:py-12 '>
            <div className='container mx-auto'>
                {/* logo */}
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>IngaDI<span className='text-accent'>.</span></h1>
                </Link>
            </div>
        </header>
    )
}

export default Header
