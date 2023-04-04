import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Foot";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <Navbar countN={count} />
      <Header />
      <Cart action={updateCount} />
      <Footer />
    </>
  );
}

export default App;
