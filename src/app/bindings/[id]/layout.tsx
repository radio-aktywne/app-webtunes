import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

type BindingLayoutParams = Readonly<{
  id: string;
}>;

export type BindingLayoutProps = Readonly<{
  children: ReactNode;
  params: BindingLayoutParams;
}>;

export async function generateMetadata({
  params,
}: BindingLayoutProps): Promise<Metadata> {
  return {
    title: labels.pages.binding.title(params.id),
    description: labels.pages.binding.description,
  };
}

export default function BindingLayout({ children }: BindingLayoutProps) {
  return children;
}
