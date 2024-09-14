"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { CreateMediaProps, createMedia } from "../../../actions";
import { labels } from "../../../config/labels";
import { useToasts } from "../../../hooks";
import { MediaForm, MediaFormData } from "./MediaForm";
import { NewMediaWidgetProps } from "./NewMediaWidget.types";

export function NewMediaWidget({}: NewMediaWidgetProps) {
  const router = useRouter();

  const { success, error } = useToasts();

  const handleNormalizedCreate = useCallback(
    async (data: CreateMediaProps) => {
      const { data: media, error: message } = await createMedia(data);

      if (message !== undefined) {
        error(labels.widgets.newMedia.toasts.create.error);
        return message;
      }

      success(labels.widgets.newMedia.toasts.create.success(media.id));
      router.push(`/media/${media.id}`);
    },
    [error, success, router],
  );

  const handleCreate = useCallback(
    async (data: MediaFormData) => {
      if (data.name === undefined || data.name === "")
        return {
          name: labels.widgets.newMedia.form.fields.name.errors.missing,
        };

      const message = await handleNormalizedCreate({ name: data.name });

      return message ? { name: message } : null;
    },
    [handleNormalizedCreate],
  );

  return (
    <MediaForm labels={labels.widgets.newMedia.form} onCreate={handleCreate} />
  );
}
