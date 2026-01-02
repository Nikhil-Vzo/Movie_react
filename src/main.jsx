import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieCard, {Attempt} from './components/Movie-card'




createRoot(document.getElementById('root')).render(
  <>
    <MovieCard />
    <Attempt />
  </>,
)
