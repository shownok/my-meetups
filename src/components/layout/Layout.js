import MianNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MianNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
