import { API_BASE_URL } from '../../utils/API_BASE_URL';
import axios from 'axios';

const DisplaySearchedBooks = ({ bookList, bookRemoved, setBookRemoved }) => {
    
    const removeBook = async (e) => {
        const id = e.target.id;
        try {
            await axios.delete(`${API_BASE_URL}book-delete/${id}/`);
            bookList.filter(item => item.id !== id); // Update state to re-render
            setBookRemoved(!bookRemoved);
        } catch (error) {
            console.error('Error deleting item:', error);
            if (error.response) {
                console.error('Detailed Error: ', error.response.data);
            }
        }

    }

    return (
        <>
            <div className='displayBooksDiv'>
                {bookList.map((book, index) => {
                    return (
                        <div key={index} id={index} className='displayBookCard'>
                            <div className='bookDiv'>
                                <div className='bookImgDiv'>
                                    <img
                                        src={book.coverURL}
                                        alt={`cover of ${book.title}`}
                                        className='bookImg'
                                    />
                                </div>

                                <div className='bookInfoDiv'>
                                    <h4>
                                        {book.title}
                                        <span style={{ fontStyle: 'italic' }}>
                                            ({book.firstPublishDate})
                                        </span>
                                    </h4>
                                    <p>{book.author}</p>
                                    <button
                                        id={book.id}
                                        onClick={removeBook}
                                        className='button removeBtn'>
                                        Remove Book
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>
        </>

    )
}

export default DisplaySearchedBooks