import Nav from "../components/Nav";
import Logo from "../assets/Logo.svg";
import MainImage from "../assets/main_image.webp";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="flex  flex-col">
      <img src={Logo} alt="로고" className="mt-10 mb-3 mx-auto" />
      <Nav />
      <img src={MainImage} alt="메인 이미지" className=" mx-auto mb-2" />
      <div className="w-[1000px] mx-auto h-[650px] border-[1px] border-neutral-400 rounded-md flex flex-col items-center justify-center bg-yellow-400 gap-1">
        <h1 className="text-[36px] font-bold text-[#5E471A] mb-2">Contact</h1>
        <input
          type="text"
          placeholder="Name"
          className=" w-[300px] px-4 py-4 box-content   focus:outline-[#F3901B] focus:border-[1px]"
        />
        <input
          type="text"
          placeholder="E-mail"
          className=" w-[300px] px-4 py-4 box-content   focus:outline-[#F3901B] focus:border-[1px]"
        />
        <input
          type="text"
          placeholder="Phone"
          className=" w-[300px] px-4 py-4 box-content   focus:outline-[#F3901B] focus:border-[1px]"
        />
        <div className="flex flex-col">
          <textarea
            name="message"
            id="message"
            placeholder="메세지를 입력하세요."
            cols="30"
            rows="10"
            className=" w-[300px] px-4 py-4 box-content   focus:outline-[#F3901B] focus:border-[1px] "
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-[#5d3f1a] text-lg font-semibold text-white"
          >
            보내기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
