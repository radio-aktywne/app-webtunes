import { GetPlaylistProps } from "../../actions";
import { components } from "../../api/emitunes";

export type Playlist = components["schemas"]["playlists_models_Playlist"];

export type UseGetPlaylistProps = GetPlaylistProps & {
  interval?: number;
};
