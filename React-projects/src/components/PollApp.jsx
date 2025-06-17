import React, { useState } from 'react';

const PollApp = () => {
  const [likes,setLikes] = useState(0)
  const [disLikes,setDisLikes] = useState(0)

  const total = likes + disLikes
  const likePercentage = total === 0 ? 0 : ((likes/total) * 100).toFixed()
  const DisLikePercentage = total === 0 ? 0 : ((disLikes/total) * 100).toFixed()


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Do you like React?</h2>

        <div className="flex justify-around items-center mb-4">
          <button
          onClick={()=>setLikes(likes + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 cursor-pointer rounded-lg">
            👍 Like
          </button>
          <button
          onClick={()=>setDisLikes(disLikes + 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 cursor-pointer rounded-lg">
            👎 Dislike
          </button>
        </div>

        <div className="mb-2">
          <p className="text-lg font-medium">👍 Likes: {likePercentage} %</p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
            <div
              className="bg-green-500 h-2"
              style={{ width: `${likePercentage}%` }}
            ></div>
          </div>

          <p className="text-lg font-medium">👎 Dislikes: {DisLikePercentage} %</p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-red-500 h-2"
              style={{ width: `${DisLikePercentage}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">Total Votes: {total}</p>
      </div>
    </div>
  );
};

export default PollApp;
