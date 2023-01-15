import axios from 'axios';
const url = 'http://localhost:3001/books'

const getAllBooks = async () => {
   const response = await axios.get(url);

   return response;
}

const createBook = async (bookName) => {
   const response = await axios.post(url, {
      bookName,
   });

   return response;
}


const deleteBook = async (id) => {
   const response = await axios.delete(url + `/${id}`);

   return response;
}

const updateBook = async (id, bookName) => {
   const response = await axios.put(url + `/${id}`, {
      bookName
   });

   return response;
}

export { getAllBooks, createBook, updateBook, deleteBook };