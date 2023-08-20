import Nav from "../components/Nav";
import Logo from "../assets/Logo.svg";
import MainImage from "../assets/main_image.webp";
import Contents from "./Contents";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <img src={Logo} alt="로고" className="mt-10 mb-3 mx-auto" />

      <Nav />
      <img src={MainImage} alt="메인 이미지" className=" mx-auto" />
      <Contents />
      <Footer />
    </>
  );
}

export default Home;
