import {
  UsePlaylistFormInitialValues,
  UsePlaylistFormValidators,
} from "../../../../hooks";

export type PlaylistFormValues = UsePlaylistFormInitialValues;

export type PlaylistFormLabels = {
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

export type PlaylistFormValidators = UsePlaylistFormValidators;

export type PlaylistFormData = {
  name: string | undefined;
};

export type PlaylistFormErrors = {
  name?: string;
};

export type PlaylistFormProps = {
  values: PlaylistFormValues;
  labels: PlaylistFormLabels;
  validate?: PlaylistFormValidators;
  onSave?: (
    data: PlaylistFormData,
  ) => Promise<PlaylistFormErrors | null | undefined>;
  onDelete?: () => void;
};
