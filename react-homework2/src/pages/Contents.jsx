import Character from "../components/Character";
import choonsik from "./../assets/choonsik.jpg";
import ryan from "../assets/Ryan.jpg";
import apeach from "./../assets/apeach.jpg";
import tube from "./../assets/tube.jpg";

function Contents() {
  return (
    <div className="flex flex-col gap-2 py-2 w-[1000px] mx-auto">
      <Character
        character={choonsik}
        position="left"
        text="어느 날 라이언이 길에서 데려온 '길고양이' 춘식이"
        title="CHOONSIK"
      />
      <Character
        character={ryan}
        position="right"
        text="갈기가 없는 것이 콤플렉스인 수사자 라이언"
        title="RYAN"
      />
      <Character
        character={apeach}
        position="left"
        text="복숭아 나무에서 탈출한 악동 복숭아"
        title="APEACH"
      />
      <Character
        character={tube}
        position="right"
        text="겁 많고 마음 약한 오리 튜브"
        title="TUBE"
      />
    </div>
  );
}

export default Contents;
