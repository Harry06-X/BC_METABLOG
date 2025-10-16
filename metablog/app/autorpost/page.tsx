"use client";

import React from 'react';
import Header from '../components/Header';
import LatestPosts from '../components/LatestPosts';
import Footer from '../components/Footer';

const AuthorBio = () => (
    <section className="py-8 md:py-12 px-4"> 
        <div
            className="max-w-6xl mx-auto p-6 md:p-10 bg-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl"
        >
            <div className="flex flex-col items-center text-center">
                <img 
                    src="/Doe.jpg" 
                    alt="Jonathan Doe"
                    className="w-16 h-16 rounded-full object-cover shadow-md ring-2 ring-white mb-3"
                />
                
                {/* Contenu textuel */}
                <div className="flex flex-col items-center mb-5">
                    <h1 className="text-lg font-bold text-gray-900 leading-none">
                        Jonathan Doe
                    </h1>
                    <p className="text-sm text-gray-500">
                        Collaborateur & Éditeur
                    </p>
                </div>

                {/*Description*/}
                <p className="text-sm text-gray-700 leading-relaxed italic max-w-lg mb-6">
                    Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.
                </p>

                {/*Liens sociaux*/}
                <div className="flex justify-center space-x-2">
                        
                    {/*Facebook*/}
                    <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded transition duration-150">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.238 0-4.192 1.583-4.192 4.615v2.385z"/></svg>
                    </a>
                        
                    {/*Twitter*/}
                    <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded transition duration-150">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.814L4.99 21.75H1.68l7.24-8.26L1.04 2.25H8.04l4.71 6.273zm-1.12 17.52l1.62-2.128-5.32-7.042-4.14-5.464H5.35L11.516 12.8L4.9 20.279h3.763l4.312-5.717z"/></svg>
                    </a>

                    {/*Instagram*/}
                    <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded transition duration-150">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.77 1.624 4.99 4.673.047 1.096.06 1.402.07 4.316.01 2.914-.01 3.22-.07 4.316-.224 3.048-1.742 4.523-4.99 4.672-1.266.058-1.646.07-4.85.07s-3.585-.012-4.849-.07c-3.254-.148-4.77-1.624-4.99-4.672-.047-1.096-.06-1.402-.07-4.316 0-2.914.01-3.22.07-4.316.224-3.048 1.74-4.523 4.99-4.672 1.265-.058 1.644-.07 4.849-.07zm0-2.163c-3.265 0-3.673.013-4.954.072-4.352.2-6.57 2.417-6.772 6.772-.058 1.281-.07 1.689-.07 4.954s.012 3.673.07 4.954c.2 4.352 2.418 6.57 6.772 6.772 1.281.058 1.689.07 4.954.07s3.673-.012 4.954-.07c4.352-.2 6.57-2.418 6.772-6.772.058-1.281.07-1.689.07-4.954s-.012-3.673-.07-4.954c-.2-4.352-2.418-6.57-6.772-6.772-1.281-.058-1.689-.07-4.954-.07zm0 5.484c-3.617 0-6.545 2.928-6.545 6.545s2.928 6.545 6.545 6.545 6.545-2.928 6.545-6.545-2.928-6.545-6.545-6.545zm0 10.925c-2.417 0-4.38-1.963-4.38-4.38s1.963-4.38 4.38-4.38 4.38 1.963 4.38 4.38-1.963 4.38-4.38 4.38zm6.571-11.458c0-.783.636-1.42 1.42-1.42.784 0 1.42.637 1.42 1.42s-.636 1.42-1.42 1.42c-.784 0-1.42-.637-1.42-1.42z"/></svg>
                    </a>

                    {/*YouTube*/}
                    <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded transition duration-150">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.235 0-3.654.249-5.186 1.34-5.348 5.761-.137 3.18-.137 7.025 0 10.205.162 4.421 1.694 5.512 5.348 5.761 3.604.246 11.631.245 15.235 0 3.654-.249 5.186-1.34 5.348-5.761.137-3.18.137-7.025 0-10.205-.162-4.421-1.694-5.512-5.348-5.761zm-10.615 11.516v-8.7c.002-.275.122-.533.342-.727.22-.194.512-.294.805-.294.293 0 .584.1.805.294l6.208 4.35c.196.166.315.412.315.688 0 .275-.119.521-.315.687l-6.208 4.35c-.22.194-.512.294-.805.294s-.584-.1-.805-.294c-.22-.194-.34-.452-.342-.727z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default function AuthorPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main>
                <AuthorBio />
                {/*Titre de la section */}
                <section className="mt-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-16 mb-10">
                    <h3 className="text-3xl font-extrabold text-gray-900">
                        Latest Post
                    </h3>
                </section>
                <LatestPosts />
            </main>
            <Footer />
        </div>
    );
}
