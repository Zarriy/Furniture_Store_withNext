import classes from "../../../styles/Home.module.css";
import Button from "../reuseable/button";
import Image from "next/image";
import HeroImage from "../../../public/furniture.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={classes.hero}>
      <div className={classes.hero1}>
        <p>New Arrival</p>
        <h1>Choose your comfort with Us...</h1>
        <Link href="/living">
          <Button title="Shop Now" class="heroBtn" />
        </Link>
      </div>
      <div className={classes.hero2}>
        <Image
          src={HeroImage}
          alt="Comfortable sofa set"
          className={classes.heroImg}
        />
      </div>
    </div>
  );
}
