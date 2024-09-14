import {
  UseMediaFormInitialValues,
  UseMediaFormValidators,
} from "../../../../hooks";

export type MediaFormValues = UseMediaFormInitialValues;

export type MediaFormLabels = {
  fields: {
    name: {
      title: string;
    };
  };
  buttons: {
    save: {
      label: string;
    };
    delete: {
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
  values: MediaFormValues;
  labels: MediaFormLabels;
  validate?: MediaFormValidators;
  onSave?: (data: MediaFormData) => Promise<MediaFormErrors | null | undefined>;
  onDelete?: () => void;
};
