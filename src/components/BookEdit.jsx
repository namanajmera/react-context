import React from "react";
import { useState } from "react";

export default function BookEdit({ name, id, handleEditBook, setIsEditMode }) {
  const [bookName, setBookName] = useState(name);
  const handleEdit = (event) => {
    event.preventDefault();
    handleEditBook(id, bookName);
    setIsEditMode(false);
  };
  const handleCancel = () => {
    setIsEditMode(false);
  };
  return (
    <div>
      <div className="card" style={{ margin: 10 }}>
        <header className="card-header">
          <p className="card-header-title">Book Name</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <form action="" onSubmit={handleEdit}>
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
              <button className="button is-info is-outlined" disabled={!bookName}>
                Update
              </button>
              <button className="button is-info is-outlined" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
