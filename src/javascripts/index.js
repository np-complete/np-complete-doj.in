import React from 'react';
import ReactDOM from 'react-dom';
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
  ReactDOM.render(<Main />, document.querySelector('#mount'));
});
