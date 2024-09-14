import { Title } from "@mantine/core";
import { labels } from "../../../config/labels";

export default function PlaylistNotFound() {
  return <Title>{labels.pages.playlistNotFound.text}</Title>;
}
