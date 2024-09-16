import { components } from "../../../../api/emitunes";

export type DownloadButtonProps = {
  media: components["schemas"]["media_models_Media"];
  label: string;
};
