import React from 'react';
import '../styles.css';

const categories = [
  { id: 1, name: 'Salads', image: '/images/recipe1.jpg' },
  { id: 2, name: 'Desserts', image: '/images/recipe2.jpg' },
  { id: 3, name: 'Dinner', image: '/images/recipe5.jpg' },
  { id: 4, name: 'Asian', image: '/images/recipe6.jpg' },
  { id: 5, name: 'Vegetarian', image: '/images/recipe1.jpg' },
  { id: 6, name: 'Quick', image: '/images/recipe4.jpg' },
];

export default function CategoriesPage() {
  return (
    <div className="categories-page-container">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map(({ id, name, image }) => (
          <div key={id} className="category-container">
            <span className="category-name">{name}</span>
            <img className="category-image" src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
