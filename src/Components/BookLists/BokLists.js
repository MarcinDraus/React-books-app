const BookLists = ({ books, removeBook }) => {
    
    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author}<button onClick={() => removeBook(book.id)}>remove</button></li> )}
        </ul>
    );
};

export default BookLists;