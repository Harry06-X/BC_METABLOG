"use client";

import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Single Post', href: '/singlepost' },
    { name: 'Pages', href: '/autorpost'},
    { name: 'Contact', href: '/' },
];

export default function Header() {
    return (
        <header className='w-full border-b border-gray-200 bg-white sticky top-0 z-10'>
            <div className='max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8'>

                {/*Logo Metablog */}
                    <Link href='/' className='flex items-center gap-2'>
                        <span className='text-2xl font-bold text-gray-900'>MetaBlog</span>
                    </Link>

                {/*Navigation principale */}
                <div className='flex items-center space-x-8'>
                    
                    {/*Navigation principale */}
                    <nav className='hidden lg:flex gap-6 text-gray-700 font-medium'>
                        {navLinks.map((link) => (
                           <Link key={link.name} href={link.href} className='hover:text-indigo-600 transition'>
                            {link.name}
                           </Link>
                        ))}
                    </nav>

                    {/*Barre de Recherche et Bouton de theme*/}
                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            {/* Input de recherche*/}
                            <input
                                type='text'
                                placeholder='Search'
                                className='bg-gray-100 rounded-lg pl-4 pr-10 py-2 text-sm w-36 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-500'
                                aria-label='Search blog posts'
                            />
                            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>🔍</span>
                        </div>

                        {/*Icone theme clair/sombre format text */}
                        <button 
                            className='p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-gray-300'
                            aria-label='Toggle theme or other action'
                        >
                        {/* Icône (remplacez par une icône réelle, ex: Lucide 'sun' ou 'moon') */}
                        ⭐
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}