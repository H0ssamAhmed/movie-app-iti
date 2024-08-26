import React from 'react'
import ErrorComponent from '../components/ErrorComponent'
import { CircularProgress } from '@mui/material'
import { FetchTVshows } from '../controllers/controller'
import Card from '../components/Card'
import Title from '../components/Title'

function TVshows() {
  const { data, isLoading, error } = FetchTVshows()

  return (
    <>
      {error && <ErrorComponent />}

      {isLoading &&
        <div className='flex justify-center items-center w-full p-8'>
          <CircularProgress size={400} color="inherit" />
        </div>
      }
      {!isLoading && data &&
        <div className='container mx-auto'>
          <Title title='TV Shows' />
          <div className='flex justify-center gap-4 flex-wrap items-center'>
            {data?.results?.map((movie) =>
              <Card
                key={movie.id}
                fullDetails={movie}
                title={movie.name}
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

export default TVshows