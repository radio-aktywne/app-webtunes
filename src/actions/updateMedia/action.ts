"use server";

import { pelican } from "../../api";
import { UpdateMediaProps } from "./types";

const genericErrorMessage = "Updating media failed.";
const badRequestErrorMessage = "Invalid data.";

export async function updateMedia({ id, update }: UpdateMediaProps) {
  try {
    const { data, error, response } = await pelican.PATCH("/media/{id}", {
      params: { path: { id } },
      body: {
        id: update.id,
        name: update.name,
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
