"use server";

import { emitunes } from "../../api";
import { ListBindingsProps } from "./types";

const errorMessage = "Listing bindings failed.";

export async function listBindings({
  limit,
  offset,
  where,
  include,
  order,
}: ListBindingsProps = {}) {
  try {
    const { data, error } = await emitunes.GET("/bindings", {
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

    if (error) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}