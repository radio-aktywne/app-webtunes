"use server";

import { pelican } from "../../api";
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
    const { data, error, response } = await pelican.POST("/bindings", {
      body: {
        id: id,
        playlistId: playlist,
        mediaId: media,
        rank: rank,
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
