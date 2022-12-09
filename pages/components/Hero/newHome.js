import classes from "../../../styles/Home.module.css";
import { useState } from "react";
import NewCard from "../reuseable/cards-1";
import data from "../data";

export default function NewIn() {
  const [newData, setNewData] = useState(data);

  const showModel = (event) => {
    const target = event.target.innerText;
    event.target.parentElement.className = target;
    setNewData((prevData) => data.filter((data) => data.type === target));
    if (target === "All") {
      setNewData(data);
    }
  };

  return (
    <div className={classes.newIn}>
      <h2>New In</h2>
      <p>Select from our latest product catalogue</p>
      <ul className="All">
        <li onClick={showModel} className="chair">
          Chair
        </li>
        <li onClick={showModel} className="sofa">
          Sofa
        </li>
        <li onClick={showModel} className="all">
          All
        </li>
      </ul>
      <div className={classes.productsNew}>
        {newData.map((prod) => (
          <NewCard
            img={prod.image}
            bg={prod.bg}
            title={prod.title}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
}
