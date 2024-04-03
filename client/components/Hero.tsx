"use client";

// Image component provided by Next.js's built-in image optimization feature. This
// component is used for optimizing and serving images in Next.js applications.
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          {/*<Image> component  automatically optimizes the image for performance */}
          <Image
            src="/hero.png"
            // fill prop indicates that the image should fill its container while preserving its aspect ratio.
            fill
            className="object-contain"
            alt="hero-image"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
