import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutAction } from "../reudux/actions/porducts/userAction";

const Headers = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signoutAction());
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success"
      style={{ padding: "0 2rem" }}
    >
      <div className="container-fluid py-3">
        <Link className="navbar-brand" to="/">
          Harsh Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>&nbsp; Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              {userInfo ? (
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle dropdown-item"
                        to="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>&nbsp;{userInfo.name}
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-success bg-success"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#signout"
                            onClick={signoutHandler}
                          >
                            Sign Out
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link className="nav-link" to="/signin">
                  <i className="fas fa-user"></i>&nbsp;Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
