import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
import LoginInput from "./components/Login/LoginInput";
import Test from "./components/Login/Test";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/logininput" element={<LoginInput />}></Route>
        <Route path="/logintest" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
