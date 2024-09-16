"use client";

import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { UpdateMediaProps, deleteMedia, updateMedia } from "../../../actions";
import { labels } from "../../../config/labels";
import { useGetMedia, useToasts } from "../../../hooks";
import { DownloadButton } from "./DownloadButton";
import { MediaForm, MediaFormData } from "./MediaForm";
import { MediaWidgetProps } from "./MediaWidget.types";
import { UploadButton } from "./UploadButton";

export function MediaWidget({ media: prefetchedMedia }: MediaWidgetProps) {
  const router = useRouter();

  const { media: currentMedia, fetchMedia } = useGetMedia({
    id: prefetchedMedia.id,
    include: { bindings: prefetchedMedia.bindings != null },
  });
  const media = currentMedia ?? prefetchedMedia;

  const { success, error } = useToasts();

  const handleUpdate = useCallback(
    async (update: UpdateMediaProps["update"]) => {
      const { data: updatedMedia, error: message } = await updateMedia({
        id: media.id,
        update,
      });

      if (message !== undefined) {
        error(labels.widgets.media.toasts.update.error(media.id));
        return message;
      }

      success(labels.widgets.media.toasts.update.success(media.id));

      await fetchMedia();

      if (updatedMedia.id === media.id) router.refresh();
      else router.push(`/media/${updatedMedia.id}`);
    },
    [media.id, error, success, fetchMedia, router],
  );

  const handleSave = useCallback(
    async (data: MediaFormData) => {
      if (data.name === undefined || data.name === "")
        return { name: labels.widgets.media.form.fields.name.errors.missing };

      const message = await handleUpdate({ name: data.name });

      return message ? { name: message } : null;
    },
    [handleUpdate],
  );

  const handleDelete = useCallback(async () => {
    const { error: message } = await deleteMedia({ id: media.id });
    if (message) error(message);
    else {
      success(labels.widgets.media.toasts.delete.success(media.id));
      router.push("/media");
    }
  }, [media.id, error, success, router]);

  const handleUpload = useCallback(
    async (payload: File | null) => {
      if (payload === null) error(labels.widgets.media.toasts.upload.noFile);

      const response = await fetch(`/api/media/${media.id}`, {
        method: "PUT",
        body: payload,
      });

      if (response.ok)
        success(labels.widgets.media.toasts.upload.success(media.id));
      else error(labels.widgets.media.toasts.upload.error(media.id));
    },
    [error, media.id, success],
  );

  return (
    <Stack>
      <MediaForm
        values={{ name: media.name }}
        labels={labels.widgets.media.form}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <UploadButton
        media={media}
        label={labels.widgets.media.buttons.upload.label}
        onUpload={handleUpload}
      />
      <DownloadButton
        media={media}
        label={labels.widgets.media.buttons.download.label}
      />
    </Stack>
  );
}
