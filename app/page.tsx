import { Footer } from "@/comonents/Footer";
import { Navbar } from "@/comonents/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-gray-700">
      <Navbar />

      <Footer />
    </main>
  );
}
