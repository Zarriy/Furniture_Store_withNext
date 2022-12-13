import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import logo from "../../../public/furn_logo.png";
import searchIcon from "../../../public/search-outline.svg";
import cartIcon from "../../../public/cart-outline.svg";
import Link from "next/link";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Link href="/">
          <Image src={logo} alt="Furniture Store at your click" />
        </Link>
      </div>
      <div className={styles.navList}>
        <ul>
          <li>
            <Link href="/living">Living Room</Link>
          </li>
          <li>
            <Link href="/bedroom">Bedroom</Link>
          </li>
          <li>
            <Link href="kitchen">Kitchen & Dinning</Link>
          </li>
        </ul>
      </div>
      <div className={styles.iconsD}>
        <Image
          src={searchIcon}
          alt="search icon"
          onClick={props.searchH}
          className="searchBtnn"
        />
        <Image
          src={cartIcon}
          alt="cart Icon"
          className="cartIconA"
          onClick={props.cartH}
        />
        {/* <button>
          <ion-icon
            name="cart-outline"
            onClick={() => console.log("this works")}
          ></ion-icon>
        </button> */}
      </div>
    </header>
  );
}
export default Header;
