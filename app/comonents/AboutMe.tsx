import Link from "next/link";
import { Card } from "./Card";
import { Photo } from "./Photo";

export const AboutMe = () => (
  <Card>
    <Photo />
    <h1 className="font-bold text-4xl mb-3">Hi, I&apos;m Aga Skrobot</h1>
    <span className="text-gray-500 dark:text-gray-300">
      I&apos;m based in
      <Link
        className="underline text-gray-800 dark:text-gray-200 ml-2"
        target="_blank"
        href="https://maps.app.goo.gl/iqr2pMiYveyCsZY56"
      >
        Málaga · Spain 🇪🇸
      </Link>
    </span>
    <p className="mt-5">
      I am a Software Engineer with over 6 years of expertise in React.js and
      more than 2 years of dedicated experience in the blockchain space.
    </p>
    <p className="mt-5">
      I am highly motivated and possess a strong passion for exploring new
      Blockchain technologies. I am constantly motivated by the idea of learning
      more, and thrive on the requirement of an ever-adapting mindset.
    </p>
  </Card>
);
