import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to RoadWise Rentals, where every journey begins with
                convenience and reliability. As a trusted provider in the
                industry, we are committed to offering seamless rental
                experiences tailored to your needs. With a diverse fleet of
                vehicles ranging from compact cars to spacious SUVs, we empower
                travelers to explore with confidence.
              </p>
              <p data-aos="fade-up">
                Our mission is simple: to redefine convenience, ensuring that
                every mile you travel with us is filled with comfort, safety,
                and excitement. Whether you're embarking on a weekend getaway or
                a cross-country adventure, trust RoadWise Rentals to be your
                partner on the road to unforgettable experiences. Start your
                journey with us today and discover the freedom of travel without
                boundaries.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
