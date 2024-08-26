import React, { useEffect, useState } from 'react'
import { FetchMovies } from '../controllers/controller'
import Card from '../components/Card'
import LandingComponents from '../components/LandingComponents'
import Title from '../components/Title'
import { CircularProgress, Pagination } from '@mui/material'
import ErrorComponent from '../components/ErrorComponent'

export default function Movies() {
  const { data, isLoading, error, pageNum, refetch, setPageNum } = FetchMovies()

  return (
    <>

      <LandingComponents />
      {error && <ErrorComponent />}
      {isLoading &&
        <div className='flex justify-center items-center w-full p-8'>
          <CircularProgress size={400} color="inherit" />
        </div>
      }
      {!isLoading && data &&
        <div className='container mx-auto'>
          <Title title='Movies' />
          <div className='flex justify-center gap-4 flex-wrap items-center'>
            {
              data?.results?.map((movie) =>
                <Card
                  key={movie.id}
                  fullDetails={movie}

                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  vote_count={movie.vote_count}
                  vote_average={movie.vote_average}
                />)
            }
          </div>

        </div >
      }
    </>
  )
}
