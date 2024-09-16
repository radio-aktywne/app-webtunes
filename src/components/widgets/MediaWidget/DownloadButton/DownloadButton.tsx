import { Button } from "@mantine/core";
import { useHeadMediaContent } from "../../../../hooks";
import { DownloadButtonProps } from "./DownloadButton.types";

export function DownloadButton({ media, label }: DownloadButtonProps) {
  const { headers } = useHeadMediaContent({ id: media.id });

  const exists = headers !== undefined;

  return (
    <Button
      component="a"
      href={`/api/media/${media.id}`}
      download={media.name}
      data-disabled={!exists}
      onClick={(event) => exists || event.preventDefault()}
    >
      {label}
    </Button>
  );
}
