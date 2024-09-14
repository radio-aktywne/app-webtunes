"use client";

import { Button, Stack, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { usePlaylistForm } from "../../../../hooks";
import { PlaylistFormData, PlaylistFormProps } from "./PlaylistForm.types";

export function PlaylistForm({
  labels,
  validate,
  onCreate,
}: PlaylistFormProps) {
  const { form } = usePlaylistForm({ validate });

  const formSetErrors = form.setErrors;

  const handleCreate = useCallback(
    async (data: PlaylistFormData) => {
      const errors = await onCreate?.(data);
      if (errors != null) formSetErrors(errors);
    },
    [onCreate, formSetErrors],
  );

  return (
    <form onSubmit={form.onSubmit(handleCreate)}>
      <Stack>
        <TextInput
          label={labels.fields.name.title}
          required={true}
          {...form.getInputProps("name")}
        />
        <Button type="submit">{labels.buttons.create.label}</Button>
      </Stack>
    </form>
  );
}
