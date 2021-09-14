import React from "react";
import Image from "next/image"

function WhatWeDo() {
  return (
    <div >
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" class="about">
        <div class="container">
          <div class="row justify-content-between">
            <div 
                data-aos="zoom-in" class="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <Image
                src="/2.png"
                class="img-fluid"
                alt=""
                width={850}
                height={450}
              />
            </div>
            <div class="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Enjoy our Exclusive Service</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div class="row">
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-receipt"></i>
                  <h4>DIGITAL NFT</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-cube-alt"></i>
                  <h4>PHYSICAL NFT</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div id="toSchedule"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
    </div>
  );
}

export default WhatWeDo;
