"use server";

import { emitunes } from "../../api";
import { UpdatePlaylistProps } from "./types";

const genericErrorMessage = "Updating playlist failed.";
const badRequestErrorMessage = "Invalid data.";

export async function updatePlaylist({ id, update }: UpdatePlaylistProps) {
  try {
    const { data, error } = await emitunes.PATCH("/playlists/{id}", {
      params: { path: { id } },
      body: {
        id: update.id,
        name: update.name,
      },
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
