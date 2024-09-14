import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getMedia } from "../../actions";
import { Media, UseGetMediaProps } from "./useGetMedia.types";

export function useGetMedia({
  interval = 1000 * 5,
  ...getMediaProps
}: UseGetMediaProps) {
  const [media, setMedia] = useState<Media>();

  const serializedGetMediaProps = JSON.stringify(getMediaProps);

  const fetchMedia = useCallback(async () => {
    try {
      const parsedGetMediaProps = JSON.parse(serializedGetMediaProps);
      const response = await getMedia(parsedGetMediaProps);
      if (response.error !== undefined) throw new Error(response.error);
      setMedia(response.data);
    } catch (error) {
      setMedia(undefined);
    }
  }, [serializedGetMediaProps]);

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
