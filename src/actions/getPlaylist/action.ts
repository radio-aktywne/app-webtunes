"use server";

import { emitunes } from "../../api";
import { GetPlaylistProps } from "./types";

const errorMessage = "Getting playlist failed.";

export async function getPlaylist({ id, include }: GetPlaylistProps) {
  try {
    const { data, error } = await emitunes.GET("/playlists/{id}", {
      params: {
        path: { id },
        query: { include: include && JSON.stringify(include) },
      },
    });

    if (error) {
      if (error.status_code === 404)
        return { data: undefined, error: undefined };

      return { data: undefined, error: errorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
