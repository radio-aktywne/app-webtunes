"use server";

import { emitunes } from "../../api";
import { HeadMediaContentProps } from "./types";

const errorMessage = "Getting media content headers failed.";

export async function headMediaContent({ id }: HeadMediaContentProps) {
  try {
    const { error, response } = await emitunes.HEAD("/media/{id}/content", {
      params: {
        path: { id },
      },
      parseAs: "stream",
    });

    const data = Object.fromEntries(response.headers.entries());

    if (error || !response.ok) {
      if (response.status === 404) return { data: undefined, error: undefined };

      return { data: undefined, error: errorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
