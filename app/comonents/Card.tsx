import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card rounded-2xl font-sans p-4 md:p-16 min-w-64">
      {children}
    </div>
  );
};
