import { components } from "../../../api/emitunes";

export type PlaylistListWidgetProps = {
  playlists: components["schemas"]["PlaylistList"];
  page: number;
  perPage: number;
};
