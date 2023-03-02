import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { Recherch } from "./Component/Recherch";
import { Home } from "./Component/Home";
import { Panier } from "./Component/Panier";
import { useState, useEffect } from "react";
import { UserContext } from "./Component/ContextApi/Context";
import { Menu } from "./Component/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState([]);
  const changeName = (name: string,password:string) => {
    const datainforUser={
      nameUser:name,
      passWordUser:password
    }
    setUser();
  };
  useEffect(() => {}, []);
  return (
    <UserContext.Provider value={{ user, changeName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="/Recherch" element={<Recherch />} />
            <Route path="/Panier" element={<Panier />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
