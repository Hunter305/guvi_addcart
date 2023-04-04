import cart from "./cart.json";
// import { Button } from "@mui/material";
import "./Cart.css";
import { useState } from "react";

const Cart = (props) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {cart.map((value, index) => {
            return (
              <div className="col mb-5" key={`${index}`}>
                <div className="card h-100">
                  <img className="card-img-top" src={value.imgSrc} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{value.name}</h5>
                      {(index === 3 ||
                        index === 1 ||
                        index === 6 ||
                        index === 7) && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      )}
                      {(index === 2 ||
                        index === 1 ||
                        index === 6 ||
                        index === 4) && (
                        <span className="text-muted text-decoration-line-through">
                          {value.price[0]}
                        </span>
                      )}
                      {index === 2 || index === 1 || index === 6 || index === 4
                        ? value.price[1]
                        : value.price}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={props.action}
                    style={{
                      marginBottom: "20px",
                      marginLeft: "50px",
                      marginRight: "50px",
                    }}
                    value={index}
                    disabled={!value.isVisible}
                  >
                    {value.button}
                  </button>
                  {!value.isVisible && (
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={props.raction}
                      style={{
                        marginBottom: "20px",
                        marginLeft: "50px",
                        marginRight: "50px",
                      }}
                      value={index}
                    >
                      remove from Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
