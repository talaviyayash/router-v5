import React, { Fragment, memo, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom";
import { products } from "./ProductsDemoArray";

const Product = ({ children }) => {
  return (
    <>
      <h1 className="heading">Product</h1>
      <div className="products inline-block">
        {products.map((val, index) => {
          return (
            <NavLink
              to={`/product/${val.id}`}
              activeClassName="link2"
              className="link"
              key={index}
            >
              <div>
                <img src={val.image} alt="" className="img-product" />
                <div>{val.title}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      {children}
    </>
  );
};
export default memo(Product);
