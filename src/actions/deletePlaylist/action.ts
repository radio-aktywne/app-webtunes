"use server";

import { emitunes } from "../../api";
import { DeletePlaylistProps } from "./types";

const errorMessage = "Deleting playlist failed.";

export async function deletePlaylist({ id }: DeletePlaylistProps) {
  try {
    const { error } = await emitunes.DELETE("/playlists/{id}", {
      params: { path: { id } },
    });

    return { error: error ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
