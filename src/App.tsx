import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import {
  UserWallet,
  Wallets,
  User,
  Users,
  Accounts,
  Services,
  UserAccount,
} from "./Pages";
import Layout from "./Layout";
import AddProduct from "Pages/Product/AddProduct";
import Products from "Pages/Product/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/addproduct/*" element={<AddProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/wallets/:id" element={<UserWallet />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/:id" element={<UserAccount />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
