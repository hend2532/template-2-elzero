import { FaFacebook, FaHome, FaLinkedin, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <div className="hero1 text-white p-16 h-auto flex flex-col justify-center items-center  text-center gap-10 bg-cover bg-no-repeat " style={{backgroundImage:"url(/images/subscribe.jpg"}}>
    <img src="/images/logo.png" alt="logo"/>
    <h1 className="uppercase border-b p-4 text-[25px]">We Are Social</h1>
    <div className="flex gap-8 cursor-pointer">
        <FaFacebook/>
        <FaTwitter/>
        <FaHome/>
        <FaLinkedin/>
    </div>
    <p className="font-medium ">
    © 2021 Kasper All Right Reserved by <span className="text-[#19c8fa]">Hend Hany</span>
    </p>
</div>
  )
}

export default Footer
