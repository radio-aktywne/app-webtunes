"use server";

import { pelican } from "../../api";
import { GetBindingProps } from "./types";

const errorMessage = "Getting binding failed.";

export async function getBinding({ id, include }: GetBindingProps) {
  try {
    const { data, error, response } = await pelican.GET("/bindings/{id}", {
      params: {
        path: { id },
        query: { include: include && JSON.stringify(include) },
      },
    });

    if (error || !response.ok) {
      if (response.status === 404) return { data: undefined, error: undefined };

      return { data: undefined, error: errorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
