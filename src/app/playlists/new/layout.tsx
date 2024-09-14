import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.newPlaylist.title,
  description: labels.pages.newPlaylist.description,
};

export type NewPlaylistLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function NewPlaylistLayout({
  children,
}: NewPlaylistLayoutProps) {
  return children;
}
