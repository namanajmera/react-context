import "bulma/css/bulma.css";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { createBook, deleteBook, getAllBooks, updateBook } from "./server/api";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooksData();
  }, [])
  
  const getAllBooksData = async () => {
    const res = await getAllBooks();
    console.log("res", res);
    setBooks(res.data);
  };
  const handleAddBook = async (bookName) => {
    await createBook(bookName);
    await getAllBooksData();
  };
  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    await getAllBooksData();
    // const updatedBooks = books.filter((ele) => {
    //   return ele.id !== id;
    // });
    // setBooks(updatedBooks);
  };

  const handleEditBook = async (id, bookName) => {
    await updateBook(id, bookName);
    await getAllBooksData();
    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, bookName };
    //   }
    //   return book;
    // });
    // setBooks(updatedBooks);
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
