import { useState } from 'react';
import DisplaySearchedBooks from './DisplaySearchedBooks';

const SearchBooks = ({displayBookshelf, setDisplayBookshelf}) => {
    const [inputValue, setInputValue] = useState('');
    const [imageIdArray, setImageIdArray] = useState([]);
    const [searchData, setSearchData] = useState({});

    const fetchData = async () => {
        try {
            const title = inputValue.trim().replace(" ", "+");
            const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
            const data = await response.json();
            const fetchedImageIdArray = data.docs.map(item => item.cover_edition_key);
            console.log(data)
        
            setSearchData(data);
            setImageIdArray(fetchedImageIdArray);
        }
        catch (error) {
            console.error('Error fetching data: ', error)
        }

    }

    // const handleSearchInputChange = e => {
    //     setInputValue(e.target.value);
    // }

    const handleSearchSubmit = e => {
        e.preventDefault();
        fetchData();
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <h4>Add New Book</h4>
                <label htmlFor="bookSearch">Title</label>
                <input name="bookSearch" placeholder="Enter title" onChange={(e) => setInputValue(e.target.value)} />
                <button>Search</button>
            </form>
            <DisplaySearchedBooks imageIdArray={imageIdArray} searchData={searchData} displayBookshelf={displayBookshelf} setDisplayBookshelf={setDisplayBookshelf}/>
        </div>
    )
}

export default SearchBooks