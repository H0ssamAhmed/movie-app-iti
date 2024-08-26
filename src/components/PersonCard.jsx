import React from 'react'
import { Link, useParams, useResolvedPath } from 'react-router-dom';
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

const PersonCard = ({ movie }) => {
  const { name, profile_path } = movie
  return (

    <div className="relative m-1 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-700 text-white bg-[#4e4e4e] shadow-md">
      <img className="object-cover"
        src={`${BASE_IMAGE_URL}/${profile_path}`}
        alt="product image" />
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight ">{name}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
        </div>
        <Link to={`/detail/${movie.id}`}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Details
        </Link>
      </div>
    </div>
  )
}

export default PersonCard