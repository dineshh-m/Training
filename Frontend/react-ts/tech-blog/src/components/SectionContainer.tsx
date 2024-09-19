import { PropsWithChildren } from "react";

export default function SectionContainer({ children }: PropsWithChildren) {
  return <section className="px-72 py-20">{children}</section>;
}
