import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.playlistList.title,
  description: labels.pages.playlistList.description,
};

export type PlaylistListLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PlaylistListLayout({
  children,
}: PlaylistListLayoutProps) {
  return children;
}
