"use client";

import { Button, Loader, Select, Stack, TextInput } from "@mantine/core";
import { useCallback, useEffect } from "react";
import { useBindingForm } from "../../../../hooks";
import { BindingFormData, BindingFormProps } from "./BindingForm.types";

export function BindingForm({
  values,
  labels,
  validate,
  onSave,
  onDelete,
}: BindingFormProps) {
  const { form, defaultValues, playlistValues, mediaValues, loading } =
    useBindingForm({
      initialValues: values,
      validate,
    });

  const formSetErrors = form.setErrors;

  const handleSave = useCallback(
    async (data: BindingFormData) => {
      const errors = await onSave?.(data);
      if (errors != null) formSetErrors(errors);
    },
    [onSave, formSetErrors],
  );

  const formIsDirty = form.isDirty;
  const formSetFieldValue = form.setFieldValue;
  const formSetInitialValues = form.setInitialValues;

  useEffect(() => {
    if (!formIsDirty("playlist"))
      formSetFieldValue("playlist", values.playlist ?? defaultValues.playlist);

    if (!formIsDirty("media"))
      formSetFieldValue("media", values.media ?? defaultValues.media);

    if (!formIsDirty("rank"))
      formSetFieldValue("rank", values.rank ?? defaultValues.rank);

    formSetInitialValues({
      playlist: values.playlist ?? defaultValues.playlist,
      media: values.media ?? defaultValues.media,
      rank: values.rank ?? defaultValues.rank,
    });
  }, [
    values.playlist,
    values.media,
    values.rank,
    formIsDirty,
    formSetFieldValue,
    formSetInitialValues,
    defaultValues.playlist,
    defaultValues.media,
    defaultValues.rank,
  ]);

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
    <form onSubmit={form.onSubmit(handleSave)}>
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
        <Button type="submit" disabled={!form.isDirty() || !form.isValid()}>
          {labels.buttons.save.label}
        </Button>
        <Button color="red" onClick={onDelete}>
          {labels.buttons.delete.label}
        </Button>
      </Stack>
    </form>
  );
}
