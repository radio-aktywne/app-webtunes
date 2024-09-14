import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { labels } from "../config/labels";

export default function IndexPage() {
  return (
    <Stack>
      <Button component={Link} href="/media">
        {labels.pages.index.buttons.media.label}
      </Button>
      <Button component={Link} href="/playlists">
        {labels.pages.index.buttons.playlists.label}
      </Button>
      <Button component={Link} href="/bindings">
        {labels.pages.index.buttons.bindings.label}
      </Button>
    </Stack>
  );
}
