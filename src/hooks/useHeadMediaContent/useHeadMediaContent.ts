import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { headMediaContent } from "../../actions";
import { Headers, UseHeadMediaContentProps } from "./useHeadMediaContent.types";

export function useHeadMediaContent({
  interval = 1000 * 5,
  ...headMediaContentProps
}: UseHeadMediaContentProps) {
  const [headers, setHeaders] = useState<Headers>();

  const serializedHeadMediaContentProps = JSON.stringify(headMediaContentProps);

  const fetchHeaders = useCallback(async () => {
    try {
      const parsedHeadMediaContentProps = JSON.parse(
        serializedHeadMediaContentProps,
      );
      const response = await headMediaContent(parsedHeadMediaContentProps);
      if (response.error !== undefined) throw new Error(response.error);
      setHeaders(response.data);
    } catch (error) {
      setHeaders(undefined);
    }
  }, [serializedHeadMediaContentProps]);

  const { start, stop } = useInterval(fetchHeaders, interval);

  useEffect(() => {
    fetchHeaders();
  }, [fetchHeaders]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { headers, fetchHeaders };
}
