"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { CreateBindingProps, createBinding } from "../../../actions";
import { labels } from "../../../config/labels";
import { useToasts } from "../../../hooks";
import { BindingForm, BindingFormData } from "./BindingForm";
import { NewBindingWidgetProps } from "./NewBindingWidget.types";

export function NewBindingWidget({}: NewBindingWidgetProps) {
  const router = useRouter();

  const { success, error } = useToasts();

  const handleNormalizedCreate = useCallback(
    async (data: CreateBindingProps) => {
      const { data: binding, error: message } = await createBinding(data);

      if (message !== undefined) {
        error(labels.widgets.newBinding.toasts.create.error);
        return message;
      }

      success(labels.widgets.newBinding.toasts.create.success(binding.id));
      router.push(`/bindings/${binding.id}`);
    },
    [error, success, router],
  );

  const handleCreate = useCallback(
    async (data: BindingFormData) => {
      if (data.playlist === undefined || data.playlist === "")
        return {
          playlist:
            labels.widgets.newBinding.form.fields.playlist.errors.missing,
        };

      if (data.media === undefined || data.media === "")
        return {
          media: labels.widgets.newBinding.form.fields.media.errors.missing,
        };

      if (data.rank === undefined || data.rank === "")
        return {
          rank: labels.widgets.newBinding.form.fields.rank.errors.missing,
        };

      const message = await handleNormalizedCreate({
        playlist: data.playlist,
        media: data.media,
        rank: data.rank,
      });

      return message
        ? { playlist: message, media: message, rank: message }
        : null;
    },
    [handleNormalizedCreate],
  );

  return (
    <BindingForm
      labels={labels.widgets.newBinding.form}
      onCreate={handleCreate}
    />
  );
}
