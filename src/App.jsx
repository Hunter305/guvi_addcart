import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Foot";
import cart from "./components/cart.json";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = (e) => {
    setCount(count + 1);
    let val = e.target.value;
    cart.map((value, index) => {
      if (index == val) {
        value.isVisible = false;
      }
    });
  };

  const removeCount = (e) => {
    setCount(count - 1);
    let rval = e.target.value;
    cart.map((value, index) => {
      if (index == rval) {
        value.isVisible = true;
      }
    });
  };

  return (
    <>
      <Navbar countN={[count]} />
      <Header />
      <Cart action={updateCount} raction={removeCount} />
      <Footer />
    </>
  );
}

export default App;
