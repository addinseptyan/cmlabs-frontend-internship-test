import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

export default function Categories() {
  const [mealsData, setMealsData] = React.useState([])

  React.useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => setMealsData(data.categories))
      .catch((error) => console.error('There has been a problem: ', error))
  }, [])

  const elements = mealsData.map((meal) => (
    <Link to={`/categories/${meal.strCategory}`} key={meal.idCategory}>
      <Card image={meal.strCategoryThumb} name={meal.strCategory} />
    </Link>
  ))

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
      {mealsData ? elements : <Loading />}
    </div>
  )
}
