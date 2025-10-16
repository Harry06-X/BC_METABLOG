"use client"

import React from 'react';
import Header from '../components/Header';
import NewsletterBanner from '../components/NewsletterBanner';
import Footer from '../components/Footer';


const PostContent = () => (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-4">
            Technology
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
                <span className="font-medium text-gray-700">Tracey Wilson</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center">
                <span>August 20, 2022</span>
            </div>
        </div>

        {/*Image Principale*/}
        <figure className="mb-10 rounded-xl overflow-hidden shadow-xl">
            <img 
                src="/tom_aran.jpg" 
                alt="Budapest at night"
                className="w-full h-auto object-cover"
            />
        </figure>

        {/* Corps de l'Article */}
        <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
                Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
            </p>

            <p>
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Research Your Destination</h2>
            <p>
                Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Plan Your Itinerary</h2>
            <p>
                While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
            </p>

            {/* Citation / Blockquote */}
            <blockquote className="border-l-4 border-indigo-600 pl-4 py-2 my-6 italic text-gray-800 bg-gray-50 rounded-r-lg">
                &ldquo;Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.&rdquo;
            </blockquote>

            {/* Image Secondaire */}
            <figure className="my-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                    src="/mantas.jpg" 
                    alt="Man traveling at sunset"
                    className="w-full h-auto object-cover"
                />
            </figure>
            
            <NewsletterBanner />
            
            <h2 className="text-xl font-bold text-gray-900 pt-4">Pack Lightly and Smartly</h2>
            <p>
                Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 pt-4">Stay Safe and Healthy</h2>
            <p>
                Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Immerse Yourself in the Local Culture</h2>
            <p>
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Capture Memories</h2>
            <p>
                Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Conclusion:</h2>
            <p>
                Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
            </p>
        </div>
    </article>
);


export default function AuthorPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main>
                <PostContent />
            </main>
            <Footer />
        </div>
    );
}
 