"use server";

import { emitunes } from "../../api";
import { UpdateMediaProps } from "./types";

const genericErrorMessage = "Updating media failed.";
const badRequestErrorMessage = "Invalid data.";

export async function updateMedia({ id, update }: UpdateMediaProps) {
  try {
    const { data, error } = await emitunes.PATCH("/media/{id}", {
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
