import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Categories from "../components/Categories/Categories.jsx";
import NewArrivals from "../components/NewArrivals/NewArrivals.jsx";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection.jsx";
import OfferBanner from "../components/OfferBanner/OfferBanner.jsx";
import BestSellers from "../components/BestSellers/BestSellers.jsx";
import LuxuryCollections from "../components/LuxuryCollections/LuxuryCollections.jsx";
import StorySection from "../components/StorySection/StorySection.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import InstagramGallery from "../components/InstagramGallery/InstagramGallery.jsx";
import Newsletter from "../components/Newsletter/Newsletter.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
      <FeaturedCollection />
      <OfferBanner />
      <BestSellers />
      <LuxuryCollections />
      <StorySection />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
