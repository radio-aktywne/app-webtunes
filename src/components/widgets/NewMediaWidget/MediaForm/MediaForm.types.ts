import { UseMediaFormValidators } from "../../../../hooks";

export type MediaFormLabels = {
  fields: {
    name: {
      title: string;
    };
  };
  buttons: {
    create: {
      label: string;
    };
  };
};

export type MediaFormValidators = UseMediaFormValidators;

export type MediaFormData = {
  name: string | undefined;
};

export type MediaFormErrors = {
  name?: string;
};

export type MediaFormProps = {
  labels: MediaFormLabels;
  validate?: MediaFormValidators;
  onCreate?: (
    data: MediaFormData,
  ) => Promise<MediaFormErrors | null | undefined>;
};
