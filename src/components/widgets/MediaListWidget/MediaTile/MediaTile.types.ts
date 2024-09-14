import { components } from "../../../../api/emitunes";

export type MediaTileLabels = {
  text: (id: string) => string;
};

export type MediaTileProps = {
  media: components["schemas"]["media_models_Media"];
  labels: MediaTileLabels;
};
