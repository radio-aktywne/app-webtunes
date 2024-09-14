export type UseBindingFormInitialValues = {
  playlist?: string;
  media?: string;
  rank?: string;
};

export type UseBindingFormValidators = {
  playlist?: (value: string | undefined) => string | null | undefined;
  media?: (value: string | undefined) => string | null | undefined;
  rank?: (value: string | undefined) => string | null | undefined;
};

export type UseBindingFormProps = {
  initialValues?: UseBindingFormInitialValues;
  validate?: UseBindingFormValidators;
};
