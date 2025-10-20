import React from "react";

const cards = [
  {
    title: "Advance pain management program",
    desc: "Heal faster with our advanced pain management program and expert physiotherapy support.",
    img: "https://static.wixstatic.com/media/5f378b_03219a5f3d1743de9f7177bdee5817f0~mv2.jpg/v1/fill/w_1200,h_900,al_c/5f378b_03219a5f3d1743de9f7177bdee5817f0~mv2.jpg",
  },
  {
    title: "Post surgery physiotherapy",
    desc: "Recover stronger with personalized post-surgery physiotherapy care.",
    img: "https://images.unsplash.com/photo-1649751295468-953038600bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwaHlzaW90aGVyYXB5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Specialized rehabilitation program",
    desc: "Advanced specialized rehabilitation program to restore strength and mobility.",
    img: "https://img.freepik.com/free-photo/care-male-healthy-weights-athletic_1139-695.jpg",
  },
];

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg w-full"
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover group-hover:scale-110 duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm  max-w-xs">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
