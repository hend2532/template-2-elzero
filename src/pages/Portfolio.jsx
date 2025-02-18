import { useState } from "react";

function Portfolio() {
  const data = [
    {
      id: 1,
      title: "Awesome Image",
      image: "/images/shuffle-01.jpg",
      category: "Photography",
    },
    {
      id: 2,
      title: "Awesome Image",
      image: "/images/shuffle-02.jpg",
      category: "Photography",
    },
    {
      id: 3,
      title: "Awesome Image",
      image: "/images/shuffle-03.jpg",
      category: "Photography",
    },
    {
      id: 4,
      title: "Awesome Image",
      image: "/images/shuffle-04.jpg",
      category: "Photography",
    },
    {
      id: 5,
      title: "Awesome Image",
      image: "/images/shuffle-05.jpg",
      category: "Photography",
    },
    {
      id: 6,
      title: "Awesome Image",
      image: "/images/shuffle-06.jpg",
      category: "Photography",
    },
    {
      id: 7,
      title: "Awesome Image",
      image: "/images/shuffle-07.jpg",
      category: "Photography",
    },
    {
      id: 8,
      title: "Awesome Image",
      image: "/images/shuffle-08.jpg",
      category: "Photography",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div id="portfolio" className="w-screen m-auto my-32">
      <h1 className="relative text-[20px] md:text-[35px] my-12 m-auto border-b-2 p-3 border-black w-fit">
        Portfolio
        <div className="absolute bg-white ml-[35%] w-6 h-6 rounded-full border border-black"></div>
      </h1>

      <p className="w-[70%] lg:w-[40%] m-auto text-center text-[#999] text-[20px]">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blandit aliquet elit, eget tincidunt.
      </p>

      <div className="flex justify-center items-center gap-4 md:gap-8 m-16 text-[20px]">
        <span className="bg-[#19c8fa] py-2 px-4 text-white cursor-pointer">
          All
        </span>
        <span>App</span>
        <span>Photo</span>
        <span>Web</span>
        <span>Print</span>
      </div>

      <div className="flex flex-wrap overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{ backgroundImage: `url(${item.image})` }}
            className="relative bg-cover bg-no-repeat w-full md:w-1/2 lg:w-[25%] h-80 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1
            clip-path-square overflow-hidden"
          >
            <div
              className={`absolute w-full p-4 bg-white bottom-0 text-[20px] transition-all duration-500  hover:rotate-0 overflow-hidden ${
                hoveredItem === item.id ? "bottom-[0%] " : "bottom-[-100%]"
              }`}
            >
              <p>{item.title}</p>
              <p className="text-[#19c8fa] ">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="my-10 ml-[45%] bg-[#19c8fa] py-3 px-6 text-[20px] text-white cursor-pointer">MORE</button>
    </div>
  );
}

export default Portfolio;
