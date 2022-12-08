import logo from "../../../public/furn_logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image src={logo} alt="Furniture Store at your click" />
      <p>Developed By Zarriy with 🙃 | @ All rights Reserver 2022</p>
    </footer>
  );
}
