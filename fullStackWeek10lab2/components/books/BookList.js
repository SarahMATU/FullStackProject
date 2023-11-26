import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.Books.map((Book) => (
        <BookItem
          key={Book.id}
          id={Book.id}
          image={Book.image}
          title={Book.title}
          author={Book.author}
        />
      ))}
    </ul>
  );
}

export default BookList;
