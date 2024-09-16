"use server";

import { emitunes } from "../../api";
import { UpdateBindingProps } from "./types";

const genericErrorMessage = "Updating binding failed.";
const badRequestErrorMessage = "Invalid data.";

export async function updateBinding({ id, update }: UpdateBindingProps) {
  try {
    const { data, error, response } = await emitunes.PATCH("/bindings/{id}", {
      params: { path: { id } },
      body: {
        id: update.id,
        playlistId: update.playlist,
        mediaId: update.media,
        rank: update.rank,
      },
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
