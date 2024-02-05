import React from 'react'
import { useParams } from 'react-router-dom'

const Recipe = ({ recipes }) => {

  if (!recipes) {
    recipes = JSON.parse((localStorage.getItem("recipes")))
  }


  const { id } = useParams()
  const recipe = recipes.find(recipe => recipe.recipe.label === id);

  return (
    <div className='recipe'>
        <img src={recipe.recipe.image} alt="" />
        <p className="recipe-name">{recipe.recipe.label.toUpperCase()}</p>
        <p className='recipe-title'>By {recipe.recipe.source.toUpperCase()}</p>

        <p>
          <span className="recipe-title">CALORIES: </span>
          <span>{Math.round(recipe.recipe.calories)}</span>
        </p>

        <p className='ingredients-title'>Ingredients</p>
        <hr />
        <ul>
          {
            recipe.recipe.ingredientLines.map((ing) => {
              return (
                <li>{ing}</li>
              )
            })
          }
        </ul>

        <a href={recipe.recipe.url} target='blank'><button>SEE INSTRUCTIONS</button></a>
    </div>
  )
}

export default Recipe