import { Group, Title } from "@mantine/core";
import { MediaTileProps } from "./MediaTile.types";

export function MediaTile({ media, labels }: MediaTileProps) {
  return (
    <Group>
      <Title>{labels.text(media.id)}</Title>
    </Group>
  );
}
