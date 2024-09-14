import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.newBinding.title,
  description: labels.pages.newBinding.description,
};

export type NewBindingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function NewBindingLayout({ children }: NewBindingLayoutProps) {
  return children;
}
