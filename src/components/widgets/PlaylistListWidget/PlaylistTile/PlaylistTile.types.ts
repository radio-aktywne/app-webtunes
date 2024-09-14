import { components } from "../../../../api/emitunes";

export type PlaylistTileLabels = {
  text: (id: string) => string;
};

export type PlaylistTileProps = {
  playlist: components["schemas"]["playlists_models_Playlist"];
  labels: PlaylistTileLabels;
};
