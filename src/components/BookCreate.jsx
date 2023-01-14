import React from "react";
import { useState } from "react";

export default function BookCreate({ onSubmit }) {
  const [bookName, setBookName] = useState("");

  const handleAddBook = (event) => {
    event.preventDefault();
    onSubmit(bookName);
    setBookName("");
  };

  return (
    <div>
      <div className="container">
        <div className="notification is-primary">Add a Book</div>
      </div>
      <div className="container">
        <form action="" onSubmit={handleAddBook}>
          <div className="field">
            <label className="label">Title:- </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={bookName}
                onChange={(event) => setBookName(event.target.value)}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" disabled={!bookName}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
