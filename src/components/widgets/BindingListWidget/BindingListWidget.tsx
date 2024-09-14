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
import { useHydrated, useListBindings } from "../../../hooks";
import { BindingListWidgetProps } from "./BindingListWidget.types";
import { BindingTile } from "./BindingTile";

export function BindingListWidget({
  bindings: prefetchedBindings,
  page,
  perPage,
}: BindingListWidgetProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hydrated = useHydrated();

  const limit = perPage;
  const offset = perPage * (page - 1);
  const { bindings: currentBindings } = useListBindings({ limit, offset });
  const bindings = currentBindings ?? prefetchedBindings;

  const handlePageChange = useCallback(
    (newPage: number) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());
      router.push(pathname + "?" + newSearchParams.toString());
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    const pages = Math.ceil(bindings.count / perPage) || 1;
    if (page > pages) handlePageChange(pages);
  }, [bindings.count, page, perPage, handlePageChange]);

  if (!hydrated) return <Loader />;

  if (bindings.count === 0) {
    return (
      <Stack>
        <Title>{labels.widgets.bindingList.empty.text}</Title>
        <Button component={Link} href="/bindings/new">
          {labels.widgets.bindingList.buttons.create.label}
        </Button>
      </Stack>
    );
  }

  const pages = Math.ceil(bindings.count / perPage);

  return (
    <Stack>
      <Stack>
        {bindings.bindings.map((binding) => (
          <UnstyledButton
            key={binding.id}
            component={Link}
            href={`/bindings/${binding.id}`}
          >
            <BindingTile
              binding={binding}
              labels={labels.widgets.bindingList.tiles.binding}
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
          <Button component={Link} href="/bindings/new">
            {labels.widgets.bindingList.buttons.create.label}
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
}
