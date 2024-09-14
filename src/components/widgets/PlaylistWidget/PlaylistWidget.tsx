"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  UpdatePlaylistProps,
  deletePlaylist,
  updatePlaylist,
} from "../../../actions";
import { labels } from "../../../config/labels";
import { useGetPlaylist, useToasts } from "../../../hooks";
import { PlaylistForm, PlaylistFormData } from "./PlaylistForm";
import { PlaylistWidgetProps } from "./PlaylistWidget.types";

export function PlaylistWidget({
  playlist: prefetchedPlaylist,
}: PlaylistWidgetProps) {
  const router = useRouter();

  const { playlist: currentPlaylist, fetchPlaylist } = useGetPlaylist({
    id: prefetchedPlaylist.id,
    include: { bindings: prefetchedPlaylist.bindings != null },
  });
  const playlist = currentPlaylist ?? prefetchedPlaylist;

  const { success, error } = useToasts();

  const handleUpdate = useCallback(
    async (update: UpdatePlaylistProps["update"]) => {
      const { data: updatedPlaylist, error: message } = await updatePlaylist({
        id: playlist.id,
        update,
      });

      if (message !== undefined) {
        error(labels.widgets.playlist.toasts.update.error(playlist.id));
        return message;
      }

      success(labels.widgets.playlist.toasts.update.success(playlist.id));

      await fetchPlaylist();

      if (updatedPlaylist.id === playlist.id) router.refresh();
      else router.push(`/playlists/${updatedPlaylist.id}`);
    },
    [playlist.id, error, success, fetchPlaylist, router],
  );

  const handleSave = useCallback(
    async (data: PlaylistFormData) => {
      if (data.name === undefined || data.name === "")
        return {
          name: labels.widgets.playlist.form.fields.name.errors.missing,
        };

      const message = await handleUpdate({ name: data.name });

      return message ? { name: message } : null;
    },
    [handleUpdate],
  );

  const handleDelete = useCallback(async () => {
    const { error: message } = await deletePlaylist({ id: playlist.id });
    if (message) error(message);
    else {
      success(labels.widgets.playlist.toasts.delete.success(playlist.id));
      router.push("/playlists");
    }
  }, [playlist.id, error, success, router]);

  return (
    <PlaylistForm
      values={{ name: playlist.name }}
      labels={labels.widgets.playlist.form}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
}
