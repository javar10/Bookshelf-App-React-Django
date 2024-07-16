import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { API_BASE_URL }from '../../utils/API_BASE_URL';

const DisplayUsersBooks = () => {
  const [bookList, setBookList] = useState([]);

  console.log(bookList);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}book-list/`);
        const data = await res.json();
        console.log(data);
        setBookList(data);
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