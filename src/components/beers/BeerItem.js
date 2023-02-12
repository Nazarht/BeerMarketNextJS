import Link from "next/link";
import classes from "./BeerItem.module.css";

function BeerItem(props) {
  const { name, price, image, id } = props.beerData;



  return (
    <Link className={classes["beer-item"]} href={`/${id}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div>
        <span>{price.toFixed(2)}$</span>
        <p>per</p>
        <p>bottle</p>
      </div>
    </Link>
  );
}

export default BeerItem;
