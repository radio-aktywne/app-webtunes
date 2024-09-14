import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { listPlaylists } from "../../actions";
import { PlaylistList, UseListPlaylistsProps } from "./useListPlaylists.types";

export function useListPlaylists({
  interval = 1000 * 5,
  ...listPlaylistsProps
}: UseListPlaylistsProps = {}) {
  const [playlists, setPlaylists] = useState<PlaylistList>();

  const serializedListPlaylistsProps = JSON.stringify(listPlaylistsProps);

  const fetchPlaylists = useCallback(async () => {
    try {
      const parsedListPlaylistsProps = JSON.parse(serializedListPlaylistsProps);
      const response = await listPlaylists(parsedListPlaylistsProps);
      if (response.error !== undefined) throw new Error(response.error);
      setPlaylists(response.data);
    } catch (error) {
      setPlaylists(undefined);
    }
  }, [serializedListPlaylistsProps]);

  const { start, stop } = useInterval(fetchPlaylists, interval);

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { playlists, fetchPlaylists };
}
