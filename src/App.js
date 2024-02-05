import Layout from "./pages/Layout";
import Main from "./pages/Main"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import Recipe from "./pages/Recipe";

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || [])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)


  async function getRecipes() {
    setLoading(true)
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=94db0d47&app_key=1c24d1fbdb86202c4999a891a0e3cbda`

    try {
      const response = await fetch(recipeUrl)
      if (!response.ok) {
        throw Error("No connection available.")
      }
      const data = await response.json()
      setRecipes(data.hits)
      setLoading(false)

    } catch {
      setFetchError(true)
      setLoading(false)
    }

  }


  localStorage.setItem("recipes", JSON.stringify(recipes))



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main 
            recipes={recipes} 
            search={search} 
            setSearch={setSearch} 
            loading={loading} 
            fetchError={fetchError}
            getRecipes={getRecipes}
            />} />
          <Route path="recipe">
            <Route path=":id" element={<Recipe
              recipes = {recipes}
            />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
