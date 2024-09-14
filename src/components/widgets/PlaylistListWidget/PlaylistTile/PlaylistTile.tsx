import { Group, Title } from "@mantine/core";
import { PlaylistTileProps } from "./PlaylistTile.types";

export function PlaylistTile({ playlist, labels }: PlaylistTileProps) {
  return (
    <Group>
      <Title>{labels.text(playlist.id)}</Title>
    </Group>
  );
}
