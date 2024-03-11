import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-lg">
        <nav className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl">
          <a href="/" className="flex items-center">
            <Image
              className="relative dark:invert rounded-full"
              src="/logo.png"
              alt="Next.js Logo"
              width={64}
              height={64}
              priority
            />
            <p className="hidden lg:flex ml-4">Aga Skrobot</p>
          </a>
          <FiLinkedin />
        </nav>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        rfgre
      </div>
    </main>
  );
}
