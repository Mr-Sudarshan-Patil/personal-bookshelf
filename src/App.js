import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookShelfPage from './pages/BookShelfPage';
import './App.css';

const App = () => {
  const addToBookshelf = (book) => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...storedBookshelf, book]));
  };

  return (
    <HashRouter basename="/personal-bookshelf">
      <Routes>
        <Route path="/" element={<BookSearchPage onAddToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<BookShelfPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
