import React from 'react';
import { createRoot } from 'react-dom/client';
import Books from './books';

const Main = () => (
  <section className="section">
    <div className="container">
      <h1 id="title" className="title">NP-complete</h1>
      <p id="subtitle" className="subtitle">プログラミング・技術書系同人サークル</p>
      <Books />
    </div>
  </section>
);

document.addEventListener('DOMContentLoaded', () => {
  const elm = document.querySelector('#mount');
  createRoot(elm).render(<Main />);
});
