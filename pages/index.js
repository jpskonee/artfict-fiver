import React from 'react';
import HeadBanner from "../component/partials/HeadBanner";
import SchedulePage from "../component/schedules/SchedulePage";
import ContactPage from "../component/partials/ContactPage";
import WhatWeDo from "../component/partials/WhatWeDo";
import Footer from "../component/partials/Footer";
import NavBar from "../component/partials/NavBar";
import Head from "../component/Layout/Head.js";
import FootScript from "../component/Layout/FootScript.js";
import Shop from "../component/Shops/Shop.js";
import Link from "next/Link";

const index = () => {
    return (
        <div style={{marginTop: "5rem"}}>
            <FootScript />
            <Head title="Artfact Keychain" />
            <NavBar />
            <HeadBanner /> 
                <div style={{margin: "2.5rem 0 2rem", color: "#32329d", textAlign: "center", fontSize: "3rem", FontWeight: "900"}} href="shop"> Artfact Global NFT Market </div>
            <Shop />
            <WhatWeDo />
            <SchedulePage />

            <ContactPage />
            <Footer />
    </div>
    )
}

export default index
