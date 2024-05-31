import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { products } from "./ProductsDemoArray";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  useEffect(() => {
    const data = products.find((val) => val.id === Number(id));
    setProductDetail(data);
  }, [id]);
  return (
    <>
      {productDetail && (
        <>
          <div className="product-show">
            <h1> Selected Product :- </h1>
            <div>
              <img src={productDetail?.image} alt="" className="img-product" />
            </div>
            <br />
            <div className="product-name">Name :-{productDetail?.title}</div>
            <br />
            <div className="product-price">Price :-{productDetail?.price}</div>
            <br />
            <div className="product-description">
              Description :-{productDetail?.description}
            </div>
            <br />
            <div className="product-category">
              Category :-{productDetail?.category}
            </div>
            <br />
            <div className="product-rating">
              Rating :-
              {productDetail?.rating?.rate + " / 5 "}
            </div>
            <br />
            <div className="product-count">
              Total Review :-
              {" " + productDetail?.rating?.count}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
