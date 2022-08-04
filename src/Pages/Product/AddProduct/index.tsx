import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import ProductPhoto from "./ProductPhoto";
import ProductPrice from "./ProductPrice";

interface IProduct {
  name: string;
  description: string;
  photo?: File;
  price: number;
}

const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>({
    name: "",
    description: "",
    price: 0,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Routes>
      <Route path="/addinfo" element={<ProductInfo onChange={onChange} />} />
      <Route path="/addphoto" element={<ProductPhoto onChange={onChange} />} />
      <Route path="/addprice" element={<ProductPrice onChange={onChange} />} />
    </Routes>
  );
};

export default AddProduct;
