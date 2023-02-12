
import classes from './BeerDetail.module.css';

function BeerDetails(props) {
  const { id, name, description, price, image } = props.beerData;

  return (
    <div className={classes.beer}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <span>{price.toFixed(2)}$ per bottle</span>
    </div>
  );
}

export default BeerDetails;
