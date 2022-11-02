import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCart from "../../hooks/useCart";
import { setCartIsActive } from "../../store/slices/opencart/cartSlice";
import ProductCart from "../ProductCart";
import Arrow from "../svg/Arrow";
import BurguerBar from "../svg/BurguerBar";
import Cart from "../svg/Cart";
import Fish from "../svg/Fish";

const Nav = () => {
  const { cart, total } = useCart();
  const [scroll, setScroll] = useState("inicio");
  const [navIsActive, setNavIsActive] = useState(false);

  const cartIsActive = useSelector((state) => state.cart.cartIsActive);
  const dispatch = useDispatch();

  const nav = useRef();
  const list = useRef();

  const handleNav = () => {
    if (navIsActive) {
      setNavIsActive(false);
      document.body.classList.remove("navIsActive");
    }
  };

  const handleBar = () => {
    if (navIsActive) {
      setNavIsActive(false);
      document.body.classList.remove("navIsActive");
    }
    if (!navIsActive) {
      setNavIsActive(true);

      document.body.classList.add("navIsActive");
    }
  };

  const handleCart = (e) => {
    if (!cartIsActive) {
      dispatch(setCartIsActive(true));
      setScroll(true);
    } else {
      dispatch(setCartIsActive(false));
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var actualScroll =
          window.pageYOffset || document.documentElement.scrollTop;

        if (actualScroll > lastScrollTop) {
          setScroll(false);
          // productList.classList.remove("active");
        } else {
          setScroll(true);
          // productList.classList.remove("inactive");
        }

        lastScrollTop = actualScroll <= 0 ? 0 : actualScroll; // For Mobile or negative scrolling
        if (actualScroll === 0) setScroll("inicio");
      },
      false
    );
  }, []);

  return (
    <>
      <nav
        className={`nav nav--home ${
          scroll === "inicio" ? "start" : scroll ? "up" : "down"
        } `}
        ref={nav}
      >
        <Link href="/">
          <picture className="nav__logo">
            <img src="/logo.svg" alt="pescaderia-carenero-logo" />
          </picture>
        </Link>
        <span className="nav__icons">
          <span className="nav__bar" onClick={handleBar}>
            <BurguerBar id="nav__bar" />
          </span>
          <ProductCart modifier="mobile" scroll={scroll} />
        </span>
        <div
          className={`nav__transparent ${navIsActive ? "active" : "inactive"}`}
          onClick={handleNav}
        ></div>
        <ul
          className={`nav__list ${navIsActive ? "active" : "inactive"}`}
          ref={list}
        >
          <li className="nav__item" onClick={handleNav}>
            <Link className="nav__link" href="#info">
              <a className="nav__link">Información</a>
            </Link>
          </li>
          <li className="nav__item" onClick={handleNav}>
            <Link className="nav__link" href="#products">
              <a className="nav__link">Productos</a>
            </Link>
          </li>
          <li className="nav__item" onClick={handleNav}>
            <Link href="#contacto">
              <a className="nav__link">Contacto</a>
            </Link>
          </li>
          {/* <span className="nav__cart-desk">
          <div className="cart-fish">
            <Fish id="cart-fish__fish" />
            <span className="cart-fish__number">2</span>
          </div>
          <Cart modifier="cart-nav-desk" />
        </span> */}
          <ProductCart modifier="desk" scroll={scroll} />
        </ul>
      </nav>
      {cart.length > 0 && (
        <div className={`nav__next ${cartIsActive ? "hidden" : ""}`}>
          <div className={`cart }`} onClick={handleCart}>
            {cart && cart.length > 0 && total > 0 ? (
              <div className="cart-fish">
                <Fish id="cart-fish__fish" />
                <span className="cart-fish__number">${total}</span>
              </div>
            ) : (
              false
            )}
            <Cart modifier="cart-svg" />
          </div>
          <Link href="/checkout">
            <a href="#" className="nav__next-buy">
              Realizar Pedido <Arrow modifier="next-buy" />
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
