import { API_BASE_URL } from '../../utils/API_BASE_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddBookButton = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = async (e) => {
       

        e.preventDefault();

        const newBook = {
            title: data.title,
            author: data.author_name[0],
            coverURL: `https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg`,
            firstPublishDate: data.publish_year[0],
            onShelf: true
        }

        // console.log(newBook)

        try {
            const response = await axios.post(`${API_BASE_URL}book-create/`, newBook);
            console.log('Book added successfully:', response.data);
            // Update state or notify user of success
            navigate('/');
        } catch (error) {
            console.error('Error adding book:', error);
            if(error.response) {
                console.error('Detailed Error: ', error.response.data);
            }
        }

      
    }

    return (
        <button className='button' onClick={handleClick} >Add to My Bookshelf</button>
    )
}

export default AddBookButton