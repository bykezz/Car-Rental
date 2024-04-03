import React from "react";

const testimonialData = [
  {
    name: "John",
    image: "",
    description:
      "Our experience with RoadWise Rentals was simply outstanding. From the seamless booking process to the impeccable condition of the vehicle, every aspect exceeded our expectations. Highly recommended!",
    aosDelay: "0",
  },
  {
    name: "Andrew",
    image: "",
    description:
      "Booking with RoadWise Rentals was a breeze! The customer service was exceptional, and the vehicle provided was perfect for our road trip. We'll definitely be using their services again in the future.",
    aosDelay: "300",
  },
  {
    name: "James",
    image: "",
    description:
      "RoadWise Rentals made our vacation stress-free and enjoyable. The flexibility of their rental options combined with their competitive prices made them the obvious choice for us. Thank you for a fantastic experience!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              At RoadWise Rentals, we prioritize our customers' satisfaction.
              Here's what they have to say about their experiences with us:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
