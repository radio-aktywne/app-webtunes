"use server";

import { emitunes } from "../../api";
import { GetMediaProps } from "./types";

const errorMessage = "Getting media failed.";

export async function getMedia({ id, include }: GetMediaProps) {
  try {
    const { data, error } = await emitunes.GET("/media/{id}", {
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
