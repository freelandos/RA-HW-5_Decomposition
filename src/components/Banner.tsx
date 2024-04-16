import { PropsWithChildren } from "react";

export default function Banner({ children }: PropsWithChildren) {
  return (
    <div className="component banner">{children}</div>
  );
}