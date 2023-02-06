import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addUser" element={<AddEditUser />} />
        <Route path="/editUser/:id" element={<AddEditUser />} />
        <Route path="/userInfo/:id" element={<UserInfo />} />

      </Routes>
    </>
  );
}

export default App;
