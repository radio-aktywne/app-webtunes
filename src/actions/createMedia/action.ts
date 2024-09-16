"use server";

import { emitunes } from "../../api";
import { CreateMediaProps } from "./types";

const genericErrorMessage = "Creating media failed.";
const badRequestErrorMessage = "Invalid data.";

export async function createMedia({ id, name }: CreateMediaProps) {
  try {
    const { data, error, response } = await emitunes.POST("/media", {
      body: { id, name },
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
