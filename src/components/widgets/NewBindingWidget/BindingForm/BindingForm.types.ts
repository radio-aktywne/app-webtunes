import { UseBindingFormValidators } from "../../../../hooks";

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
    create: {
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
  labels: BindingFormLabels;
  validate?: BindingFormValidators;
  onCreate?: (
    data: BindingFormData,
  ) => Promise<BindingFormErrors | null | undefined>;
};
