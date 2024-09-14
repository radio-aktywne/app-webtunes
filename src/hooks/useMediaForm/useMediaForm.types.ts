export type UseMediaFormInitialValues = {
  name?: string;
};

export type UseMediaFormValidators = {
  name?: (value: string | undefined) => string | null | undefined;
};

export type UseMediaFormProps = {
  initialValues?: UseMediaFormInitialValues;
  validate?: UseMediaFormValidators;
};
