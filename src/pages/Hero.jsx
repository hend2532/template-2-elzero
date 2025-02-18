import Header from "../components/Header";

function Hero() {
  return (
    <div
      className="hero relative h-screen w-screen bg-cover bg-no-repeat "
      style={{ backgroundImage: "url(/public/images/landing.jpg)" }}
    >
      <Header />
      <div className="color w-full md:w-[50%] lg:pl-40 md:mt-[20vh] mt-[30vh] py-16 px-10 text-white box-border">
        <h1 className="lg:text-[35px] text-[25px] font-medium mb-6">
          Hello World!
          <br />
          We Are Kasper We Make Art.
        </h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
          aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris
          blandit aliquet elit, eget tincidunt.
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center md:mt-[10vh] mt-[30vh]">
        <span className="w-4 h-4 rounded-full border border-white"></span>
        <span className="w-4 h-4 rounded-full bg-[#19c8fa]"></span>
        <span className="w-4 h-4 rounded-full border border-white"></span>
      </div>
    </div>
  );
}

export default Hero;
