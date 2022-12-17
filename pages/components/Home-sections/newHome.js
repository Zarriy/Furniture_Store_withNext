import classes from "../../../styles/Home.module.css";
import NewCard from "../reuseable/cards-1";
import data from "../../../store/data";
import { useSelector, useDispatch } from "react-redux";
import { dataSelector } from "../../../store";
import { useRouter } from "next/router";
import ProductPage from "../../products/[pid]";

export default function NewIn() {
  // const [newData, setNewData] = useState(data);
  const newData = useSelector((state) => state.dataReducer.data);

  const dispatch = useDispatch();

  const router = useRouter();

  const clickHandler = (prod) => {
    router.push("/products/" + prod.id);
  };
  const showModel = (event) => {
    const target = event.target.innerText;
    event.target.parentElement.className = target;
    // setNewData((prevData) => data.filter((data) => data.type === target));
    dispatch(dataSelector("updateList", target));
    if (target === "All") {
      dispatch(dataSelector("all"));
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
            clickHandle={() => clickHandler(prod)}
          />
        ))}
      </div>
    </div>
  );
}
