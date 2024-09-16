"use server";

import { emitunes } from "../../api";
import { ListPlaylistsProps } from "./types";

const errorMessage = "Listing playlists failed.";

export async function listPlaylists({
  limit,
  offset,
  where,
  include,
  order,
}: ListPlaylistsProps = {}) {
  try {
    const { data, error, response } = await emitunes.GET("/playlists", {
      params: {
        query: {
          limit: limit,
          offset: offset,
          where: where && JSON.stringify(where),
          include: include && JSON.stringify(include),
          order: order && JSON.stringify(order),
        },
      },
    });

    if (error || !response.ok) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
