import React from "react";
import { Callout } from "./Callout";
import { FlowDiagram } from "./FlowDiagram";
import { ManualSteps } from "./ManualSteps";
import { DescriptiveFlow } from "./DescriptiveFlow";
import { ModuleGrid } from "./ModuleGrid";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createHeading(level: number) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return function Heading({ children }: { children: React.ReactNode }) {
    const text = typeof children === "string" ? children : "";
    const id = slugify(text);
    return (
      <Tag id={id}>
        <a href={`#${id}`} className="no-underline hover:underline">
          {children}
        </a>
      </Tag>
    );
  };
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  Callout,
  FlowDiagram,
  ManualSteps,
  DescriptiveFlow,
  ModuleGrid,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-4">
      <table {...props} />
    </div>
  ),
};
