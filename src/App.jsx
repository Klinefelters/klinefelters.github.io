import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<RootLayout />}>
      <Route exact index element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="projects" element={<Projects />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}