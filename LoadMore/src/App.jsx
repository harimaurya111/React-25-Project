import React, { useState } from 'react';

const dummyData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  description: 'This is a sample card description.',
}));

export default function App() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // Load 4 more each time
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Load More Example</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {dummyData.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow w-[300px] flex flex-col items-start"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {visibleCount < dummyData.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>

    
  );

}


