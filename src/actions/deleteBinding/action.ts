"use server";

import { pelican } from "../../api";
import { DeleteBindingProps } from "./types";

const errorMessage = "Deleting binding failed.";

export async function deleteBinding({ id }: DeleteBindingProps) {
  try {
    const { error, response } = await pelican.DELETE("/bindings/{id}", {
      params: { path: { id } },
    });

    return { error: error || !response.ok ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
