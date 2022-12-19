import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import CartDrawer from "./cartDrawer";
import SearchBtn from "./search";

export default function Layout({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (
        (cartOpen &&
          !e.target.closest(".cartDrawer") &&
          !e.target.closest(".cartIconA")) ||
        e.target.closest(".checkoutBtn")
      ) {
        setCartOpen(false);
      }
      if (
        search &&
        !e.target.closest(".searchBtnn") &&
        !e.target.closest(".searchInput")
      ) {
        setSearch(false);
      }
    });
  });

  const cartHandler = () => {
    setCartOpen((prev) => !prev);
  };
  const searchHandler = () => {
    setSearch((prev) => !prev);
  };

  return (
    <>
      <Header cartH={cartHandler} searchH={searchHandler} />
      {search && <SearchBtn />}
      <CartDrawer transX={cartOpen ? 0 : 100} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
