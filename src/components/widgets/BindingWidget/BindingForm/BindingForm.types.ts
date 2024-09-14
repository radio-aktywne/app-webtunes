import {
  UseBindingFormInitialValues,
  UseBindingFormValidators,
} from "../../../../hooks";

export type BindingFormValues = UseBindingFormInitialValues;

export type BindingFormLabels = {
  fields: {
    playlist: {
      title: string;
      option: (id: string) => string;
    };
    media: {
      title: string;
      option: (id: string) => string;
    };
    rank: {
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

export type BindingFormValidators = UseBindingFormValidators;

export type BindingFormData = {
  playlist: string | undefined;
  media: string | undefined;
  rank: string | undefined;
};

export type BindingFormErrors = {
  playlist?: string;
  media?: string;
  rank?: string;
};

export type BindingFormProps = {
  values: BindingFormValues;
  labels: BindingFormLabels;
  validate?: BindingFormValidators;
  onSave?: (
    data: BindingFormData,
  ) => Promise<BindingFormErrors | null | undefined>;
  onDelete?: () => void;
};
