import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-4 text-red-700">Contact Us</h2>
      <p className="text-gray-700 leading-relaxed">
        This is the Contact Page where users can reach out to us. It demonstrates how lazy loading works with routes in React apps. When you navigate to this page, React loads it dynamically. This technique saves loading time on the initial visit. Our contact system is efficient, clean, and minimalistic—thanks to Tailwind CSS. You can expand this page to include forms, contact details, maps, and more in your projects.
      </p>
    </div>
  )
}

export default Contact