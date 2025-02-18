import { FaEnvelope, FaFolder, FaMugHot, FaTrophy } from "react-icons/fa";

function About() {
  const data = [
    {
      icon: <FaMugHot size={20} color="white" />,
      number: "1.236",
      title: "Coffee Drinks",
    },
    {
      icon: <FaFolder size={20} color="white" />,
      number: "256",
      title: "Completed Projects",
    },
    {
      icon: <FaEnvelope size={20} color="white" />,
      number: "1,743",
      title: "Mail Sent",
    },
    {
      icon: <FaTrophy size={20} color="white" />,
      number: "17",
      title: "Awards Received",
    },
  ];

  return (
    <div id="about" className="w-screen m-auto my-32 text-center">

      <h1 className="relative text-[20px] md:text-[35px] my-12 border-b-2 p-3 border-black w-fit m-auto">
        About Us
        <div className="absolute left-1/2 -translate-x-1/2 bg-white w-6 h-6 rounded-full border border-black"></div>
      </h1>

      <p className="w-[70%] lg:w-[40%] m-auto text-[#999] text-[20px]">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blandit aliquet elit, eget tincidunt.
      </p>

      <img src="/images/about.png" alt="about" className="m-auto mt-16" />

  
      <div
        className="hero relative min-h-[50vh] w-screen bg-cover bg-no-repeat mt-[-15vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/images/stats.png')" }}
      >
        <div className="color  m-10 p-16 gap-8 md:gap-32 text-center flex flex-wrap justify-center items-center text-white">
          {data.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="bg-black p-3 rounded-full">{item.icon}</div>
              <p className="text-[30px] font-bold mt-2">{item.number}</p>
              <h1 className="text-lg">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
