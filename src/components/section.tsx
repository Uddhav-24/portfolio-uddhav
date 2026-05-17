import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mt-10 rounded-3xl border border-zinc-400 bg-white p-10"
    >
      <h2 className="mb-8 text-3xl font-bold">
        {title}
      </h2>

      {children}
    </section>
  );
}