import { createContext, useCallback, useState } from "react";
import React from 'react'
import { createBook, deleteBook, getAllBooks, updateBook } from "../server/api";


const BookContext = createContext();


export function Provider({ children }) {
   const [books, setBooks] = useState([]);
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
   };

   const handleEditBook = async (id, bookName) => {
      await updateBook(id, bookName);
      await getAllBooksData();
   };
   const stableFetchbookData = useCallback(
      () => {
         getAllBooksData();
      },
      [],
   )

   const valueToShare = {
      books,
      handleAddBook,
      handleDeleteBook,
      handleEditBook,
      getAllBooksData,
      stableFetchbookData
   }
   return (
      <BookContext.Provider value={valueToShare}>
         {children}
      </BookContext.Provider>
   )
}

export default BookContext; 
