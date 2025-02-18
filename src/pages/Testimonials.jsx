function Testimonials() {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-12 p-8 text-[20px]">
      <div className="w-screen lg:w-[45%] ">
        <h1 className="text-2xl  mb-4 text-center">TESTIMONIALS</h1>
        <p className="text-[#666] max-w-[500px] mx-auto text-center">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        <div className=" p-4 rounded-lg mt-6 flex flex-wrap items-center gap-4">
          <img
            src="/images/skills-01.jpg"
            alt="User"
            className="w-20 h-20 rounded-full"
          />
          <div className="border-b border-b-[#ccc] p-4 m-3">
            <p className="text-[#999] ">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <h2 className="text-lg text-[#666] float-right mt-2">
              John Doe, CEO
            </h2>
          </div>
        </div>
        <div className=" p-3 rounded-lg  flex flex-wrap  items-center gap-4">
          <img
            src="/images/skills-02.jpg"
            alt="User"
            className="w-20 h-20 rounded-full"
          />
          <div className="border-b border-b-[#ccc] p-4 m-3">
            <p className="text-[#999] ">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <h2 className="text-lg text-[#666] float-right mt-2">
              John Doe, CEO
            </h2>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center mt-10">
          <span className="w-4 h-4 rounded-full border border-[#999]"></span>
          <span className="w-4 h-4 rounded-full bg-[#19c8fa]"></span>
          <span className="w-4 h-4 rounded-full border border-[#999]"></span>
        </div>
      </div>

      <div className="w-full  lg:w-[45%] text-center">
        <h1 className="text-2xl  mb-4">SKILLS</h1>
        <p className="text-[#666] max-w-[500px] mx-auto">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
        <div className="mt-6 space-y-4">
          {[
            { name: "HTML", progress: "95%" },
            { name: "Github", progress: "75%" },
            { name: "React", progress: "50%" },
            { name: "JavaScript", progress: "70%" },
            { name: "CSS", progress: "80%" },
          ].map((skill) => (
            <div key={skill.name} className="text-left">
              <h4 className="">{skill.name}</h4>
              <div className="w-full bg-gray-300 h-4 mt-1">
                <div
                  className="bg-[#19c8fa] h-4 "
                  style={{ width: skill.progress }} 
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    <div className="hero1 text-white h-52 flex flex-col justify-center items-center text-[18px] md:text-[30px] text-center bg-cover bg-no-repeat my-16" style={{backgroundImage:"url(/images/quote.jpg"}}>
          <quote className="">&quot;accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.&quot;</quote>
          <p className=" text-sm text-right">John Doe</p>
    </div>
    </>
  );
}

export default Testimonials;
