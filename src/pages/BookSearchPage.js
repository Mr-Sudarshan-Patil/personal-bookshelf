import React from 'react'
import SearchInput from '../components/SearchInput';
import axios from 'axios';
import { useState, useEffect } from "react"
import BookCard from '../components/BookCard';
import '../App.css';

function BookSearchPage({ onAddToBookshelf }) {
    // Input data story in query
    const [query, setQuery] = useState('');

    // Books store the data from the capture in api 
    const [books, setBooks] = useState([]);

    // Additional for QA
    console.log(query);
    console.log(books);
    // ===================

    // if query enter the fecth data from the api and setBooks update the data inside the books

    useEffect(() => {
        if (query) {
          axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
            .then(response => setBooks(response.data.docs))
            .catch(error => console.error('Error fetching data:', error));
        }
      }, [query]);

  return (
    <div className="wrapper">
      <div className='Wrapper2'>
        <div>
          &nbsp;
        </div>
        <div className='main-box'>
          <h3>Search By Book name:</h3>
          <SearchInput query={query} onChange={setQuery}/>
        </div>
        <div className='Btn-Div'>
          <a className='Btn' href="/bookshelf">My Bookshelf</a>
        </div>
      </div>
      <div className='Wrapper3'>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf}/>
        ))}
      </div>
      </div>
    </div>
  )
}

export default BookSearchPage
