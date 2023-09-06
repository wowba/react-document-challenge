import { recipes } from './data.js';

function Recipe({ data }) {
  const ingredients = data.ingredients
  const ingredientList = ingredients.map(item => {
    return (
      <li key={item}>{item}</li>
    )
  })
  return (
    <div>
      <h2>{data.name}</h2>
      <ul>
        {ingredientList}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  const recipeList = recipes.map(item => {
    return <Recipe data={item} key={item.id} />
  })
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}
