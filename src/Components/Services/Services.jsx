import React from 'react'

export default function Services() {
  return (
    <div >
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold  mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Online Quran Classes</h3>
              <p className="text-gray-600">Learn the Quran from certified teachers in the comfort of your home, at your own pace. Our online Quran classes provide flexibility for students around the world. Whether you're a beginner or an advanced learner, we offer personalized plans for each student to excel in their Quranic studies.</p>
              <p className="text-gray-600 mt-4">We ensure that every lesson is interactive and informative, focusing on Tajweed, memorization, and understanding of the Quran. Our qualified teachers are dedicated to providing the highest quality of education to every student.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Tajweed & Tafsir</h3>
              <p className="text-gray-600">Master the art of Tajweed and gain a deeper understanding of the Quran with our expert instructors. Our Tajweed and Tafsir courses help you perfect your recitation and understand the deeper meanings behind the verses of the Quran.</p>
              <p className="text-gray-600 mt-4">These courses are designed for students at all levels. Whether you're looking to improve your pronunciation or delve into the scholarly interpretation of the Quran, our teachers will guide you every step of the way.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Quran for Kids</h3>
              <p className="text-gray-600">Our Quran classes are designed specifically for children, with interactive lessons to keep them engaged and excited about learning the Quran. We offer a friendly environment where children can learn at their own pace, with the guidance of our experienced and nurturing teachers.</p>
              <p className="text-gray-600 mt-4">The lessons are tailored to each child's age and level, ensuring that they understand the teachings of the Quran in a fun and engaging way. Our goal is to instill a love for the Quran in the hearts of young learners, setting the foundation for a lifelong connection to the Quran.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
