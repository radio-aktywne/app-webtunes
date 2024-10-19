"use server";

import { pelican } from "../../api";
import { ListMediaProps } from "./types";

const errorMessage = "Listing media failed.";

export async function listMedia({
  limit,
  offset,
  where,
  include,
  order,
}: ListMediaProps = {}) {
  try {
    const { data, error, response } = await pelican.GET("/media", {
      params: {
        query: {
          limit: limit,
          offset: offset,
          where: where && JSON.stringify(where),
          include: include && JSON.stringify(include),
          order: order && JSON.stringify(order),
        },
      },
    });

    if (error || !response.ok) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
