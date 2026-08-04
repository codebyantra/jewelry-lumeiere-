import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import { testimonials } from "../../data/products.js";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Client Words</span>
            <h2 className="section-title">
              Worn, loved, <em>trusted</em>
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={26}
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            720: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card facet-frame" style={{ animationDelay: `${i * 0.4}s` }}>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FiStar key={idx} size={13} className={idx < t.rating ? "is-filled" : ""} />
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
