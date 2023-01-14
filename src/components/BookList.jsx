import React from "react";
import BookShow from "./BookShow";

export default function BookList({ books, handleDeleteBook, handleEditBook }) {
  // const deleteBook = (id) => {
  //    deleteBooks(id);
  // }
  return (
    <div>
      <div className="container" style={{ minHeight: 100 }}>
        <div className="notification is-primary">Reading List</div>
      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {books &&
          books.map((book) => {
            return (
              <BookShow
                key={book.id}
                name={book.bookName}
                id={book.id}
                handleDeleteBook={handleDeleteBook}
                handleEditBook={handleEditBook}
              />
            );
          })}
      </div>
    </div>
  );
}
