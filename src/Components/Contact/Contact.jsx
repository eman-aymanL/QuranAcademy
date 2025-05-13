import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8">We are here to help you with any inquiries or questions you may have. Reach out to us and one of our team members will get back to you as soon as possible.</p>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-white text-gray-800" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-white text-gray-800" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 rounded-lg bg-white text-gray-800"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-green-800 text-white rounded-lg hover:bg-green-900">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
