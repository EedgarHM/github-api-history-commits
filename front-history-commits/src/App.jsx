import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./components/Inicio";
import Historial from "./components/Historial";
import MainLayout from "./layout/MainLayout";
import Repos from "./components/Repos";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Inicio />} />
            <Route path="history" element={<Historial />} />
            <Route path="repos" element={<Repos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
