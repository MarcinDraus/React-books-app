import BookLists from './Components/BookLists/BokLists';
import BookForm from './Components/BookForm/BookForm';
import { useState } from 'react';
import shortid from 'shortid';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice adn Man', author: 'john Due' },
    { id: 1, title: 'the Witcher', author: 'And Sapkowski' }
  ]);
const removeBook = bookId => {
  setBooks(books.filter(book => book.id !== bookId))
};

const addBook = newBook => {
  setBooks([...books, { id: shortid(), title: newBook.title, author: newBook.author}]);
}

  return (
    <div>
      <h1>Books App</h1>
      <BookLists books={books} removeBook={removeBook} />
      <BookForm addBook={addBook}/>
    </div>
  );
}

export default App;
