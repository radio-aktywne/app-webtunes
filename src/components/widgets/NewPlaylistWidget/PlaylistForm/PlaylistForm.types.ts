import { UsePlaylistFormValidators } from "../../../../hooks";

export type PlaylistFormLabels = {
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

export type PlaylistFormValidators = UsePlaylistFormValidators;

export type PlaylistFormData = {
  name: string | undefined;
};

export type PlaylistFormErrors = {
  name?: string;
};

export type PlaylistFormProps = {
  labels: PlaylistFormLabels;
  validate?: PlaylistFormValidators;
  onCreate?: (
    data: PlaylistFormData,
  ) => Promise<PlaylistFormErrors | null | undefined>;
};
