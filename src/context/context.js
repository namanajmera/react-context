import { useContext } from "react";
import BookContext from "./books";

export default function useBooksContext() {
   return useContext(BookContext);
}