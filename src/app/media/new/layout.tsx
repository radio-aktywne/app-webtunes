import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.newMedia.title,
  description: labels.pages.newMedia.description,
};

export type NewMediaLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function NewMediaLayout({ children }: NewMediaLayoutProps) {
  return children;
}
