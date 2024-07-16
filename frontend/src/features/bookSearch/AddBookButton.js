
import { API_BASE_URL } from "../../utils/API_BASE_URL";
import axios from 'axios';

const AddBookButton = ({ data }) => {

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
            // Optionally, update state or notify user of success
        } catch (error) {
            console.error('Error adding book:', error);
            if(error.response) {
                console.error('Detailed Error: ', error.response.data);
            }
        }
    }

    return (
        <button onClick={handleClick} >Add to My Bookshelf</button>
    )
}

export default AddBookButton