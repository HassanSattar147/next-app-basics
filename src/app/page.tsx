import Image from "next/image";
// import asdf from "../../public/next.svg";
import Button from "@/components/elements/Button";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[50px] pt-24">
      <h1 className="text-[50px]">Hello World</h1>
      {/* <Image src={asdf} alt="" /> */}
      <Button text="First Page" to="/first-page" />
      <Button text="Blogs" to="/blogs" />
      <Download />
    </main>
  );
}
