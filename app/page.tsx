import { Footer } from "@/app/comonents/Footer";
import { Navbar } from "@/app/comonents/Navbar";
import { AboutMe } from "./comonents/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 pt-36 font-mono text-gray-800">
      <Navbar />
      <AboutMe />
      <Footer />
    </main>
  );
}
