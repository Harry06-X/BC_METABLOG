import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterBanner from "./components/NewsletterBanner";
import Link from "next/link";
import LatestPosts from "./components/LatestPosts";

export default function Home() {
  const heroPost = {
    slug: 'the-impact-of-technology',
    imageUrl: '/hero.jpg',
    category: 'Technology',
    title:'The Impactof Technology on the Workplace: How Technology is Changing',
    authorName: 'Jason Francisco',
    authorImage: '/Francisco.jpg',
    date: 'August 20, 2022',
  };
  
  return (
    <main className="lex flex-col items-center bg-white min-h-screen font-sans">

      {/*Appeler Header */}
      <Header />

      {/*Section de l'Article Heros */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 relative w-full">
        <Link href={`/post/${heroPost.slug}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer hover:shadow-2xl transition duration-300">

            {/*Image de ccloture */}
            <div className="w-full h-96 md:h-[600px] overflow-hidden">
              <Image
                src={heroPost.imageUrl}
                alt="Hero Image"
                fill
                style={{ objectFit: 'cover' }}
                sizes="{max-width: 1024px) 100vw, 1280px}"
                className="group-hover:scale-105 transition duration-500"
              />
            </div>

            {/*Contenu de l'article hero */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 lg:left-[50px] lg:translate-x-0 
                          bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-[90%] sm:w-[500px] lg:w-[550px] 
                          max-w-full transition duration-300 group-hover:shadow-3xl">
              <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-md transition hover:bg-indigo-700">
                {heroPost.category}
              </span>
              <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
                {heroPost.title}
              </h2>

              <div className="flex items-center gap-3 mt-5">
                {/* Image de l'auteur*/}
                <Image
                  src={heroPost.authorImage}
                  alt={heroPost.authorName}
                  width={35}
                  height={35}
                  className="rounded-full object-cover"
                />
                <span className="text-gray-700 text-sm font-medium">{heroPost.authorName}</span>
                <span className="text-gray-400 text-sm">{heroPost.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <div className="w-full mt-16">
        <NewsletterBanner />
      </div>

      {/*Titre de la section */}
      <section className="mt-14 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-16">
        <h3 className="text-3xl font-extrabold text-gray-900">
            Latest Post
        </h3>
      </section>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-16">
        <LatestPosts />
      </div>

      {/* <div className="flex justify-center mt-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mb-16">
        <Link href="/blog">
          <button className="bg-white border border-gray-300 text-gray-700 px-12 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition duration-150 shadow-md">
            View All POsts
          </button>
        </Link>
      </div> */}

      <div className="w-full">
        <NewsletterBanner />
      </div>

      <Footer />
    </main>
  );
}