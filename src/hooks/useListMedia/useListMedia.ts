import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { listMedia } from "../../actions";
import { MediaList, UseListMediaProps } from "./useListMedia.types";

export function useListMedia({
  interval = 1000 * 5,
  ...listMediaProps
}: UseListMediaProps = {}) {
  const [media, setMedia] = useState<MediaList>();

  const serializedListMediaProps = JSON.stringify(listMediaProps);

  const fetchMedia = useCallback(async () => {
    try {
      const parsedListMediaProps = JSON.parse(serializedListMediaProps);
      const response = await listMedia(parsedListMediaProps);
      if (response.error !== undefined) throw new Error(response.error);
      setMedia(response.data);
    } catch (error) {
      setMedia(undefined);
    }
  }, [serializedListMediaProps]);

  const { start, stop } = useInterval(fetchMedia, interval);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { media, fetchMedia };
}
