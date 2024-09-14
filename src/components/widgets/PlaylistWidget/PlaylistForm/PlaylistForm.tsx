"use client";

import { Button, Stack, TextInput } from "@mantine/core";
import { useCallback, useEffect } from "react";
import { usePlaylistForm } from "../../../../hooks";
import { PlaylistFormData, PlaylistFormProps } from "./PlaylistForm.types";

export function PlaylistForm({
  values,
  labels,
  validate,
  onSave,
  onDelete,
}: PlaylistFormProps) {
  const { form, defaultValues } = usePlaylistForm({
    initialValues: values,
    validate,
  });

  const formSetErrors = form.setErrors;

  const handleSave = useCallback(
    async (data: PlaylistFormData) => {
      const errors = await onSave?.(data);
      if (errors != null) formSetErrors(errors);
    },
    [onSave, formSetErrors],
  );

  const formIsDirty = form.isDirty;
  const formSetFieldValue = form.setFieldValue;
  const formSetInitialValues = form.setInitialValues;

  useEffect(() => {
    if (!formIsDirty("name"))
      formSetFieldValue("name", values.name ?? defaultValues.name);

    formSetInitialValues({ name: values.name ?? defaultValues.name });
  }, [
    values.name,
    formIsDirty,
    formSetFieldValue,
    formSetInitialValues,
    defaultValues.name,
  ]);

  return (
    <form onSubmit={form.onSubmit(handleSave)}>
      <Stack>
        <TextInput
          label={labels.fields.name.title}
          required={true}
          {...form.getInputProps("name")}
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
