import "client-only";

import { useForm } from "@mantine/form";
import { UsePlaylistFormProps } from "./usePlaylistForm.types";

export function usePlaylistForm({
  initialValues,
  validate,
}: UsePlaylistFormProps) {
  const defaultValues = {
    name: undefined,
  };

  const form = useForm({
    initialValues: {
      name: initialValues?.name ?? defaultValues.name,
    },
    validate: validate,
  });

  return { form, defaultValues };
}
