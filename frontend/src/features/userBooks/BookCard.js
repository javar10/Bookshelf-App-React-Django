

const DisplaySearchedBooks = ({ bookList }) => {
    console.log(bookList)
    return (
        <>
            <div className='displayBookSearch'>
                {bookList.map((book, index) => {
                    return (
                        <div key={index} id={index} className='displayBookCard'>
                        <img src={book.coverURL} alt={`image of ${book.title}`}/>
                        <h4>{book.title} <span style={{ fontStyle: 'italic' }}>({book.firstPublishDate})</span></h4>
                        <p>Written by: {book.author}</p>
                        </div>
                    )
                })}
                {/* {imageIdArray.map((id, index) => {
                    if (id) {
                        return (
                            <div key={id} id={id} className='displayBookSearchCard'>
                                <img src={`https://covers.openlibrary.org/b/olid/${id}-M.jpg`} />
                                <h4>{searchData.docs[index].title} - <span style={{ fontStyle: 'italic' }}>{searchData.docs[index].first_publish_year}</span></h4>
                                <p>by {searchData.docs[index].author_name[0]}</p>
                            </div>
                        )
                    }
                })} */}
            </div>
        </>

    )
}

export default DisplaySearchedBooks