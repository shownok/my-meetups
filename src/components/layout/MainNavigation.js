import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";

function MianNavigation() {
  const favouriteCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MianNavigation;
