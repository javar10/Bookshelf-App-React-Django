import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { API_BASE_URL }from '../../utils/API_BASE_URL';
import axios from 'axios';

const DisplayUsersBooks = () => {
  const [bookList, setBookList] = useState([]);

  console.log(bookList);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}book-list/`);
        setBookList(response.data);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
    getBookList();
  }, [])

  return (
    <>
      <h4>My Books</h4>
      <div>
        <BookCard bookList={bookList} />
      </div>
    </>

  )
}

export default DisplayUsersBooks