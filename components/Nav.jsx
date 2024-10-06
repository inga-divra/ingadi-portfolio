'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const Nav = () => {
    return (
        <nav>
            Desktop nav
        </nav>
    )
}

export default Nav
