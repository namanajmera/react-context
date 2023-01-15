import React from "react";
import { useState } from "react";
import useBooksContext from "../context/context";
import BookEdit from "./BookEdit";

export default function BookShow({ name, id }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { handleDeleteBook } = useBooksContext();

  const handleEditBookCondition = () => {
    setIsEditMode(true);
  };
  return (
    <div>
      {!isEditMode ? (
        <div className="card" style={{ margin: 10 }}>
          <header className="card-header">
            <p className="card-header-title">Book Name</p>
            <button className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div className="card-content">
            <img src={`https://picsum.photos/seed/${id}/300/200`} alt="books" />
            <div className="content">
              {name}
              <br />
            </div>
          </div>
          <footer className="card-footer">
            <button
              className="card-footer-item button is-info is-outlined"
              onClick={handleEditBookCondition}
            >
              Edit
            </button>
            <button
              className="card-footer-item button is-danger is-outlined"
              onClick={() => handleDeleteBook(id)}
            >
              Delete
            </button>
          </footer>
        </div>
      ) : (
        <BookEdit name={name} id={id} key={id} setIsEditMode={setIsEditMode} />
      )}
    </div>
  );
}
