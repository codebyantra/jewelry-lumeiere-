import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../../data/products.js";
import "swiper/css";
import "./BestSellers.css";

export default function BestSellers() {
  const bestsellers = products.filter((p) => p.tag === "Bestseller").length
    ? products
    : products;

  return (
    <section className="section best-sellers">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Most Loved</span>
            <h2 className="section-title">
              Best <em>sellers</em>
            </h2>
          </div>
          <p className="section-sub">Pause to look closer — the slider waits for you.</p>
        </div>
      </div>

      <div className="best-sellers-slider">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={26}
          loop
          freeMode
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove
        >
          {[...bestsellers, ...bestsellers].map((p, i) => (
            <SwiperSlide key={`${p.id}-${i}`} className="best-sellers-slide">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
