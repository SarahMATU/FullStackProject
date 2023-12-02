import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
  return (
    <ul className={classes.list}>
      const books = props.books || [];
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
}

export default BookList;
