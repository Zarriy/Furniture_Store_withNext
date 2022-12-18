import { useState } from "react";
import { useRouter } from "next/router";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import homeIcon from "../public/icons/home-outline.svg";
import Link from "next/link";
import data from "../store/data";
import NewCard from "./components/reuseable/cards-1";

export default function Living() {
  const [priceRange, setPriceRange] = useState(599);

  const router = useRouter();
  const id = router.query.pageId;

  const priceChangeHandler = (e) => {
    console.log(e.target.value);
    setPriceRange(e.target.value);
  };
  const handleClick = (id) => {
    router.push("/products/" + id);
  };

  return (
    <div>
      <div className={classes.pageHeader}>
        <h2>{id}</h2>
        <div className={classes.breadcrumbs}>
          <p>
            <Link href="/">
              <Image src={homeIcon} alt="breadcrumbs icon" />
            </Link>{" "}
            / {id}
          </p>
        </div>
      </div>
      <div className={classes.productsDiv}>
        <div className={classes.filters}>
          <div>
            <h3>Color</h3>
            <div className={classes.colorPicker}>
              {data.map((items) => (
                <div
                  key={items.id}
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: items.bg,
                    borderRadius: "50%",
                    marginBottom: "2rem",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
          <div className={classes.priceRange}>
            <h3>Price Range</h3>
            <input
              type="range"
              value={priceRange}
              min="299"
              max="999"
              onChange={priceChangeHandler}
            />
            <span>{priceRange}</span>
          </div>
        </div>
        <div className={classes.productsBox}>
          {data.map((item) => (
            <NewCard
              img={item.image}
              title={item.title}
              key={item.id}
              bg={item.bg}
              clickHandle={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
