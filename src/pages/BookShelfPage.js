import React, { useEffect, useState } from 'react'
import '../App.css';

function BookShelfPage() {

  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);


  return (
    <div>
      <h1 className='main-text'>My Bookshelf</h1>
      <div className="bookshelf-list">
        {bookshelf.map(book => (
          <div key={book.key} className="book-card3">
                <p><b>Book Title:</b> {book.title}</p>
                <p><b>Edition Count:</b>{book.edition_count}</p>
          </div>
        ))}
      </div>
      <a href="/" className='Btn btn3'>Back to Search</a>
    </div>
  )
}

export default BookShelfPage
