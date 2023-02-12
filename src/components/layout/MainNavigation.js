import Link from "next/link";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.navigation}>
      <div>
        <h1>Next Beer</h1>
      </div>
      <nav>
        <Link href='/'>All Beers</Link>
        <Link href='/new-beer'>New Beer</Link>
      </nav>
    </header>
  );
}

export default MainNavigation;
