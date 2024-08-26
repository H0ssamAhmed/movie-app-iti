import React from 'react'

const ErrorComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full p-8  h-40'>
      <h1 className='text-8xl font-bold'>404</h1>
      <h1>Page not Found</h1>
      <button
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 mt-4 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >Go Home Page</button>
    </div >)
}

export default ErrorComponent