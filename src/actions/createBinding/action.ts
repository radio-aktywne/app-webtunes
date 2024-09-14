"use server";

import { emitunes } from "../../api";
import { CreateBindingProps } from "./types";

const genericErrorMessage = "Creating binding failed.";
const badRequestErrorMessage = "Invalid data.";

export async function createBinding({
  id,
  playlist,
  media,
  rank,
}: CreateBindingProps) {
  try {
    const { data, error } = await emitunes.POST("/bindings", {
      body: {
        id: id,
        playlistId: playlist,
        mediaId: media,
        rank: rank,
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
