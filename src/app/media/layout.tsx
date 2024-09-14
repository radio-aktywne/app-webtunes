import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.mediaList.title,
  description: labels.pages.mediaList.description,
};

export type MediaListLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MediaListLayout({ children }: MediaListLayoutProps) {
  return children;
}
