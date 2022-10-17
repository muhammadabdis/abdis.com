import * as React from "react";

interface Props {
  title: string;
  description: React.ReactNode;
}

export default function BackgroundDescription({ title, description }: Props) {
  return (
    <div className="py-6 px-6">
      <h1 className="font-extrabold text-2xl mb-6">{title}</h1>

      <div className="text-xl">{description}</div>
    </div>
  );
}
