"use client";

import { Button, Stack, Title } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { Metadata } from "next";
import { labels } from "../config/labels";

export const metadata: Metadata = {
  title: labels.pages.error.title,
  description: labels.pages.error.description,
};

export type ErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function Error({ reset }: ErrorProps) {
  return (
    <Stack>
      <Title>{labels.pages.error.text}</Title>
      <Button
        variant="subtle"
        color="gray"
        onClick={reset}
        leftSection={<IconRefresh />}
      >
        {labels.pages.error.buttons.retry.label}
      </Button>
    </Stack>
  );
}
