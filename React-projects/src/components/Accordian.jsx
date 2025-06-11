import React, { useState } from 'react';
import data from "../utils/data";

const Accordian = () => {
  const [openIds, setOpenIds] = useState([]);
  const [multiOpen, setMultiOpen] = useState(false);

  const handleClick = (id) => {
    if (multiOpen) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };


  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[500px] flex flex-col gap-4'>
        <button
          onClick={() => setMultiOpen(prev => !prev)}
          className='py-3 bg-green-500 font-bold text-white rounded'
        >
          {multiOpen ? "Disable" : "Enable"} Multi Section
        </button>

        {data && data.map((item) => (
          <div key={item.id} className='border border-green-300 rounded p-4 bg-green-100'>
            <div className='flex justify-between items-center'>
              <p className='font-medium'>{item.question}</p>
              <button
                onClick={() => handleClick(item.id)}
                className='font-bold text-xl'
              >
                {openIds.includes(item.id) ? "-" : "+"}
              </button>
            </div>
            {openIds.includes(item.id) && (
              <div className='mt-2 text-gray-700'>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
