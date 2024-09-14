"use server";

import { emitunes } from "../../api";
import { DeleteBindingProps } from "./types";

const errorMessage = "Deleting binding failed.";

export async function deleteBinding({ id }: DeleteBindingProps) {
  try {
    const { error } = await emitunes.DELETE("/bindings/{id}", {
      params: { path: { id } },
    });

    return { error: error ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
