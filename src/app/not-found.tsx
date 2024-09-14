import { Title } from "@mantine/core";
import { Metadata } from "next";
import { labels } from "../config/labels";

export const metadata: Metadata = {
  title: labels.pages.notFound.title,
  description: labels.pages.notFound.description,
};

export default function NotFound() {
  return <Title>{labels.pages.notFound.text}</Title>;
}
