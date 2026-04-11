import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserInterface from "./pages/UserInterface";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { useState } from "react";
import Contact from "./pages/Contact";
import Scroll from "./components/scroll";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <>
      <BrowserRouter>
      <Scroll></Scroll>
        <Routes>
          <Route path={"/"} element={<UserInterface openMenu={openMenu} setOpenMenu={setOpenMenu}></UserInterface>}>
            <Route index element={<Home setOpenMenu={setOpenMenu} openMenu={openMenu}></Home>} />
            <Route path={"about"} element={<About></About>} />
            <Route path={"/skills"} element={<Skills></Skills>} />
             <Route path={"/contact"} element={<Contact></Contact>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
