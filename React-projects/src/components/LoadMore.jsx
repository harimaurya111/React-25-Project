import React, { useEffect, useState } from 'react';

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []); 

  function handleMore() {
    setVisible((prev) => prev + 4);
  }

  return (
    <div className='w-full min-h-screen'>
      <h1 className='font-bold text-center text-3xl py-3'>Load More</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-2 w-full'>
        {
          products.slice(0, visible).map((product, index) => (
            <div key={index} className='w-[300px] bg-red-50 p-4 items-center my-4 border'>
              <div className='w-full h-64'>
                <img src={product.images[0]} alt="" className='w-full h-full object-cover' />
              </div>
              <p>Title : {product.title}</p>
              <p>Category : {product.category}</p>
              <p>Price : {product.price}</p>
            </div>
          ))
        }
      </div>
      {
        visible < products.length && (
          <div className='flex justify-center my-4'>
            <button onClick={handleMore} className='py-2 border rounded px-2 text-center items-center'>
              Load More
            </button>
          </div>
        )
      }
    </div>
  );
};

export default LoadMore;
