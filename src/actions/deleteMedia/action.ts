"use server";

import { pelican } from "../../api";
import { DeleteMediaProps } from "./types";

const errorMessage = "Deleting media failed.";

export async function deleteMedia({ id }: DeleteMediaProps) {
  try {
    const { error, response } = await pelican.DELETE("/media/{id}", {
      params: { path: { id } },
    });

    return { error: error || !response.ok ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
