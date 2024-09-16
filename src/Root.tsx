import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { App } from "./App";
import { HomePage } from "./pages/Homepage/Homepage";
import { PhonesPage } from "./pages/PhonesPage/PhonesPage";
import { TabletsPage } from "./pages/TabletsPage/TabletsPage";
import { AccessoriesPage } from "./pages/AcessoriesPage/AcessoriesPage";
import { FavouritesPage } from "./pages/FavouritesPage/FavouritesPage";
import { CartPage } from "./pages/CartPage/CartPage";

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":phonesId" element={<PhonesPage />} />
        </Route>   
        
        <Route path="tablets">
          <Route index element={<TabletsPage />} />
          <Route path=":tabletsId" element={<TabletsPage />} />
        </Route>   
        
        <Route path="accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":accessoriesId" element={<AccessoriesPage />} />
        </Route>

        <Route path="favourites" element={<FavouritesPage />} />   
        <Route path="cart" element={<CartPage />} />   

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Route>
    </Routes>

  </HashRouter>
)