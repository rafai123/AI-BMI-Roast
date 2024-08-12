import Image from "next/image";
import { Header } from "./components/Header";
import { PromptBox } from "./components/PromptBox";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-10 py-10 md:py-5 md:px-24 bg-[#0F172A]">
      <Header />

      <PromptBox />

      <Footer />
    </main>
  );
}
