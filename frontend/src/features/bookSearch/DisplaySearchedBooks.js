
import AddBookButton from "./AddBookButton"

const DisplaySearchedBooks = ({ imageIdArray, searchData }) => {

    return (
        <>
            <div className='displayBooksDiv'>
                {imageIdArray.map((id, index) => {
                    if (id) {
                        return (
                            <>
                                <div key={index} id={index} className='displayBookCard'>
                                    <div className='bookDiv'>
                                        <div className='bookImgDiv'>
                                            <img
                                                src={`https://covers.openlibrary.org/b/olid/${id}-M.jpg`}
                                                alt={`cover of ${searchData.docs[index].title}`}
                                                className='bookImg'
                                            />
                                        </div>
                                    <div className='bookInfoDiv'>
                                    <h4>{searchData.docs[index].title}
                                            <span style={{ fontStyle: 'italic' }}>({searchData.docs[index].first_publish_year})</span>
                                        </h4>
                                        <p>{searchData.docs[index].author_name}</p>
                                        <AddBookButton data={searchData.docs[index]} />

                                    </div>
                                   

                                    </div>

                                </div>

                            </>

                        )
                    }
                })}
            </div>
        </>

    )
}

export default DisplaySearchedBooks