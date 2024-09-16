import { Button, FileButton } from "@mantine/core";
import { useCallback, useState } from "react";
import { useHeadMediaContent } from "../../../../hooks";
import { UploadButtonProps } from "./UploadButton.types";

export function UploadButton({ media, label, onUpload }: UploadButtonProps) {
  const [uploading, setUploading] = useState(false);

  const { fetchHeaders } = useHeadMediaContent({ id: media.id });

  const handleUpload = useCallback(
    async (payload: File | null) => {
      setUploading(true);
      try {
        await onUpload?.(payload);
      } finally {
        setUploading(false);
        fetchHeaders();
      }
    },
    [onUpload, fetchHeaders],
  );

  return (
    <FileButton onChange={handleUpload} disabled={uploading}>
      {(props) => (
        <Button loading={uploading} {...props}>
          {label}
        </Button>
      )}
    </FileButton>
  );
}
