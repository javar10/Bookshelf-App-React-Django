import { API_BASE_URL } from '../../utils/API_BASE_URL';
import axios from 'axios';

const DisplaySearchedBooks = ({ bookList }) => {
    console.log(bookList)

    const removeBook = async (e) => {
        console.log(e.target)
        console.log(e.target.id)
        const id = e.target.id;
        try {
            await axios.delete(`${API_BASE_URL}book-delete/${id}/`);
            bookList.filter(item => item.id !== id); // Update state to re-render
            console.log('book deleted')
        } catch (error) {
            console.error('Error deleting item:', error);
            if(error.response) {
                console.error('Detailed Error: ', error.response.data);
            }
        }

    }

    return (
        <>
            <div className='displayBookSearch'>
                {bookList.map((book, index) => {
                    return (
                        <div key={index} id={index} className='displayBookCard'>
                        <img src={book.coverURL} alt={`image of ${book.title}`}/>
                        <h4>{book.title} <span style={{ fontStyle: 'italic' }}>({book.firstPublishDate})</span></h4>
                        <p>Written by: {book.author}</p>
                        <button id={book.id} onClick={removeBook}>Remove Book</button>
                        </div>
                    )
                })}

            </div>
        </>

    )
}

export default DisplaySearchedBooks