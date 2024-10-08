"use server";

import { emitunes } from "../../api";
import { DeleteMediaProps } from "./types";

const errorMessage = "Deleting media failed.";

export async function deleteMedia({ id }: DeleteMediaProps) {
  try {
    const { error, response } = await emitunes.DELETE("/media/{id}", {
      params: { path: { id } },
    });

    return { error: error || !response.ok ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
