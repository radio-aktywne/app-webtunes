import "client-only";

import { useForm } from "@mantine/form";
import { UseMediaFormProps } from "./useMediaForm.types";

export function useMediaForm({ initialValues, validate }: UseMediaFormProps) {
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
