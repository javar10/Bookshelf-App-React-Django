import { useState } from 'react';
import DisplaySearchedBooks from './DisplaySearchedBooks';

const SearchBooks = () => {
    const [inputValue, setInputValue] = useState('');
    const [imageIdArray, setImageIdArray] = useState([]);
    const [searchData, setSearchData] = useState({});

    const fetchData = async () => {
        try {
            const title = inputValue.trim().replace(' ', '+');
            const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
            const data = await response.json();
            const fetchedImageIdArray = data.docs.map(item => item.cover_edition_key);

            setSearchData(data);
            setImageIdArray(fetchedImageIdArray);
        }
        catch (error) {
            console.error('Error fetching data: ', error)
        }
    }

    const handleSearchSubmit = e => {
        e.preventDefault();
        fetchData();
    }

    return (
        <>
            <div className='searchDiv'>
                <form onSubmit={handleSearchSubmit}>
                    <label htmlFor='bookSearchInput'>Search By Title</label>
                    <input
                        id='bookSearchInput'
                        name='bookSearchInput'
                        placeholder='Enter title'
                        onChange={(e) => setInputValue(e.target.value)}
                        className='searchInput'
                    />
                    <button className='button searchBtn'>Search</button>
                </form>
            </div>
            <DisplaySearchedBooks imageIdArray={imageIdArray} searchData={searchData} />
        </>
    )
}

export default SearchBooks