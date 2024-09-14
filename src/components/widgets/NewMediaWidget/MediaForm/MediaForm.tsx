"use client";

import { Button, Stack, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { useMediaForm } from "../../../../hooks";
import { MediaFormData, MediaFormProps } from "./MediaForm.types";

export function MediaForm({ labels, validate, onCreate }: MediaFormProps) {
  const { form } = useMediaForm({ validate });

  const formSetErrors = form.setErrors;

  const handleCreate = useCallback(
    async (data: MediaFormData) => {
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
