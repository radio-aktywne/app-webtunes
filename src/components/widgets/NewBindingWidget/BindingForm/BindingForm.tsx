"use client";

import { Button, Loader, Select, Stack, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { useBindingForm } from "../../../../hooks";
import { BindingFormData, BindingFormProps } from "./BindingForm.types";

export function BindingForm({ labels, validate, onCreate }: BindingFormProps) {
  const { form, playlistValues, mediaValues, loading } = useBindingForm({
    validate,
  });

  const formSetErrors = form.setErrors;

  const handleCreate = useCallback(
    async (data: BindingFormData) => {
      const errors = await onCreate?.(data);
      if (errors != null) formSetErrors(errors);
    },
    [onCreate, formSetErrors],
  );

  const playlistSelectData = playlistValues.map((playlist) => ({
    value: playlist,
    label: labels.fields.playlist.option(playlist),
  }));

  const mediaSelectData = mediaValues.map((media) => ({
    value: media,
    label: labels.fields.media.option(media),
  }));

  if (loading) return <Loader />;

  return (
    <form onSubmit={form.onSubmit(handleCreate)}>
      <Stack>
        <Select
          label={labels.fields.playlist.title}
          data={playlistSelectData}
          required={true}
          {...form.getInputProps("playlist")}
        />
        <Select
          label={labels.fields.media.title}
          data={mediaSelectData}
          required={true}
          {...form.getInputProps("media")}
        />
        <TextInput
          label={labels.fields.rank.title}
          required={true}
          {...form.getInputProps("rank")}
        />
        <Button type="submit">{labels.buttons.create.label}</Button>
      </Stack>
    </form>
  );
}
