/** @format */

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/HomePage/Home";
import { Catalog } from "../pages/CatalogPage/Catalog";
import { Favorites } from "../pages/FavoritesPage/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
