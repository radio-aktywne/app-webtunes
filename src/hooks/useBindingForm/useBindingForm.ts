import "client-only";

import { useForm } from "@mantine/form";
import { useListMedia } from "../useListMedia";
import { useListPlaylists } from "../useListPlaylists";
import { UseBindingFormProps } from "./useBindingForm.types";

export function useBindingForm({
  initialValues,
  validate,
}: UseBindingFormProps) {
  const defaultValues = {
    playlist: undefined,
    media: undefined,
    rank: undefined,
  };

  const form = useForm({
    initialValues: {
      playlist: initialValues?.playlist ?? defaultValues.playlist,
      media: initialValues?.media ?? defaultValues.media,
      rank: initialValues?.rank ?? defaultValues.rank,
    },
    validate: validate,
  });

  const { playlists } = useListPlaylists({ limit: 1000 });
  const { media } = useListMedia({ limit: 1000 });

  const playlistValues =
    playlists?.playlists.map((playlist) => playlist.id) ?? [];
  const mediaValues = media?.media.map((media) => media.id) ?? [];

  return {
    form,
    defaultValues,
    playlistValues,
    mediaValues,
    loading: playlists === undefined || media === undefined,
  };
}
