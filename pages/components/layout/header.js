import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import logo from "../../../public/furn_logo.png";
import searchIcon from "../../../public/search-outline.svg";
import cartIcon from "../../../public/cart-outline.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <a href="#">
          <Image src={logo} alt="Furniture Store at your click" />
        </a>
      </div>
      <div className={styles.navList}>
        <ul>
          <li>Living Room</li>
          <li>Bedroom</li>
          <li>Kitchen & Dinning</li>
        </ul>
      </div>
      <div className={styles.iconsD}>
        <Image src={searchIcon} alt="search icon" />
        <Image src={cartIcon} alt="Cart Icon" />
      </div>
    </header>
  );
}
export default Header;
