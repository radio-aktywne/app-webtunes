import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getPlaylist } from "../../actions";
import { Playlist, UseGetPlaylistProps } from "./useGetPlaylist.types";

export function useGetPlaylist({
  interval = 1000 * 5,
  ...getPlaylistProps
}: UseGetPlaylistProps) {
  const [playlist, setPlaylist] = useState<Playlist>();

  const serializedGetPlaylistProps = JSON.stringify(getPlaylistProps);

  const fetchPlaylist = useCallback(async () => {
    try {
      const parsedGetPlaylistProps = JSON.parse(serializedGetPlaylistProps);
      const response = await getPlaylist(parsedGetPlaylistProps);
      if (response.error !== undefined) throw new Error(response.error);
      setPlaylist(response.data);
    } catch (error) {
      setPlaylist(undefined);
    }
  }, [serializedGetPlaylistProps]);

  const { start, stop } = useInterval(fetchPlaylist, interval);

  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { playlist, fetchPlaylist };
}
