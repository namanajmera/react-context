import "bulma/css/bulma.css";
import { useEffect } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./context/context";

function App() {
  const { getAllBooksData } = useBooksContext();

  useEffect(() => {
    getAllBooksData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
