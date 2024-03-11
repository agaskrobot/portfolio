import { PropsWithChildren } from "react";
import NextLink from "next/link";

type Props = {
  href: string;
};

export const Link = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <NextLink
      className="p-3 mx-2 cursor:pointer hover:bg-slate-50 rounded-xl"
      href={href}
    >
      {children}
    </NextLink>
  );
};
