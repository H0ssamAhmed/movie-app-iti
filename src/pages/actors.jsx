import React from 'react'
import { FetchActores } from '../controllers/controller';
import Title from '../components/Title';
import { CircularProgress } from '@mui/material';
import PersonCard from '../components/PersonCard';
import ErrorComponent from '../components/ErrorComponent';

function Actors() {
  const { data, isLoading, error } = FetchActores()
  return (
    <>

      {error && <ErrorComponent />}
      {isLoading &&
        <div className='flex justify-center items-center w-full p-8'>
          <CircularProgress size={400} color="inherit" />
        </div>
      }
      {
        !isLoading && data &&
        <div className='container mx-auto'>
          <Title title='Actors' />
          <div className='flex justify-center gap-4 flex-wrap items-center'>
            {
              data?.results?.map((movie) => <PersonCard movie={movie} key={movie.id} />)
            }
          </div>
        </div >
      }
    </>
  )
}

export default Actors