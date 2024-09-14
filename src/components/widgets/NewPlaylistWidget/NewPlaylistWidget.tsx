"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { CreatePlaylistProps, createPlaylist } from "../../../actions";
import { labels } from "../../../config/labels";
import { useToasts } from "../../../hooks";
import { NewPlaylistWidgetProps } from "./NewPlaylistWidget.types";
import { PlaylistForm, PlaylistFormData } from "./PlaylistForm";

export function NewPlaylistWidget({}: NewPlaylistWidgetProps) {
  const router = useRouter();

  const { success, error } = useToasts();

  const handleNormalizedCreate = useCallback(
    async (data: CreatePlaylistProps) => {
      const { data: playlist, error: message } = await createPlaylist(data);

      if (message !== undefined) {
        error(labels.widgets.newPlaylist.toasts.create.error);
        return message;
      }

      success(labels.widgets.newPlaylist.toasts.create.success(playlist.id));
      router.push(`/playlists/${playlist.id}`);
    },
    [error, success, router],
  );

  const handleCreate = useCallback(
    async (data: PlaylistFormData) => {
      if (data.name === undefined || data.name === "")
        return {
          name: labels.widgets.newPlaylist.form.fields.name.errors.missing,
        };

      const message = await handleNormalizedCreate({ name: data.name });

      return message ? { name: message } : null;
    },
    [handleNormalizedCreate],
  );

  return (
    <PlaylistForm
      labels={labels.widgets.newPlaylist.form}
      onCreate={handleCreate}
    />
  );
}
