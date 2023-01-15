import React from "react";
import useBooksContext from "../context/context";
import BookShow from "./BookShow";

export default function BookList() {
  const { books } = useBooksContext();
  return (
    <div>
      <div className="container" style={{ minHeight: 100 }}>
        <div className="notification is-primary">Reading List</div>
      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {books &&
          books.map((book) => {
            return <BookShow key={book.id} name={book.bookName} id={book.id} />;
          })}
      </div>
    </div>
  );
}
