import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'
import MealDetail from './pages/MealDetail'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='/categories/:categoryName'
            element={<CategoryDetail />}
          />
          <Route
            path='/categories/:categoryName/:mealID'
            element={<MealDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
