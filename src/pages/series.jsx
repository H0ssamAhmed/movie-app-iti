import React from 'react'
import { FetchSeries } from '../controllers/controller'
import { CircularProgress } from '@mui/material';
import Title from '../components/Title';
import Card from '../components/Card';
import ErrorComponent from '../components/ErrorComponent';

const Series = () => {
  const { data, isLoading, error } = FetchSeries()

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
          <Title title='Series' />
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

export default Series