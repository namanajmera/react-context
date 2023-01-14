import "bulma/css/bulma.css";
import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const handleAddBook = (bookName) => {
    setBooks([
      ...books,
      {
        id: Date.now(),
        bookName,
      },
    ]);
  };
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((ele) => {
      return ele.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleEditBook = (id, bookName) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, bookName };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookList
        books={books}
        handleDeleteBook={handleDeleteBook}
        handleEditBook={handleEditBook}
      />
      <BookCreate onSubmit={handleAddBook} />
    </div>
  );
}

export default App;
