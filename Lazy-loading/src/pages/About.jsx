import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-4 text-green-700">About This App</h2>
      <p className="text-gray-700 leading-relaxed">
        This is the About Page. Here you can learn more about this React project that utilizes code-splitting through React's built-in lazy loading mechanism. Each major page and layout component is loaded only when needed, reducing the bundle size and improving performance. Tailwind CSS provides utility-first styling, enabling quick and responsive design creation. Lazy loading is particularly beneficial in large-scale applications or SPAs.
      </p>
    </div>
  )
}

export default About