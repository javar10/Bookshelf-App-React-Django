import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { API_BASE_URL }from '../../utils/API_BASE_URL';
import axios from 'axios';

const DisplayUsersBooks = () => {
  const [bookList, setBookList] = useState([]);
  const [bookRemoved, setBookRemoved] = useState(false)

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}book-list/`);
        setBookList(response.data);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
    getBookList();
  }, [bookRemoved])

  return (
    <>
      <h2 className='pageHeading'>Picture Books</h2>
      <div>
        <BookCard bookList={bookList} bookRemoved={bookRemoved} setBookRemoved={setBookRemoved} />
      </div>
    </>

  )
}

export default DisplayUsersBooks