import React, { useState } from "react";
import NavbarModal from "./NavbarModal";
import Link from "next/link"

function NavBar() {
  const [mobi, setMobil] = useState(false);

  const mobileFunc = () => {
    setMobil(!mobi);
  };

  return (
    <header
      style={{ background: "#101522", position: "fixed" }}
      id="header"
      className="d-flex align-items-center "
    >
      <div class="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
          {/* <h1>
            <a href="index.html">
              The<span>Event</span>
            </a>
          </h1> */}
          <a href="/" className="scrollto">
            <img
              src="assets/img/artfact-logo.PNG"
              alt="artfact-logo"
              title="artfact-logo"
            />
          </a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#toAbout">
                About Us
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#toSchedule">
                Schedule
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#toContact">
                Contact
              </a>
            </li>
          </ul>
          <div onClick={mobileFunc}>
            {" "}
            <i class="bi bi-list mobile-nav-toggle"></i>
          </div>
        </nav>

        {mobi && <NavbarModal />}

        <Link href="shop">
        <a class="buy-tickets scrollto">
         NFT Marketplace
        </a>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;