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
import { useHydrated, useListMedia } from "../../../hooks";
import { MediaListWidgetProps } from "./MediaListWidget.types";
import { MediaTile } from "./MediaTile";

export function MediaListWidget({
  media: prefetchedMedia,
  page,
  perPage,
}: MediaListWidgetProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hydrated = useHydrated();

  const limit = perPage;
  const offset = perPage * (page - 1);
  const { media: currentMedia } = useListMedia({ limit, offset });
  const media = currentMedia ?? prefetchedMedia;

  const handlePageChange = useCallback(
    (newPage: number) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());
      router.push(pathname + "?" + newSearchParams.toString());
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    const pages = Math.ceil(media.count / perPage) || 1;
    if (page > pages) handlePageChange(pages);
  }, [media.count, page, perPage, handlePageChange]);

  if (!hydrated) return <Loader />;

  if (media.count === 0) {
    return (
      <Stack>
        <Title>{labels.widgets.mediaList.empty.text}</Title>
        <Button component={Link} href="/media/new">
          {labels.widgets.mediaList.buttons.create.label}
        </Button>
      </Stack>
    );
  }

  const pages = Math.ceil(media.count / perPage);

  return (
    <Stack>
      <Stack>
        {media.media.map((m) => (
          <UnstyledButton key={m.id} component={Link} href={`/media/${m.id}`}>
            <MediaTile
              media={m}
              labels={labels.widgets.mediaList.tiles.media}
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
          <Button component={Link} href="/media/new">
            {labels.widgets.mediaList.buttons.create.label}
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
}
