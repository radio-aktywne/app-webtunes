import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

type PlaylistLayoutParams = Readonly<{
  id: string;
}>;

export type PlaylistLayoutProps = Readonly<{
  children: ReactNode;
  params: PlaylistLayoutParams;
}>;

export async function generateMetadata({
  params,
}: PlaylistLayoutProps): Promise<Metadata> {
  return {
    title: labels.pages.playlist.title(params.id),
    description: labels.pages.playlist.description,
  };
}

export default function PlaylistLayout({ children }: PlaylistLayoutProps) {
  return children;
}
