import { Rating } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useResolvedPath } from 'react-router-dom';

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

const Card = ({ title, poster_path, release_date, vote_count, vote_average, fullDetails }) => {

  return (<div className="relative m-1 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-700 text-white bg-[#4e4e4e] shadow-md">
    <img className="object-cover"
      src={`${BASE_IMAGE_URL}/${poster_path}`}
      alt="product image" />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">Votes: {vote_count}</span>
    <div className="mt-4 px-5 pb-5">
      <h5 className="text-xl tracking-tight ">{title}</h5>
      <span className="text-md mt-2 text-gray-300 block font-bold">{release_date}</span>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <Rating
          name="read-only"
          value={(vote_average / 10) * 5}
          readOnly
        />
        <span className="mr-2 ml-3 rounded bg-slate-800 px-2.5 py-0.5 text-xs font-semibold">{vote_count}</span>
      </div>


      <Link to={`/detail/${fullDetails.id}`}
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Details
      </Link>
    </div>
  </div>)
}

export default Card

// composiont - aggragation assioacation