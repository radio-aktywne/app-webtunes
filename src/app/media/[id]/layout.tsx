import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

type MediaLayoutParams = Readonly<{
  id: string;
}>;

export type MediaLayoutProps = Readonly<{
  children: ReactNode;
  params: MediaLayoutParams;
}>;

export async function generateMetadata({
  params,
}: MediaLayoutProps): Promise<Metadata> {
  return {
    title: labels.pages.media.title(params.id),
    description: labels.pages.media.description,
  };
}

export default function MediaLayout({ children }: MediaLayoutProps) {
  return children;
}
