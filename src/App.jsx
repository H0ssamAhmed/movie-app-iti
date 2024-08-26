import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingComponents from './components/LandingComponents';
import Movies from './pages/Movies';
import Actors from './pages/actors';
import Series from './pages/series';
import Details from './pages/Details';
import TVshows from './pages/TVshows';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/actors' element={<Actors />} />
          <Route path='/series' element={<Series />} />
          <Route path='/:type/:id' element={<Details />} />
          <Route path='/TVshows' element={<TVshows />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
