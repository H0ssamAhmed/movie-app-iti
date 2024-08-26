import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
const Details = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl font-bold">This page is comming soon</h1>
      <h3 className="text-2xl  my-6 rotationIcon">Stay Tuned</h3>
      <div className='rotationIcon '>
        <HourglassBottomIcon fontSize='large' className='my-6' />
      </div>
    </div>
  )
}

export default Details