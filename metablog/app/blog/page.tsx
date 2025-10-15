"use client"

import Header from "../components/Header"
import LatestPosts from "../components/LatestPosts"
import NewsletterBanner from "../components/NewsletterBanner"
import Footer from "../components/Footer"

const HeroPost = () => (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <img
                src="/hero.jpg"
                alt="Hero"
                className="w-full h-full object-cover aspect-video max-h-[600px] transition duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 max-w-full md:max-w-[600px] bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-md inline-block mb-3">
                    Technology
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </h2>
                <div className="flex items-center gap-3 mt-5">
                    <img src="/Francisco.jpg" alt="Author" width={35} height={35} className="rounded-full object-cover w-[35px] h-[35px]"/>
                    <span className="text-gray-200 text-sm font-medium">Jason Francisco</span>
                    <span className="text-gray-400 text-sm font-medium">• August 20, 2022</span>
                </div>
            </div>
        </div>
    </section>
);

const BLogBreadcrumb = () => (
    <div className="mt-8 text-center">
        <h4 className="font-bold text-gray-900 text-2xl">Page Title</h4>
        <div className="flex items-center justify-center mt-2 text-sm text-gray-500 gap-2">
            <span className="text-gray-700 font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600 font-medium">Blog Listin</span>
        </div>
    </div>
);

export default function Blog() {
    return (
        <main className="flex flex-col items-center bg-gray-50 min-h-screen font-sans w-full">
            <Header />
            <BLogBreadcrumb />
            <HeroPost />
            <LatestPosts />

            {/*Bouttom du Load More */}
            <div className="text-center mt-6 mb-12">
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium 
                     rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-150">
                        Load more
                </button>
            </div>
            
            <NewsletterBanner />
            <Footer />
        </main>
    );
}