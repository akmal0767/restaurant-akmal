import React from "react";
import MenuItem from "./components/MenuItem";
import { mainCourses, desserts } from "./data/menuData";

export default function App() {
  const totalItems = mainCourses.length + desserts.length;
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Savory Spoon</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <section className="menu-section">
        <h2>Main Courses</h2>
        <div className="grid">
          {mainCourses.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <div className="grid">
          {desserts.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </section>

      <aside className="info-card">
        <h3>Restaurant Info</h3>
        <p>Total items on menu: <strong>{totalItems}</strong></p>
        <p>Open Daily: 11 AM - 10 PM</p>
        <p>Contact: +91 98765 43210</p>
      </aside>

      <footer className="footer">
        <p>Savory Spoon | contact@savoryspoon.example</p>
        <p>© {year} Savory Spoon</p>
      </footer>
    </div>
  );
}
