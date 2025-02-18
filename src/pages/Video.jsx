function Video() {
    return (
      <div className="hero relative flex justify-center items-center w-full h-[50vh] my-16 overflow-hidden">

        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="images/awesome-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white color text-center bg-black/40">
          <div className="color w-full p-6">

          <h1 className="text-3xl font-bold">Super Awesome Video Here</h1>
          <p className="text-lg mt-2">It &apos;s All You Need</p>
          <button className="mt-6 bg-black py-3 px-6 text-[20px] text-white cursor-pointer hover:bg-gray-800 transition">
            SEE MORE
          </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Video;
  