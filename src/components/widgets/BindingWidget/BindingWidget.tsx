"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  UpdateBindingProps,
  deleteBinding,
  updateBinding,
} from "../../../actions";
import { labels } from "../../../config/labels";
import { useGetBinding, useToasts } from "../../../hooks";
import { BindingForm, BindingFormData } from "./BindingForm";
import { BindingWidgetProps } from "./BindingWidget.types";

export function BindingWidget({
  binding: prefetchedBinding,
}: BindingWidgetProps) {
  const router = useRouter();

  const { binding: currentBinding, fetchBinding } = useGetBinding({
    id: prefetchedBinding.id,
    include: {
      playlist: prefetchedBinding.playlist != null,
      media: prefetchedBinding.media != null,
    },
  });
  const binding = currentBinding ?? prefetchedBinding;

  const { success, error } = useToasts();

  const handleUpdate = useCallback(
    async (update: UpdateBindingProps["update"]) => {
      const { data: updatedBinding, error: message } = await updateBinding({
        id: binding.id,
        update,
      });

      if (message !== undefined) {
        error(labels.widgets.binding.toasts.update.error(binding.id));
        return message;
      }

      success(labels.widgets.binding.toasts.update.success(binding.id));

      await fetchBinding();

      if (updatedBinding.id === binding.id) router.refresh();
      else router.push(`/bindings/${updatedBinding.id}`);
    },
    [binding.id, error, success, fetchBinding, router],
  );

  const handleSave = useCallback(
    async (data: BindingFormData) => {
      if (data.playlist === undefined || data.playlist === "")
        return {
          playlist: labels.widgets.binding.form.fields.playlist.errors.missing,
        };

      if (data.media === undefined || data.media === "")
        return {
          media: labels.widgets.binding.form.fields.media.errors.missing,
        };

      if (data.rank === undefined || data.rank === "")
        return {
          rank: labels.widgets.binding.form.fields.rank.errors.missing,
        };

      const message = await handleUpdate({
        playlist: data.playlist,
        media: data.media,
        rank: data.rank,
      });

      return message
        ? { playlist: message, media: message, rank: message }
        : null;
    },
    [handleUpdate],
  );

  const handleDelete = useCallback(async () => {
    const { error: message } = await deleteBinding({ id: binding.id });
    if (message) error(message);
    else {
      success(labels.widgets.binding.toasts.delete.success(binding.id));
      router.push("/bindings");
    }
  }, [binding.id, error, success, router]);

  return (
    <BindingForm
      values={{
        playlist: binding.playlistId,
        media: binding.mediaId,
        rank: binding.rank,
      }}
      labels={labels.widgets.binding.form}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
}
