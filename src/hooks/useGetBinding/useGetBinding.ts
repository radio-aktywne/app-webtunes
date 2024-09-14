import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getBinding } from "../../actions";
import { Binding, UseGetBindingProps } from "./useGetBinding.types";

export function useGetBinding({
  interval = 1000 * 5,
  ...getBindingProps
}: UseGetBindingProps) {
  const [binding, setBinding] = useState<Binding>();

  const serializedGetBindingProps = JSON.stringify(getBindingProps);

  const fetchBinding = useCallback(async () => {
    try {
      const parsedGetBindingProps = JSON.parse(serializedGetBindingProps);
      const response = await getBinding(parsedGetBindingProps);
      if (response.error !== undefined) throw new Error(response.error);
      setBinding(response.data);
    } catch (error) {
      setBinding(undefined);
    }
  }, [serializedGetBindingProps]);

  const { start, stop } = useInterval(fetchBinding, interval);

  useEffect(() => {
    fetchBinding();
  }, [fetchBinding]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { binding, fetchBinding };
}
