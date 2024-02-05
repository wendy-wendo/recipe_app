import React from 'react'
import Image from "../components/Image";
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Main = ({ recipes, search, setSearch, loading, fetchError }) => {

  return (
    <main>
        <>
          <h2>Explore Recipes</h2>
          <hr />

          <div className="search-bar">
              <FaSearch/>
              <input 
              type="text" 
              placeholder="Search Recipes"
              onChange={(e) => setSearch(e.target.value)} 
              value={search}
              />
          </div>

          {fetchError && !loading && <p className='status'>No connection available.</p>}

          {
            !loading ? 
            <div className="recipes">
                {recipes.map((recipe) => {
                return (
                    <Link to={`recipe/${recipe.recipe.label}`}>
                    <Image 
                      label={recipe.recipe.label}
                      image={recipe.recipe.image}
                      source={recipe.recipe.source}
                    />
                    </Link>
                )
                })}
            </div>
            :
            <p>Loading...</p>
          }
        </>

    </main>
  )
}

export default Main
