import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieCard from './components/Movie-card'
import App from './Pages/HOme.jsx'
import Conditonal_Rendering from './components/Conditional-Rendering.jsx'
import C_rendering from './Pages/C_rendering.jsx'
import FavouriteColor from './components/state.jsx'
import { Counter } from './components/state.jsx'
import Form from './components/array_state.jsx'



createRoot(document.getElementById('root')).render(
  <>
   
   <App />
  <C_rendering/>
  <FavouriteColor/>
  <Counter />
  <Form  />
  </>
)
