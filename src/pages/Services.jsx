import { FaCamera, FaCog, FaDesktop, FaPencilRuler } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaDesktop size={35} color="black" />,
      title: "Vorem amet intuitive",
      body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.",
    },
    {
      icon: <FaCog size={35} color="black"/>,
      title: "Vorem amet intuitive",
      body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.",
    },
    {
      icon: <FaPencilRuler size={35} color="black"/>,
      title: "Vorem amet intuitive",
      body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.",
    },
    {
      icon: <FaCamera size={35} color="black"/>,
      title: "Vorem amet intuitive",
      body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.",
    },
  ];
  return (
    <div id="services"  className="w-screen  m-auto my-32">
      <h1 className="relative text-[20px] md:text-[35px] my-12 m-auto border-b-2 p-3 border-black w-fit ">
        SERVICES
        <div className="absolute bg-white ml-[35%] w-6 h-6 rounded-full border border-black"></div>
      </h1>
      <p className="w-[70%] lg:w-[40%] m-auto text-center text-[#999] text-[20px]">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blandit aliquet elit, eget tincidunt.
      </p>
      <div className="flex flex-wrap m-4 box-border items-center justify-center">
        {services.map((item) => (
          <div key={item.icon} className="m-4  flex flex-row items-center w-[90%] lg:w-[40%] gap-8 text-[#999]">
            <div>{item.icon}</div>
            <div>
            <h1 className="text-[#19c8fa] font-medium text-[25px]">{item.title}</h1>
            <div className="text-[20px]">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
