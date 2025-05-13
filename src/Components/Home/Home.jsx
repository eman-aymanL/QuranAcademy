import React from 'react'
import { Link } from 'react-router'
export default function Home() {
  return (
    <div id='hero'>
       <div className="flex items-center justify-center h-screen bg-black bg-opacity-65">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl font-bold mb-4">Welcome to Quran Academy</h1>
            <p className="text-xl mb-6">
              Our mission is to provide high-quality Quranic education for people of all ages and backgrounds. Whether you're a beginner or an advanced student, we have the resources and experienced teachers to guide you on your journey to understanding the Quran.
            </p>
            <p className="text-lg mb-6">
              At Quran Academy, we are dedicated to creating an environment that fosters spiritual growth, learning, and connection with the sacred words of the Quran. Our platform offers flexible learning options, experienced instructors, and a welcoming community of learners.
            </p>
            <Link to='/about' className="inline-block px-8 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-800 transition">
              Learn More
            </Link>
          </div>
        </div>
    </div>
     )
}
