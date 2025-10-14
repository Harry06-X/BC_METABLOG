import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
            My Frontend Project
          </h1>
          <p className="text-xl text-gray-700">
            Made with Next.js and styled with
          <span className="font-semibold text-teal-500 ml-1">Tailwind CSS</span>!
          </p>
          <button className="mt-8 px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-xl hover:bg-indigo-600 transition duration-300">
            Start
          </button>
      
      </div>
  );
}
