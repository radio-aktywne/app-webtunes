export type UsePlaylistFormInitialValues = {
  name?: string;
};

export type UsePlaylistFormValidators = {
  name?: (value: string | undefined) => string | null | undefined;
};

export type UsePlaylistFormProps = {
  initialValues?: UsePlaylistFormInitialValues;
  validate?: UsePlaylistFormValidators;
};
