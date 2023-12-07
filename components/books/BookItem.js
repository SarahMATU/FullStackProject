import Card from '../ui/Card';
import classes from './BookItem.module.css';
import { useRouter } from 'next/router';

function BookItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/` + props.id);
  }

  function editDetailsHandler() {
    router.push(`/` + props.id);
  }

  function deleteDetailsHandler() {
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={editDetailsHandler}>Edit Details</button>
          <button onClick={deleteDetailsHandler}>Delete Details</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
