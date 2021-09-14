/* pages/_app.js */
import {useState} from "react";
import '../styles/globals.css'
import Link from 'next/link';  
import NavbarModal from "../component/partials/NavbarModal.js";
import Head from "../component/Layout/Head.js";



function MyApp({ Component, pageProps }) {

  const [mobi, setMobil] = useState(false);

  const mobileFunc = () => {
    setMobil(!mobi);
  };
  return (
    <div>

    <Head title= "Shop" />

    <header
      style={{ background: "#101522", position: "fixed", width: "100% " }}
      id="header"
      className="d-flex align-items-center "
    >
      <div class="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
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
              <Link class="nav-link scrollto active" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="nav-link scrollto" href="/create-item">
                Sell My NFT
              </Link>
            </li>
            <li>
              <Link class="nav-link scrollto" href="/my-assets">
                My Wallet
              </Link>
            </li>
            <li>
              <Link class="nav-link scrollto" href="/creator-dashboard">
                My Dashboard
              </Link>
            </li>
          </ul>
          <div onClick={mobileFunc}>
            {" "}
            <i class="bi bi-list mobile-nav-toggle"></i>
          </div>
        </nav>

        {mobi && <NavbarModal />}

        <a class="buy-tickets scrollto" href="/creator-dashboard">
          Profile
        </a>
      </div>
    </header>
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;


{/* <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav> */}