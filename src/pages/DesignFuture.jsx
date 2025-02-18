import { FaDesktop } from "react-icons/fa";

function DesignFuture() {
  const features = [
    "Responsive Design",
    "Modern And Clean Design",
    "Lean Code",
    "Browser Friendly",
  ];

  return (
    <div
      style={{ backgroundImage: "url(/images/design-features.jpg)" }}
      className="bg-cover bg-no-repeat flex justify-between overflow-hidden relative my-4 h-[90vh]"
    >
      <img
        src="/images/mobile.png"
        alt="Mobile Design"
        className="absolute bottom-[-10vh] lg:left-40"
      />

      <div className="color ml-auto md:w-1/2 lg:pl-12 md:mt-[20vh] mt-[30vh] py-16 px-10 text-white box-border h-fit">
        <h1 className="lg:text-[35px] text-[25px] font-medium mb-6">
          Our Design Comes With...
        </h1>

        <div className="flex flex-col gap-6 text-[17px] font-medium">
          {features.map((feature, index) => (
            <p key={index} className="flex items-center">
              <FaDesktop />
              <span className="ml-4">{feature}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignFuture;
