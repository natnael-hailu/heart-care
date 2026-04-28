
import type { JSX } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomCursor from "./components/Cursor";


const App = (): JSX.Element => {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <Home />
    </>
  );
};

export default App;