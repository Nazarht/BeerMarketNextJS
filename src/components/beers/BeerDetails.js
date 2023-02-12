
import classes from './BeerDetail.module.css';

function BeerDetails(props) {

  return (
    <div className={classes.beer}>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>{props.description}</p>
      <span>{props.price.toFixed(2)}$ per bottle</span>
    </div>
  );
}

export default BeerDetails;
