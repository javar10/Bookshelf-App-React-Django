

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

            </div>
        </>

    )
}

export default DisplaySearchedBooks