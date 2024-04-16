import { PropsWithChildren } from "react";

export default function Informer({ children }: PropsWithChildren) {
  return (
    <div className="component informer">{children}</div>
  );
}