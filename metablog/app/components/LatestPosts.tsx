"use client";

const mokPosts = [
    { slug:'post-1', imageUrl:'/post1.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Tracey Wilson', date:'August 20, 2022', authorImage:'/Wilson.jpg'},
    { slug:'post-2', imageUrl:'/post2.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Jason Francisco', date:'August 20, 2022', authorImage:'/Francisco.jpg'},
    { slug:'post-3', imageUrl:'/post3.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Elizabeth Slavin', date:'August 20, 2022', authorImage:'/Slavin.jpg'},
    { slug:'post-4', imageUrl:'/post4.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Ernie Smith', date:'August 20, 2022', authorImage:'/Smith.jpg'},
    { slug:'post-5', imageUrl:'/post5.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Eric Smith', date:'August 20, 2022', authorImage:'/Smith.jpg'},
    { slug:'post-6', imageUrl:'/post6.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Tracey Wilson', date:'August 20, 2022', authorImage:'/Wilson.jpg'},
    { slug:'post-7', imageUrl:'/post7.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Jason Francisco', date:'August 20, 2022', authorImage:'/Francisco.jpg'},
    { slug:'post-8', imageUrl:'/post8.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Elizabeth Slavin', date:'August 20, 2022', authorImage:'/Slavin.jpg'},
    { slug:'post-9', imageUrl:'/post9.jpg', category:'Technology', title:'The Impact of Technology on the Workplace: How Technology is Changing', author:'Ernie Smith', date:'August 20, 2022', authorImage:'/Smith.jpg'},
];

const PostCard = ({ post }) => (
    <div className="block h-full">
        <article
            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg 
                 flex flex-col h-full transition-shadow duration-300 hover:shadow-xl"
        >
            {/*Conteneur image+ratio */}
            <div className="relative w-full aspect-video overflow-hidden">

                {/*Remplacement de l'image par img, utilise le chemin d'image local */}
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            {/*Contenu de la carte */}
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    {/*Categorie Bleu clair/gris pour corespondre la l'image*/}
                    <span className="text-xs text-blue-500 font-semibold tracking-wider uppercase mb-1 inline-block">
                        {post.category}
                    </span>

                    {/*Titre */}
                    <h4 className="font-bold text-gray-900 leading-snug text-base mt-0 transition-colors duration-200 group-hover:text-blue-600">
                        {post.title}                        
                    </h4>
                </div>

                {/*Meta donnee de lauteur */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                    {/*Remplacement de l'image auteur par img, utilise le chemin d'image local */}
                    <img
                        src={post.authorImage}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full object-cover w-6 h-6"
                    />
                    <span className="font-medium text-gray-800">{post.author}</span>
                    <span className="text-gray-400">• {post.date}</span>
                </div>
            </div>
        </article>
    </div>
);

export default function LatestPosts() {
    return (
        <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Titre de la section
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8">
                Latest Post
            </h3> */}

            {/*Grille des post */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mokPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>

            {/*Bouton View All Posts */}
            <div className="text-center mt-10">
                <a
                    href="/blog"
                    className="nline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium 
                     rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
                >
                    View All Post
                </a>
            </div>
        </section>
    );
};
