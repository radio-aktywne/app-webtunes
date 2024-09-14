"use client";

import {
  Button,
  Center,
  Loader,
  Pagination,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { labels } from "../../../config/labels";
import { useHydrated, useListPlaylists } from "../../../hooks";
import { PlaylistListWidgetProps } from "./PlaylistListWidget.types";
import { PlaylistTile } from "./PlaylistTile";

export function PlaylistListWidget({
  playlists: prefetchedPlaylists,
  page,
  perPage,
}: PlaylistListWidgetProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hydrated = useHydrated();

  const limit = perPage;
  const offset = perPage * (page - 1);
  const { playlists: currentPlaylists } = useListPlaylists({ limit, offset });
  const playlists = currentPlaylists ?? prefetchedPlaylists;

  const handlePageChange = useCallback(
    (newPage: number) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());
      router.push(pathname + "?" + newSearchParams.toString());
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    const pages = Math.ceil(playlists.count / perPage) || 1;
    if (page > pages) handlePageChange(pages);
  }, [playlists.count, page, perPage, handlePageChange]);

  if (!hydrated) return <Loader />;

  if (playlists.count === 0) {
    return (
      <Stack>
        <Title>{labels.widgets.playlistList.empty.text}</Title>
        <Button component={Link} href="/playlists/new">
          {labels.widgets.playlistList.buttons.create.label}
        </Button>
      </Stack>
    );
  }

  const pages = Math.ceil(playlists.count / perPage);

  return (
    <Stack>
      <Stack>
        {playlists.playlists.map((playlist) => (
          <UnstyledButton
            key={playlist.id}
            component={Link}
            href={`/playlists/${playlist.id}`}
          >
            <PlaylistTile
              playlist={playlist}
              labels={labels.widgets.playlistList.tiles.playlist}
            />
          </UnstyledButton>
        ))}
      </Stack>
      <Center>
        <Stack>
          <Pagination
            value={page}
            onChange={handlePageChange}
            total={pages}
            withEdges
          />
          <Button component={Link} href="/playlists/new">
            {labels.widgets.playlistList.buttons.create.label}
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
}
