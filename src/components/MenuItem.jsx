import React from "react";

export default function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="dish-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
      <p className="category">{category} • ₹{price.toFixed ? price.toFixed(2) : price}</p>
      <p className="description">{description}</p>
    </div>
  );
}
