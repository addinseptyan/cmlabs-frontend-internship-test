import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

export default function MealDetail() {
  const [mealDetail, setMealDetail] = React.useState('')
  const params = useParams()

  React.useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`
    )
      .then((res) => res.json())
      .then((data) => setMealDetail(data.meals[0]))
      .catch((error) => console.error('There has been a problem: ', error))
  }, [params.mealID])

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = `${mealDetail[`strMeasure${i}`]} ${
      mealDetail[`strIngredient${i}`]
    }`
    if (ingredient.trim().length && !ingredient.includes('null'))
      ingredients.push(ingredient)
  }

  const elements = (
    <div className='space-y-4'>
      <h1 className='font-extrabold text-4xl'>{mealDetail.strMeal}</h1>
      <div className='w-full h-72 overflow-hidden rounded-2xl bg-slate-500 relative'>
        <img
          src={mealDetail.strMealThumb}
          alt={`${mealDetail.strMeal} thumbnail`}
          className='size-full absolute object-cover'
        />
      </div>
      <article>
        <h2 className='font-bold text-2xl'>Recipe</h2>
        <ul className='sm:h-32 flex flex-col flex-wrap pl-5 '>
          {ingredients.map((item, index) => (
            <li key={index} className='list-disc'>
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h2 className='font-bold text-2xl'>Instruction</h2>
        <p>{mealDetail.strInstructions}</p>
      </article>
      {mealDetail.strYoutube && (
        <div>
          <h2 className='font-bold text-2xl'>Youtube</h2>
          <iframe
            src={mealDetail.strYoutube.replace('watch?v=', 'embed/')}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-auto aspect-video rounded-xl'
          ></iframe>
        </div>
      )}
    </div>
  )

  return <div>{mealDetail ? elements : <Loading />}</div>
}
