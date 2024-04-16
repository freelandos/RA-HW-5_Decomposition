import { PropsWithChildren } from "react";

export default function Widget({ children }: PropsWithChildren) {
  return (
    <div className="component widget">{children}</div>
  )
}
