import Nav from "../components/Nav";
import Logo from "../assets/Logo.svg";
import MainImage from "../assets/main_image.webp";

function Home() {
  return (
    <>
      <img src={Logo} alt="로고" className="mt-10 mb-3 mx-auto" />

      <Nav />
      <img src={MainImage} alt="메인 이미지" className=" mx-auto" />
    </>
  );
}

export default Home;
