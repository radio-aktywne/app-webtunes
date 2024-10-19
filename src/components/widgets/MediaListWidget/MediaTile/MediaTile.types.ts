import { components } from "../../../../api/pelican";

export type MediaTileLabels = {
  text: (id: string) => string;
};

export type MediaTileProps = {
  media: components["schemas"]["media_models_Media"];
  labels: MediaTileLabels;
};
