import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./index";

export default function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
