import React, { useState, useEffect } from 'react';
import '../styles.css'; 

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Eroare la încărcarea fișierului JSON:', error));
  }, []);

  return (
    <div className="home-container">
      <button className="hamburger-menu" onClick={() => window.location.href = '/categories'}>
        ☰
      </button>
      <button className="logout-button" onClick={() => window.location.href = '/'}>
        Logout
      </button>

      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Find" />
      </div>

      <div className="filters">
        <button className="filter-button">Popularity</button>
        <button className="filter-button">Hot Sales</button>
      </div>

      <div className="recipes-container">
        {recipes.slice(0, 6).map((recipe, index) => (
          <div key={index} className="recipe-container">
            <img className="recipe-image" src={recipe.image} alt={recipe.name} />
            <h3 className="recipe-name">{recipe.name}</h3> {/* Numele rețetei */}
            <p className="recipe-preparation-time">{recipe.preparationTime}</p> {/* Aici se adaugă clasa pentru timpul de preparare */}
            <div className="recipe-rating">
              <span>{recipe.rating} ⭐</span>
            </div>

            <button className="add-to-favorites">Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}
