import { useState, useEffect } from 'react';
import BookCard from './BookCard';

const DisplayUsersBooks = () => {
  const [bookList, setBookList] = useState([]);

  console.log(bookList);

  useEffect(() => {
    const getBookList = async () => {

      try {
        const res = await fetch("http://127.0.0.1:8000/api/book-list/");
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