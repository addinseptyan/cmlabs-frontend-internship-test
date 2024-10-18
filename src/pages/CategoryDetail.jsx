import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import Loading from '../components/Loading'

export default function CategoryDetail() {
  const [categoryData, setCategoryData] = React.useState([])
  const params = useParams()

  React.useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryData(data.meals))
      .catch((error) => console.error('There has been a problem: ', error))
  }, [params.categoryName])

  const elements = categoryData.map((item) => (
    <Link
      to={`/categories/${params.categoryName}/${item.idMeal}`}
      key={item.idMeal}
    >
      <Card image={item.strMealThumb} name={item.strMeal} variant='overlay' />
    </Link>
  ))

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold'>Category: {params.categoryName}</h1>

      {categoryData ? (
        <div className='grid gap-4 sm:grid-cols-2'>{elements}</div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
