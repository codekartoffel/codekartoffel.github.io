import Image from "next/image";
import ClickableText from "./components/atoms/ClickableText";

export default function Home() {
  return (
    <div className="p-[64px]">
      <div className="flex flex-row">
        {/* Introduction Row */}
        <div className="w-1/2 mt-auto mb-auto">
          {/* Text portion */}
          <div className="text-6xl font-thin mb-[12px]">Hello</div>
          <p className="text-base mb-[12px]">
            My name is Marcus. I am a software engineer with over four years of professional experience.<br/>
            In that time, I have learned many different technologies and gained experience in documentation skills and software architecture. <br/>
            I have been on agile development teams as well as being a solo developer when working to meet a client's needs.
          </p>
          <p className="text-base">When Im not working, you can probably find me outside on a hike, falling down a wikipedia rabbit hole, or dreaming of new things to create.</p>
        </div>
        <div className="w-1/2 mt-auto mb-auto">
          {/* Portrait */}
          <img className="mx-auto border-double border-8 rounded-md border-gray-200" width="30%" src="suit2.JPG" alt="Marcus Panozzo's portrait picture. He is a man wearing a purple tie standing outside in a garden."/>
        </div>
      </div>
      <hr className="mt-[32px] mb-[32px] border-t-2 border-gray-300 my-4" />
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="text-2xl font-bold">My Experience</div>
          <div className="flex flex-row">Please select the "<ClickableText className="font-bold"><a href="Resume_MarcusPanozzo_10_22_2025.pdf">Resume (PDF)</a></ClickableText>" button on the header bar to learn more about my experience.</div>
          
        </div>
        <div className="w-1/2">
          <div className="text-2xl font-bold">This Website's Design</div>
          <div className="flex flex-row">This website was built using React (NextJS router), Tailwind, and TypeScript with some CSS. It is running on GitHub pages.</div>
        </div>
      </div>
    </div>
  );
}
