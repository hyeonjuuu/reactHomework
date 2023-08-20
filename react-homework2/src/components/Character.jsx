import ViewMore from "./ViewMore";

function Character({ character, position, text, title }) {
  let className = "";
  if (position === "left") {
    className = "justify-start";
  } else {
    className = "justify-end";
  }

  return (
    <div
      className={` bg-yellow-400 h-[360px] overflow-hidden flex ${className} border-[1px] border-neutral-400 rounded-md`}
    >
      <img
        src={character}
        alt="캐릭터 이미지"
        className="w-[360px] h-[360px] object-cover "
      />
      <div
        className={` mx-auto my-auto flex flex-col items-center ${
          position === "left" ? "order-last" : "order-first"
        }`}
      >
        <h2 className="text-[36px] text-[#5E471A] font-bold">{title}</h2>
        <p className="mb-2">{text}</p>
        <ViewMore />
      </div>
    </div>
  );
}

export default Character;
