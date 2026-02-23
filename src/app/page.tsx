import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductShowcase from "@/components/ProductShowcase";
import ModelGallery from "@/components/ModelGallery";
import BannerSection from "@/components/BannerSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import VideoShowcase from "@/components/VideoShowcase";
import VirtualTryOn from "@/components/VirtualTryOn";
import WhyEyeCraft from "@/components/WhyEyeCraft";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ProductShowcase />
      <BannerSection />
      <ModelGallery />
      <FeaturedCollection />
      <VideoShowcase />
      <VirtualTryOn />
      <WhyEyeCraft />
      <Newsletter />
      <Footer />
    </>
  );
}
