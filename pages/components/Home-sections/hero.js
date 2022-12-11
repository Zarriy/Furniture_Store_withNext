import classes from "../../../styles/Home.module.css";
import Button from "../reuseable/button";
import Image from "next/image";
import HeroImage from "../../../public/furniture.png";

export default function HeroSection() {
  return (
    <div className={classes.hero}>
      <div className={classes.hero1}>
        <p>New Arrival</p>
        <h1>Choose your comfort with Us...</h1>
        <Button title="Shop Now" class="heroBtn" />
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
