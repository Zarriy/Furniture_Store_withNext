import classes from "../../../styles/Home.module.css";
import Image from "next/image";

export default function NewCard(props) {
  return (
    <div
      className={classes.pCards}
      style={{ backgroundColor: props.bg }}
      onClick={props.clickHandle}
    >
      <Image src={props.img} alt={props.title} />
    </div>
  );
}
