import "bulma/css/bulma.css";
import { useEffect } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./context/context";

function App() {
  const { stableFetchbookData } = useBooksContext();

  useEffect(() => {
    stableFetchbookData();
  }, [stableFetchbookData]);

  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
