import React, { lazy, Suspense, useState } from 'react'

const Users = lazy(() => import("../components/Users"))

const Home = () => {
  const [loading, setLoading] = useState(false)

  function handleUsers() {
    setLoading(true)
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-4 text-blue-700">Welcome to My Lazy Loaded App</h2>

      {
        loading ? <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense> : null
      }

      <button onClick={()=>handleUsers()} className='p-3 bg-red-200 border cursor-pointer rounded'>Show User</button>
      <p className="text-gray-700 leading-relaxed">
        This is the Home Page of our example React app that demonstrates the concept of lazy loading. Lazy loading allows components to be loaded only when required, improving initial page load time. This page is styled using Tailwind CSS and includes structured layout, spacing, and color schemes. The home page loads instantly and provides a brief overview of what the app is about. React Suspense is used to show a loader until each component is loaded.
      </p>
    </div>
  )
}

export default Home



//for more refrence watch step by step Lazy loading video and roadside coder video 