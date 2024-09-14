"use server";

import { emitunes } from "../../api";
import { CreatePlaylistProps } from "./types";

const genericErrorMessage = "Creating playlist failed.";
const badRequestErrorMessage = "Invalid data.";

export async function createPlaylist({ id, name }: CreatePlaylistProps) {
  try {
    const { data, error } = await emitunes.POST("/playlists", {
      body: { id, name },
    });

    if (error) {
      if (error.status_code === 400)
        return { data: undefined, error: badRequestErrorMessage };

      return { data: undefined, error: genericErrorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: genericErrorMessage };
  }
}
