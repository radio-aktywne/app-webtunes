import { Group, Title } from "@mantine/core";
import { BindingTileProps } from "./BindingTile.types";

export function BindingTile({ binding, labels }: BindingTileProps) {
  return (
    <Group>
      <Title>{labels.text(binding.id)}</Title>
    </Group>
  );
}
