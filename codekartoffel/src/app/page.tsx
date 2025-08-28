import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <div>Welcome to my website.</div>
        <div>This website is currently in the design phase. View on my figma design: <a href="https://www.figma.com/design/Dx8OZghEhBOkMIkmtvu8c6/My-Website?node-id=0-1&t=KCXWnOg29n45SHKm-1">Figma</a></div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>Marcus Panozzo</div>
        <div>marcuspanozzo@gmail.com</div>
        <div>(201)-675-4523</div>
      </footer>
    </div>
  );
}
