import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

export const Link = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <a href={href} target="_blank" className="flex items-center ">
      {children}
    </a>
  );
};
