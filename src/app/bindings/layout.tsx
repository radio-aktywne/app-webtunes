import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.bindingList.title,
  description: labels.pages.bindingList.description,
};

export type BindingListLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function BindingListLayout({
  children,
}: BindingListLayoutProps) {
  return children;
}
