import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
      <footer className="bg-amber-600 dark:bg-amber-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-white mb-4">
              Quran Academy is committed to providing high-quality Quranic education to students worldwide. We aim to create a welcoming, engaging, and authentic learning environment.
            </p>
            <Link to="/about" className="text-green-700 hover:text-green-400 transition">Learn More</Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to='/home' className="text-white hover:text-green-200 transition">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-green-200 transition">About Us</Link></li>
              <li><Link to="/services" className="text-white hover:text-green-200 transition">Services</Link></li>
              <li><Link to="/contact" className="text-white hover:text-green-200 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-white mb-4">Have any questions? Feel free to reach out to us, and our team will get back to you as soon as possible.</p>
            <Link to="mailto:info@quranacademy.com" className="text-green-700 hover:text-green-400 transition">info@quranacademy.com</Link>
          </div>
        </div>

        <div className="text-center text-white mt-12">
          <p>&copy; 2025 Quran Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
