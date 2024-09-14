import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { listBindings } from "../../actions";
import { BindingList, UseListBindingsProps } from "./useListBindings.types";

export function useListBindings({
  interval = 1000 * 5,
  ...listBindingsProps
}: UseListBindingsProps = {}) {
  const [bindings, setBindings] = useState<BindingList>();

  const serializedListBindingsProps = JSON.stringify(listBindingsProps);

  const fetchBindings = useCallback(async () => {
    try {
      const parsedListBindingsProps = JSON.parse(serializedListBindingsProps);
      const response = await listBindings(parsedListBindingsProps);
      if (response.error !== undefined) throw new Error(response.error);
      setBindings(response.data);
    } catch (error) {
      setBindings(undefined);
    }
  }, [serializedListBindingsProps]);

  const { start, stop } = useInterval(fetchBindings, interval);

  useEffect(() => {
    fetchBindings();
  }, [fetchBindings]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { bindings, fetchBindings };
}
