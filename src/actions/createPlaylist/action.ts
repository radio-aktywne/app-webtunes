"use server";

import { pelican } from "../../api";
import { CreatePlaylistProps } from "./types";

const genericErrorMessage = "Creating playlist failed.";
const badRequestErrorMessage = "Invalid data.";

export async function createPlaylist({ id, name }: CreatePlaylistProps) {
  try {
    const { data, error, response } = await pelican.POST("/playlists", {
      body: { id, name },
    });

    if (error || !response.ok) {
      if (response.status === 400)
        return { data: undefined, error: badRequestErrorMessage };

      return { data: undefined, error: genericErrorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: genericErrorMessage };
  }
}
