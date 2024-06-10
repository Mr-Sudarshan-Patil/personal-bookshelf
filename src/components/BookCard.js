import React from 'react'
import '../App.css'

function BookCard({book, onAddToBookshelf}) {
  return (
    <div className='book-card-main'>
      <div className="book-card">
      <div className="book-card1">
      <p><b>Book Title:</b> {book.title}</p>
      <p><b>Edition Count:</b>{book.edition_count}</p>
      </div>
      <button className='Btn' onClick={() => 
      { 
        onAddToBookshelf(book);
        alert("Book added to bookshelf successfully!");
      }
      }>Add to Bookshelf</button>
      </div>
    </div>
  )
}

export default BookCard
