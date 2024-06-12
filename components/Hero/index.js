/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-headline">
          Perluas <span className="text-gradient-blue">Pengetahuan Anda</span>{" "}
          <br className="d-none d-lg-block" />
          dengan <span className="text-gradient-pink">Bergabung</span> di Acara
          Terhebat Kami
        </div>
        <p className="hero-paragraph">
          Kami menyediakan berbagai event pameran seni terbaik untuk membantu{" "}
          <br className="d-none d-lg-block" />
          anda dalam meningkatkan kreativitas di bidang seni.
        </p>
        <a href="#grow-today" className="btn-green">
          Check Events
        </a>
      </div>

      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        <img src="/images/1.png" alt="semina" className="img-1" />
        <img src="/images/2.png" alt="semina" className="img-2" />
        <img src="/images/1.png" alt="semina" className="img-1" />
      </div>
    </>
  );
}
