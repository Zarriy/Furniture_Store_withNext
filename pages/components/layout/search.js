import classes from "../../../styles/Home.module.css";

export default function SearchBtn() {
  return (
    <div className={classes.search}>
      <input className="searchInput" type="text" placeholder="Search" />
    </div>
  );
}
