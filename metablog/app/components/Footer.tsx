"use client";

import Link from 'next/link';

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Archived', href: '/archived' },
        { name: 'Author', href: '/author/alice-johnson'},
        { name: 'Contact', href: '/contact' },
    ];

    const categories = [
        { name: 'Lifestyle', href: '/category/lifestyle' },
        { name: 'Technology', href: '/category/technology' },
        { name: 'Travel', href: '/category/travel' },
        { name: 'Business', href: '/category/business' },
        { name: 'Economy', href: '/category/economy' },
        { name: 'Sports', href: '/category/sports' },
    ];
    
    const legalLinks = [
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
    ];

    return (
    <footer className='w-full mt-20 bg-gray-50 border-t border-gray-200 py-10'>

        <div className='max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-gray-700 text-sm'>
            {/* Colonne 1*/}
            <div className='space-y-4'>
                <h4 className='font-semibold mb-4 text-gray-900'> About </h4>
                <p>
                     MetaBlog is a modern blog platform sharing insights on technology,
                     design, and lifestyle.
                </p>
               <div className='space-y-1 pt-2'>
            <h4 className='font-semibold text-gray-900'>Email : <a href='mailto:info@jstemplate.net' className='font-normal hover:text-blue-600 transition'>info@jstemplate.net</a></h4>
            <h4 className='font-semibold text-gray-900'>Phone : <a href='tel:+880123456789' className='font-normal hover:text-blue-600 transition'>880 123 456 789</a></h4>
                </div> 
            </div>
            
            {/* Colonne 2*/}
            <div>
                <h4 className='font-semibold mb-4 text-gray-900'> Quick Links</h4>
                <ul className='space-y-2'>
                    {quickLinks.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className='hover:text-blue-600 transition'>
                            {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Colonne 3*/}
            <div>
                <h4 className='font-semibold mb-4 text-gray-900'>Categories</h4>
                <ul className='space-y-2'>
                    {categories.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className='hover:text-blue-600 transition'>
                            {item.name}
                            </Link>
                        </li> 
                    ))}
                </ul>
            </div>

            {/* Colonne 4*/}
            <div>
                <h4 className='font-semibold mb-4 text-gray-900'>
                    Weekly Newsletter
                </h4>
                <p className='mb-3'>Get blog articles and offers via email</p>

                <form onSubmit={(e) => e.preventDefault()} className='space-y-2'>
                    <input
                        type='email'
                        placeholder='Your email'
                        aria-label='Email for subscription'
                        className='border border-gray-300 rounded-full px-4 py-2 w-full text-sm placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition'
                    />
                    <button
                        type='submit'
                        className='bg-indigo-600 text-white w-full py-2 rounded-full font-medium hover:bg-indigo-700 transition'
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* Ligne du Copyright*/}
        <div className='max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200'>
            <div className='flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm'>

                {/* Logo du Copyright */}
                <div className='lex items-center space-x-2 mb-4 sm:mb-0'>
                    <span className='text-xl font-bold text-gray-900'>
                        MetaBlog
                    </span>
                    <p>
                       © JS Template 2023. All Rights Reserved. 
                    </p>
                </div>

                {/* Ligne legaux droite*/}
                <div className='flex flex-wrap justify-center sm:justify-start space-x-4'>
                    {legalLinks.map((item) => (
                        <Link key={item.name} href={item.href} className='hover:text-gray-900 transition whitespace-nowrap'>
                            {item.name}
                        </Link>
                    ))}
                </div>

            </div>

        </div>
    </footer>
    );
}
