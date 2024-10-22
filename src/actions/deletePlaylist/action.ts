"use server";

import { pelican } from "../../api";
import { DeletePlaylistProps } from "./types";

const errorMessage = "Deleting playlist failed.";

export async function deletePlaylist({ id }: DeletePlaylistProps) {
  try {
    const { error, response } = await pelican.DELETE("/playlists/{id}", {
      params: { path: { id } },
    });

    return { error: error || !response.ok ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
